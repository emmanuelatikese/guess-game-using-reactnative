import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


const header = (props) => {
  return (
    <View style={style.container}>
        <Text style={style.textWrapper}>{'\u{2B50}'} {props.text} {'\u{2B50}'}</Text>
    </View>
  )
}

const style = StyleSheet.create({
    container:{
        paddingTop:20,
        backgroundColor:'#BA55D3',
        width:'100%',
        height:90,
        alignItems:'center',
        justifyContent:'center',
    },
    textWrapper:{
        fontSize:20,
        fontWeight:'bold',
        marginTop:10,
    }
})

export default header