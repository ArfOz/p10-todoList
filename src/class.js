import React from 'react';
import { SafeAreaView, View, Text, Button,TextInput, useState } from 'react-native';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0,
            liste:[],
            work: " "
        } 
    }

    ekle = () =>{
        this.setState(prevState =>{
            let {counter, liste, work} =prevState;
        })
    }

    sil = () =>{}

      render() {
        return (
            <SafeAreaView>
                <View>
                    <Text style={{ fontSize: 20 }}>{this.state.liste}</Text>
                    <Text style={{ fontSize: 250 }}>{this.state.counter}</Text>

                    <TextInput
                        style={{ height: 40, borderColor: 'gray', borderWidth: 5 }}
                        onChangeText={text => ekle()}
                        maxLength={40}
                        placeholder="add a work"
                       
                        
                        

                        />

                    <Button
                        title="Up!"
                        onPress={() => this.setState({ counter: this.state.counter + 1 })}
                    />

                    
                </View>
            </SafeAreaView>
        )
    }
}

export default App