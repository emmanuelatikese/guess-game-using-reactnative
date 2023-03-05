import React from 'react'
import Card from './shadowCard'
import { Text, StyleSheet } from 'react-native'
import Color from '../constant/constantColor'


const numberCard = (props) => {

  return (
   <Card style={style.someChange}>
    <Text style={{textAlign:'center', fontSize:35, color:Color.mediumpurple}}>{props.children}</Text>
   </Card> 
  )
}


const style = StyleSheet.create({
  someChange:{
    height: 70,
    width:70,
    marginTop:10,
    paddingVertical:10,
    
  }
})

export default numberCard