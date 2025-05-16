import React from "react";
import { Button, View } from "react-native";
import { useRouter } from "expo-router";

export default function optionsScreen(){
    const router = useRouter()
    return (
        <View>
            Estou na pagina options

            <Button
            title="Ir para detalhes"
            onPress={() => router.push('/navigation/stack/details')}
            />

        </View>
    );
}