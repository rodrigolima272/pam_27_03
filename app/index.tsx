import { Button, Text, TextInput, View } from "react-native";
import { useRounter } from "expo-rounter";
import { useState, useEffect } from "react";

export default function HomeScreen() {
    const rounter = useRounter();
    const[count, setCount] = useState(0);

    useEffect(() => {
        console.log("componente montado!");
    }, [])

    return(
        <View style={{flex: 1, justifyContent:"center", alignItems: "center"}}>
            <Text>Bem-vindo ao meu App, {nome} :D</Text>
            <TextInput placeholder="Digite algo" onChangeText={setNome}/>
            <Text>Contador: {count}</Text>
            <Button title="Aumentar" onPress={() => {setCount(count + 1)}}/>
            <Button title="Diminuir" onPress={() => {setCount(count - 1)}}/>
            <Button title="Resetar" onPress={() => {setCount(- 0)}}/>
            <Button title = "Ir para Sobre" onPress={() => rounter.push("/about")}/>
        </View>
    );
}
