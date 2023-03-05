import React, { useState } from 'react'
import { View, Text, StyleSheet, Button, TextInput, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native'
import Colors from '../constant/constantColor'
import Card from '../components/shadowCard'
import NumCard from '../components/numberCard'


const startGame = (props) => {
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
    Keyboard.dismiss()
}
const resetHandler = ()=>{
    setValue('')
    setConfirmValue(false)
}




    const AddNumberHandler = (text)=>{
         setValue(text.replace(/[^0-9]/g,''))
         console.log(text)
     }
    

     const outputConfirm = confirmValue 
     ? (<Card>
         <Text style={{textAlign: 'center', fontSize:15, color:Colors.darkpurple}}>Number Selected</Text>
         <NumCard>{SelectValue}</NumCard>
         <View style={{width:100, height:50, marginLeft:'auto', marginRight:'auto', marginTop: 20}}>
             <Button title='Start Game' color={Colors.mediumpurple} onPress={()=>props.onStartGame(SelectValue)}/></View>
       </Card> ) 
     : null;

  return (
    <TouchableWithoutFeedback onPress={()=> Keyboard.dismiss()}>
<View style={style.container}>
        <Text style={{fontSize:20, textAlign:'center', padding:10, color:Colors.darkpurple}}>Start a new Game!{'\u{1F600}'}</Text>
        <Card>
            <Text style={{textAlign:'center', color:Colors.darkpurple}}>Select a number</Text>
                <TextInput 
                style={style.input} 
                autoFocus
                value={Value} 
                blurOnSubmit  
                autoCapitalize='none' 
                keyboardType='number-pad' 
                maxLength={2} 
                onChangeText={(Value) => AddNumberHandler(Value)}/>
                    
                <View style={style.buttonContainer}>
                <View style={style.button}><Button color={Colors.mediumpurple} title='Reset' onPress={resetHandler}/></View>
                <View style={style.button}><Button  color={Colors.mediumpurple} title='Confirm' onPress={confirmHandler}/></View>  
                </View>
        </Card>
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