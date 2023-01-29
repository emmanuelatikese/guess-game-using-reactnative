import React from 'react'
import { View, Text, Input, StyleSheet, Button, TextInput } from 'react-native'

const startGame = () => {
  return (
    <View style={style.container}>
        <Text>Start a new Game!{'\u{1F600}'}</Text>
        <View style={style.inputContainer}>
            <TextInput value={props.enteredValue} />
            <View>
                <View style={{width: 50, padding:15}}>
                <Button title='Reset'/>
                </View>

                <View style={{width: 50, padding:15}}>
                <Button title='Confirm'/>
                </View>
                

                
            </View>
        </View>
    </View>
  )
}

export default startGame