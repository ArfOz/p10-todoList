import React, {useState} from "react";
import {View, TextInput, Text, TouchableOpacity} from "react-native";


import {todo_input} from "../styles"

const TodoInput =(props)=>{
    const[text, setText] = useState("");
    return (
        <View style={todo_input.container}>
            <View style ={todo_input.inputContainer}>
                 <TextInput 
                 placeholder="type something..."
                 onChangeText={value => setText(value)}
                 />
            </View>
            <TouchableOpacity 
            style={todo_input.buttonContainer}
            onPress={() => props.onTodoEnter(text)}
            >
            <Text style={todo_input.buttonText}>TodoInput</Text>
            </TouchableOpacity>
        </View>
    )
}
export {TodoInput};