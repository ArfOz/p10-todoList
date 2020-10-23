import React, { useState } from 'react';
import { SafeAreaView, View, Text, Button, TextInput,Alert} from 'react-native';

const App = (props) => {
    //       var,   function
    const [counter, setCounter] = useState(1);
    const [liste, setListe] = useState(" ");

    const todo = (text) =>{
       return setListe(text)
    }
    
    const login = () => {
        Alert.alert("CLARUSWAY", `Email: ${liste}`);
    }

       return (
        <SafeAreaView>
            <View>
                
                <Text style={{ fontSize: 50 }}>{counter}{liste}</Text>
                <TextInput
                    style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={arif => todo(arif)}
                    maxLength={40}
                    value={liste}
                    placeholder='Yapılacakları giriniz'
                    />
                    <Button title="görev ekle" onPress={login}/>

                
            </View>
        </SafeAreaView>
    )
}

export default App;