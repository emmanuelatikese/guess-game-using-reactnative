import React, { useState } from 'react'

import { View, Text, StyleSheet, Button} from 'react-native'
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
                <Button color={Color.darkpurple} title='Lower'/>
                </Text>
            
          <Text style={{width:20,color: Color.darkpurple,}}> 
           <Button color={Color.darkpurple} title='higher'/>
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