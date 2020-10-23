import React from "react";
import {Dimensions, StyleSheet} from "react-native";

const  main = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#303e45"
    },
    banner: {
        flexDirection:"row",
        justifyContent :"space-between",
        padding:20,
        alignItems:"center"

    },
    todoText: {
        fontWeight: "bold",
        fontSize:50,
        color:"#ff9b31"
    
    },
    todoCount: {
        fontSize:35,
        color:"#ff9b31"

    },
});
const todo_input = StyleSheet.create({
    inputContainer:{
        backgroundColor:"#e0e0e0",
        padding:1,
        margin:5,
        borderRadius:10

    },
    container:{
        backgroundColor: "#a7b6bd", 
        padding:5,
        margin:10,
        borderRadius:5
    },
    buttonContainer:{
        backgroundColor:"#4a636e",
        padding:10,
        margin:10,
        width:Dimensions.get("window").width/3,
        alignSelf:"center",
        borderRadius:8

    },
    buttonText:{
        color:"white",
        fontWeight:"bold",
        textAlign:"center",
    }
})

const todo_card = StyleSheet.create({
    container:{
        backgroundColor:"#a7b6bd",
        margin:10,
        padding:10,
    },
    text:{
        fontSize:20,
    }
})

export {main, todo_input, todo_card};