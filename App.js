
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header'
import StartGame from './screen/startGame';


export default function App() {
  return (
    <View style={styles.container}>
      <Header text='GUESS GAME' />
      <StartGame/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
