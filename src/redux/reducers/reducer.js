import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import callAxios from '../../services/api/axios';
import {endpoints} from '../../services/api/endpoints';
import {token_endpoint, FindAccessToken} from '../../helper/setAccessToken';
import {
  isPendingAction,
  isFulfilledAction,
  isRejectedAction,
} from '../actions/reduxActionHelpers';
import trueTypeOf from '../util/trueTypeOf';
import customReducer from '../../helper/customReducer';

export const createApiThunk = (thunkName, payload, loadingData) =>
  createAsyncThunk(`${thunkName}`, async (data, thunkAPI) => {
    const {endpoint} = payload;
    thunkAPI.dispatch(loadingSlice.actions.setLoading(loadingData));

    try {
      // await new Promise(resolve => setTimeout(resolve, 100));
      let response = await callAxios(payload);
      if (response?.status == 'fail') {
        if (response?.error == 'access token is expired or invalid') {
          console.log(thunkName, 'it is in removeAccessToken');
          thunkAPI.dispatch(AccessTokenSlice.actions.removeAccessToken());
          thunkAPI.dispatch(ExpireAlertBox.actions.setExpireAlertBox(true));
          // window.location.reload()
        }
      }

      if (thunkName === token_endpoint) {
        thunkAPI.dispatch(
          AccessTokenSlice.actions.setAccessToken(FindAccessToken(response)),
        );
      }

      if (endpoint?.res_modifier) {
        let currentObject = thunkAPI.getState();
        for (const key of thunkName.split('/')) {
          if (currentObject.hasOwnProperty(key)) {
            // Move to the next nested level
            currentObject = currentObject[key];
          } else {
            break;
          }
        }
        // console.log(currentObject,"currentObject")
        response = endpoint.res_modifier(response, currentObject?.data);
      }

      if (Number(endpoint?.expire_in > 0)) {
        const currentDate = new Date();
        const expireDate = new Date();
        expireDate.setDate(currentDate.getDate() + Number(endpoint?.expire_in));
        response.expireDate = expireDate;
      }

      // console.log(response);
      return response || null;
    } catch (error) {
      // console.log(error);
      throw error;
    } finally {
      thunkAPI.dispatch(loadingSlice.actions.setLoading(loadingData));
    }
  });

export const slice = {};

Object.entries(endpoints).forEach(([key]) => {
  const initialState = {};

  slice[key] = createSlice({
    name: key,
    initialState,
    reducers: customReducer,
    extraReducers: builder => {
      builder
        // .addMatcher(isPendingAction(`${key}/`), (state, action) => {
        //   if (state[`${action.type.split("/")[1]}`]) {
        //     return {
        //       ...state,
        //       [`${action.type.split("/")[1]}`]: {
        //         data:
        //           state[`${action.type.split("/")[1]}`] == "object"
        //             ? { ...state[`${action.type.split("/")[1]}`] }
        //             : state[`${action.type.split("/")[1]}`],
        //         frame_status: "loading",
        //       },
        //     };
        //   } else {
        //     return {
        //       ...state,
        //       [`${action.type.split("/")[1]}`]: {
        //         ...state[`${action.type.split("/")[1]}`],
        //         frame_status: "loading",
        //       },
        //     };
        //   }
        // })
        .addMatcher(isPendingAction(`${key}/`), (state, action) => ({
          ...state,
          [`${action.type.split('/')[1]}`]: {
            ...state[`${action.type.split('/')[1]}`],
            frame_status: 'loading',
          },
        }))
        .addMatcher(isFulfilledAction(`${key}/`), (state, action) => ({
          ...state,
          [`${action.type.split('/')[1]}`]: {
            frame_status: 'success',
            data:
              trueTypeOf(action.payload) == 'object'
                ? {...action.payload}
                : action.payload,
          },
        }))
        .addMatcher(isRejectedAction(`${key}/`), (state, action) => ({
          ...state,
          [`${action.type.split('/')[1]}`]: {
            frame_status: 'failed',
            error: action.error.message,
          },
        }));
    },
  });
});

const INITIAL_STATE = {};
export const loadingSlice = createSlice({
  name: 'loading',
  initialState: INITIAL_STATE,
  reducers: {
    setLoading: (state, action) => {
      const {group_name, uniqueAPI_id} = action.payload;
      if (group_name == null) {
        return state;
      }
      const timestamp = new Date().getTime();
      const existingData = state[group_name];
      if (existingData && existingData[`state_${uniqueAPI_id}`]) {
        delete existingData[`state_${uniqueAPI_id}`];

        if (Object.keys(existingData).length === 0) {
          delete state[group_name];
        }
      } else {
        if (!existingData) {
          state[group_name] = {};
        }

        state[group_name][`state_${uniqueAPI_id}`] = timestamp;
      }
      return state;
    },
  },
});

export const AccessTokenSlice = createSlice({
  name: 'AccessToken',
  initialState: '',
  reducers: {
    setAccessToken: (state, action) => {
      if (action.payload) {
        return action.payload;
      } else {
        return '';
      }
    },
    removeAccessToken: (state, action) => {
      return '';
    },
  },
});

export const ExpireAlertBox = createSlice({
  name: 'ExpireAlertBox',
  initialState: false,
  reducers: {
    setExpireAlertBox: (state, action) => {
      return action.payload;
    },
    removeExpireAlertBox: (state, action) => {
      return false;
    },
  },
});

export default {
  slice,
  loadingSlice,
  AccessTokenSlice,
  ExpireAlertBox,
  createApiThunk,
};
