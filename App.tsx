import React from 'react';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { Routes } from './src/routes';
import Loading from './src/components/Loading';
import Theme from './src/Theme';
import { TaskProvider } from './src/contexts/TaskContext';


export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_600SemiBold, Inter_700Bold, });

  return (
    <Theme>
      <TaskProvider>
      {fontsLoaded ? <Routes /> : <Loading />}
      </TaskProvider>
    </Theme>
  );
}