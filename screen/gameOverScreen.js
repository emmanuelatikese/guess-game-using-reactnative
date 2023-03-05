import {Text, View, Button} from 'react-native'
import { useEffect } from 'react'
import Color from '../constant/constantColor'



const GameOver = (props)=>{




    return (
        <View>
            <Text style={{
                textAlign:'center', fontSize:20,
                marginTop:100,
                color:Color.darkpurple
            }}>
                Game Over !
            </Text>
            <Text style={{
                textAlign:'center', fontSize:20,
                marginTop:50,
                color:Color.darkpurple
            }}>
             Number of rounds:{props.NumberRnd}
            </Text>

            <Text style={{
                textAlign:'center', fontSize:20,
                marginTop:5,
                color:Color.darkpurple
            }}> Number Guessed:{props.numberGuess}</Text>

            <Text style={{ width: 10, marginLeft:120, marginTop:10}}>

            <Button color={Color.mediumpurple} title='Start Again'  onPress={()=>props.onStartOver()}/>
            </Text>
            
        </View>
    )
}


export default GameOver