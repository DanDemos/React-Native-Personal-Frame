import HomePage from "../screens/home/HomePage"
import LoginPage from "../screens/auth/LoginPage"
import ContactPage from "../screens/contact/ContactPage"
import { IconComp } from "../components/icon/icon"


export const StackNavScreens = [
    {
        name: 'Home',
        component: HomePage,
        icon: ({color}) => {
            return <IconComp name="home" type="awesome" size={30} color={color} />}
        // special_access: "user"
    },
    {
        name: 'Login',
        component: LoginPage,
        icon: ({color}) => {return <IconComp name="login-variant" type="mcommunity" size={30} color={color} />}
        // special_access: "user"
    },
    {
        name: 'Contact',
        component: ContactPage,
        // special_access: "user"
    },
]