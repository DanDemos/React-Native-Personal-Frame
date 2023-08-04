import { useSelector } from "react-redux";
import { Text } from "react-native";

const LoadingComponent = ({ loadingGroup, loadingDesign, children }) => {
  const selectedData = useSelector(state => state.loading[loadingGroup]);

  return (
    selectedData ? (loadingDesign || <Text>It is Loading! Baka!</Text>) : children
  );
};

export default LoadingComponent;
