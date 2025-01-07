import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import { TaskProvider } from '../contexts/TaskContext';
type AppRoutes = {
  Home: undefined;
};

const { Navigator, Screen } = createNativeStackNavigator<AppRoutes>();

export function AppRoutes() {
  return (
    <TaskProvider>
      <Navigator screenOptions={{ headerShown: false }}>
        <Screen name="Home" component={Home} />
      </Navigator>
    </TaskProvider>
  );
}
