import React, { useState } from 'react'
import { View, Text, Input, StyleSheet, Button, TextInput } from 'react-native'

const startGame = () => {
    const [value, setValue] = useState('')
  return (
    <View style={style.container}>
        <Text style={{fontSize:20, textAlign:'center', padding:10}}>Start a new Game!{'\u{1F600}'}</Text>
        <View style={style.inputContainer}>
            <TextInput style={style.input} autoFocus />
            <View style={style.buttonContainer}>
              
                <Button size={50} color='#BA55D3' title='Reset'/>
                <Button size={50} color='#BA55D3' title='Confirm'/>
            </View>
        </View>
    </View>
  )
}
const style = StyleSheet.create({
    container:{
        flex:1,
    padding:10,
    
    },
    inputContainer:{
        width:300,
        height:200,
        justifyContent:'center',
        alignContent:'center',
        marginRight:'auto',
        marginLeft:'auto',
        maxWidth:'80%',
        elevation:5,
       
        
    },
    buttonContainer:{
        flexDirection:'row',
        flexDirection:'row', 
        justifyContent:'space-between',
        paddingHorizontal:50,

    },
    input:{
        marginVertical: 20,
        borderBottomWidth:2,
        width:50,
    }
})


export default startGame