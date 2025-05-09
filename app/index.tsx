import React from 'react'
import { View, Text, Button, StyleSheet, TextInput } from "react-native";
import { useRouter } from "expo-router";
import { useState, useEffect } from "react";
import Form from '@/components/Form'

export default function HomeScreen() {
    const name = "Alisson"
    const rounter = useRounter();
    const[count, setCount] = useState(0);
    const[nome, setNome] = useState(0);

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
            
            <Button 
             title="Stack Navigaton"
             onPress={()=>rounter.push('/navigation/stack')}
                />
            <Button 
             title="Tab Navigaton"
             onPress={()=>rounter.push('/navigation/tab')}
                />
            <Button 
             title="Drawner Navigaton"
             onPress={()=>rounter.push('/navigation/drawner')}
                />

            <Form />
        </View>
    );
}
