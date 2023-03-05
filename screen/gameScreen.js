import React, { useState, useRef, useEffect } from 'react'

import { View, Text, StyleSheet, Button, Alert} from 'react-native'
import numberCard from '../components/numberCard'
import NumberCard from '../components/numberCard'
import Card from '../components/shadowCard'
import Color from '../constant/constantColor'

const gameScreen = (props) => {
    const generateNumber = (max, min, exclude)=>{
        max = Math.floor(max)
        min = Math.ceil(min)
        const rndNum = Math.floor(Math.random()*(max-min))+min
        if (rndNum == exclude ){
            return generateNumber(max, min, exclude)
        }
        return rndNum
    }
    const [numberGuess, SetNumberGuess] = useState(generateNumber(1, 100, props.numberChoice))
    const [roundNumber, setRoundNumber] = useState(0)
    const  currentLower = useRef(0)
    const currentHigh = useRef(100)


    const nextGuessHandler = direction =>{
        if ( (direction === 'lower' && numberGuess < props.numberChoice) || (direction === 'higher' && numberGuess > props.numberChoice)){
            Alert.alert('That a lie !', 'You know that\'s wrong', [{text:'sorry!', style:'cancel' }])
            return;
        }
        if ( direction === 'lower'){
            currentHigh.current = numberGuess
        }
        else{
            currentLower.current = numberGuess
        }

        const nextGuessNumber = generateNumber(currentHigh.current, currentLower.current, numberGuess)
        SetNumberGuess(nextGuessNumber)
        setRoundNumber( curRnd => curRnd + 1)
    }

    const {numberChoice, onGameOver} = props;

    
    useEffect(
        ()=>{
            if ( numberGuess === numberChoice){
                onGameOver(roundNumber)
            }
        }, [numberChoice, onGameOver, numberGuess]
    )


  return (
    <View>
        <Text style={
            {
                textAlign:'center',
                color:Color.mediumpurple,
                fontSize:20,
            }
        }>Opponent's Guess</Text>
        <NumberCard>{numberGuess}</NumberCard>
        <Card style={style.button}>
            <View style={style.setUp}>
            <Text style={{width:20,color: Color.darkpurple,}}>
                <Button color={Color.darkpurple} title='Lower' onPress={()=>{nextGuessHandler('lower')}}/>
                </Text>
            
          <Text style={{width:20,color: Color.darkpurple,}}> 
           <Button color={Color.darkpurple} title='higher' onPress={()=>{nextGuessHandler('higher')}}/>
            </Text>
            </View>
           
        </Card>


    </View>
  )
}

const style = StyleSheet.create({
    button:{
        flexDirection: 'row',
        
        width:300,
        maxwidth:'80%',
        marginTop:20,
        paddingTop:20,
        
        height:90,
        
    },
    setUp:{
        flexDirection:'row',
        width:100,
        flexWrap:'wrap',
        justifyContent:'space-between',
        marginTop:10,
        marginBottom:30,
        marginRight:40,
        

    }

})

export default gameScreen