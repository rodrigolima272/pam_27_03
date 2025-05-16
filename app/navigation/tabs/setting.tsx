import React, { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function SettingsScreen(){
    const router = useRouter()
    return (
        <View>
            Estou na tela de configuração
        </View>
    )
}