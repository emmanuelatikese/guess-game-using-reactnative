import React, { useRef, useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Colors from '../constant/constantColor'


const startGame = () => {
    const [Value, setValue] = useState('')
    const [confirmValue, setConfirmValue] = useState(false)
    const [SelectValue, setSelectValue] = useState()    

const confirmHandler = ()=>{
    let num = parseInt(Value)
    
    if(isNaN(num) || num <= 0){
        Alert.alert('Invalid Number', 'Number has to be between 0-99', [{text:'Sure', style:'destructive', onPress:resetHandler}])
        return;
    }
    setConfirmValue(true)
    setSelectValue(num)
    setValue('')
}
const resetHandler = ()=>{
    setValue('')
}

    let outputConfirm;

    if (confirmValue){
        outputConfirm = <View>
            <Text>Number {SelectValue} was choosen</Text>
        </View>
        setConfirmValue(false)
    }


    const AddNumberHandler = (text)=>{
         setValue(text.replace(/[^0-9]/g,''))// replace characters which are not numerals.
         console.log(text)
     }
    
  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
<View style={style.container}>
        <Text style={{fontSize:20, textAlign:'center', padding:10}}>Start a new Game!{'\u{1F600}'}</Text>
        <View style={style.inputContainer}>
            <Text style={{textAlign:'center'}}>Select a number</Text>
                <TextInput 
                style={style.input} 
                autoFocus
                value={Value} 
                blurOnSubmit  
                autoCapitalize='none' 
                keyboardType='number-pad' 
                maxLength={2} 
                onChangeText={(Value)=> AddNumberHandler(Value)}/>
                    
                <View style={style.buttonContainer}>
                <View style={style.button}><Button color={Colors.mediumpurple} title='Reset' onPress={()=> setValue('')}/></View>
                <View style={style.button}><Button  color={Colors.mediumpurple} title='Confirm' onPress={confirmHandler}/></View>  
                </View>
        </View>
                 {outputConfirm}
    </View>
    </TouchableWithoutFeedback>
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
        shadowOpacity:0.26,
        shadowRadius:5,
        shadowOffset:0,
        shadowColor:'black',
        borderWidth:0,
        padding:10,
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
        marginRight:'auto',
        marginLeft:'auto',
        marginVertical:25,
        textAlign:'center',
        fontSize:20,

    },
    button:{
        width:'auto',
    }
})


export default startGame