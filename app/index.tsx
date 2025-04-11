import CustomButton from "@/components/Title";
import React, { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

export default function HomeScreen() {
    const name = "Alisson"

    const [count, setCount] = useState(0);
    const [nome, setNome] = useState(name);

    return(
        <View style={{flex: 1, justifyContent:"center", alignItems: "center"}}>
            <Text>Bem-vindo ao meu App, {nome} :D</Text>
            <Text>Contador: {count}</Text>
            <Button title="Aumentar" onPress={() => {setCount(count + 1)}}/>
            <Button title="Diminuir" onPress={() => {setCount(count - 1)}}/>
            <Button title="Resetar" onPress={() => {setCount(- 0)}}/>

            <TextInput placeholder="Digite algo" onChangeText={setNome}/>

            <CustomButton title="Botão Vermelho" onPress={() => {setNome("Alisson " + count)}}/>
        </View>
    );

}