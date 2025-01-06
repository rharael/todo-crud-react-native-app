import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { Routes } from './src/routes';
import Theme from './src/Theme';
import { TaskProvider } from './src/contexts/TaskContext';
import * as SplashScreen from 'expo-splash-screen';

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_600SemiBold, Inter_700Bold });

  useEffect(() => {
    if (!fontsLoaded) {
      SplashScreen.preventAutoHideAsync();
    } else {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  return (
    <Theme>
      <TaskProvider>
        {fontsLoaded ? <Routes /> : null}
      </TaskProvider>
      <StatusBar style="dark" />
    </Theme>
  );
}
