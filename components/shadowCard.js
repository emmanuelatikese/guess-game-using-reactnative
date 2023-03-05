import React from 'react'
import {View, StyleSheet} from 'react-native'

const shadowCard = (props) => {
  return (
    <View style={{...style.inputContainer, ...props.style}}> 
        {props.children}
    </View>
  )
}

const style = StyleSheet.create({
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
        borderRadius:10,
    },
})

export default shadowCard