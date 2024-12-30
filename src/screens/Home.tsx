import { StyleSheet, Text, View } from 'react-native';
import Loading from '../components/Loading';

export default function Home() {
  return (
    <View style={styles.container}>
    <Text>Home screen!</Text>
    <Loading />
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
