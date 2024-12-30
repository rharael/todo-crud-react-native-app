import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";

import Login from "../screens/Login";
import Home from "../screens/Home";

type AuthRoutes = {
  Login: undefined;
  Home: undefined;
}

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<AuthRoutes>

const { Navigator, Screen } = createNativeStackNavigator<AuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen name="Login" component={Login} />
      <Screen name="Home" component={Home} />
    </Navigator>
  )
}
