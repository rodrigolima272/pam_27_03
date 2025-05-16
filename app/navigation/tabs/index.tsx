import React from 'react'
import { View, Text, Button, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";
import { StyleSheet } from 'react-native';
  

export default function HomeScreen() {
    const name = "Rodrigo"
    const rounter = useRouter();
    const[count, setCount] = useState(0);
    const[nome, setNome] = useState(0);
    const styles = StyleSheet.create;

    useEffect(() => {
        console.log("componente montado!");     
    }, [])

    return(
        <View style={{flex: 1, justifyContent:"center", alignItems: "center"}}>
            <Text>Bem-vindo ao meu App, {name} :D</Text>
            <TextInput placeholder="Digite algo" onChangeText={setNome}/>
            <Text>Contador: {count}</Text>
            <Button title="Aumentar" onPress={() => {setCount(count + 1)}}/>
            <Button title="Diminuir" onPress={() => {setCount(count - 1)}}/>
            <Button title="Resetar" onPress={() => {setCount(- 0)}}/>
            <Button title = "Ir para Sobre" onPress={() => rounter.push("/about")}/>

            <Text style={styles.title}>Menu de Navegação</Text>
            
           

            </View>
    );
}
