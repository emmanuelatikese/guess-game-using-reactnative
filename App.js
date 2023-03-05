
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header'
import StartGame from './screen/startGame';
import GameScreen from './screen/gameScreen';

export default function App() {
 

  const [ selectedValue, setSelectValue] = useState()

  const StartGameHandler = (Value)=>{
    setSelectValue(Value)
  }

  let MainScreen = <StartGame onStartGame={StartGameHandler} />

  if (selectedValue){
    MainScreen = <GameScreen numberChoice={selectedValue}/>
  }

  return (
    <View style={styles.container}>
      <Header text='GUESS GAME' />
      {MainScreen}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
