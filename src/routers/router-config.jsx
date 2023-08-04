import HomePage from "../screens/home/HomePage"
import LoginPage from "../screens/auth/LoginPage"

export const StackNavScreens = [
    {
        name: 'Home',
        component: HomePage,
        // special_access: "user"
    },
    {
        name: 'Login',
        component: LoginPage,
        // special_access: "user"
    },
]