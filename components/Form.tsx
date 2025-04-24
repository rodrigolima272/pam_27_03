import React {useState} from "react";
import {Text, TextInput, Veiw} from "react-native";
import {CustomButton} from './Title'

export default function Form(){
const [nome, setNome] = useState(' ');
const [sobrenome, setSobrenome] = useState(' ');
const [instagram, setInstagram] = useState(' ');
  
  return(
    <Veiw>
      <TextInput placeholder="Nome" onChangeText = []></TextInput>
      <TextInput placeholder="Sobrenome" onChangeText = []></TextInput>
      <TextInput placeholder="Instagram" onChangeText = []></TextInput>

      <Text>{}, {}, {}<Text/>

      <CustomButton title="Cadastrar" onPress {{} => {}}/>
    </Veiw>
  );
}
