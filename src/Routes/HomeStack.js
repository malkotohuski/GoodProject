import { createStackNavigator } from "react-navigation/stack";
import {createAppContainer} from 'react-navigation';

import HomeScreen from "../Screens/Home/HomeScreen";
import RegisterScreen from "../Screens/Register/RegisterScreen";

const screens = {
    HomeScreen: {
        screen: HomeScreen
    },
    RegisterScreen: {
        screen: RegisterScreen
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);