import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icons from './assets/icons';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Home page!</Text>
      <Icons.LogoRocket />
      <Icons.LogoTodo />
      <Icons.LogoBrand />
      <Icons.ClipboardTextRegular />
      <Icons.CircleRegular />
      <Icons.CheckCircleFill />
      <Icons.TrashRegular />
      <Icons.PlusCircleRegular />
      <Icons.Search />
      <Icons.Spinner />
      <Icons.SpinnerGap />
      <Icons.Exit />
      <Icons.Close />
      <Icons.Eye />
      <Icons.EyeClosed />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
