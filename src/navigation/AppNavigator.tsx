import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { LoginScreen } from "../screens/LoginScreen/LoginScreen";
import { HomeScreen } from "../screens/HomeScreen/HomeScreen";
import { ProfileScreen } from "../screens/ProfileScreen/ProfileScreen";
import { PATHS } from './paths';
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { RootStackParamList, TabParamList } from './navigation.types';

const Stack = createNativeStackNavigator<RootStackParamList>();
const Tab = createMaterialTopTabNavigator<TabParamList>();

export const AppNavigator = () => {
    const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

    return (
        !isLoggedIn ? (
            <Stack.Navigator >
                <Stack.Screen
                    name={PATHS.LOGIN_SCREEN as keyof RootStackParamList}
                    component={LoginScreen}
                    options={{
                        headerShown: false
                    }}
                />
            </Stack.Navigator>
        ) : (
            <Tab.Navigator initialRouteName={PATHS.HOME_SCREEN as keyof TabParamList}>
                <Tab.Screen
                    key={PATHS.HOME_SCREEN}
                    name={PATHS.HOME_SCREEN as keyof TabParamList}
                    component={HomeScreen}
                />
                <Tab.Screen
                    key={PATHS.PROFILE_SCREEN}
                    name={PATHS.PROFILE_SCREEN as keyof TabParamList}
                    component={ProfileScreen}
                />
            </Tab.Navigator>
        )
    );
};
