import React from "react";

import {TextInput, Veiw} from "react-native";
import {CustomButton} from './Title'

export default function Form(){
  return(
    <Veiw>
      <TextInput placeholder="Nome" onChangeText = []></TextInput>
      <TextInput placeholder="Sobrenome" onChangeText = []></TextInput>
      <TextInput placeholder="Instagram" onChangeText = []></TextInput>

      <CustomButton title="Cadastrar" onPress {{} => {}}/>
    </Veiw>
  );
}
