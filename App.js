
import { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/header'
import StartGame from './screen/startGame';
import GameScreen from './screen/gameScreen';
import GameOver from './screen/gameOverScreen';

export default function App() {
 

  const [ selectedValue, setSelectValue] = useState()
  const [roundGuess, setRoundGuess] = useState(0)

  const gameOverHandler = (NumberRound)=>{
    setRoundGuess(NumberRound)
  }

 

  const StartGameHandler = (Value)=>{
    setSelectValue(Value)
    setRoundGuess(0)
    setStartOver(false)
  }

  const [startOver, setStartOver] = useState(false)

  const startOverHandler = () => {
    setStartOver(true)
  }


 


  let MainScreen = <StartGame onStartGame={StartGameHandler} />

 

  if (selectedValue && roundGuess <= 0 ){
   MainScreen = <GameScreen numberChoice={selectedValue} onGameOver = {gameOverHandler} />
  }
  else if (roundGuess > 0){
    MainScreen = <GameOver NumberRnd = {roundGuess} numberGuess={selectedValue} onStartOver={startOverHandler}/>
  }

  if ( startOver){
    MainScreen = <StartGame onStartGame={StartGameHandler} />
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
