import React {useState} from "react";
import {Text, TextInput, Veiw} from "react-native";
import CustomButton from './Title'

export default function Form(){
const [nome, setNome] = useState(' ');
const [sobrenome, setSobrenome] = useState(' ');
const [instagram, setInstagram] = useState(' ');

const [exibir, setExibir] = useState(false);

  function cadastrar(){
    console.log({
      nome: nome,
      sobrenome: sobrenome,
      instagram: instagram,
    });
  }

  function exibirValores(){
    return `${nome}, ${sobrenome}, @${instagram}` 
  }
  
  return(
    <Veiw>
      <TextInput placeholder="Nome" onChangeText = {setNome}></TextInput>
      <TextInput placeholder="Sobrenome" onChangeText = {setSobrenome}></TextInput>
      <TextInput placeholder="Instagram" onChangeText = {setInstagram}></TextInput>

      <Text>
        {exibir ? exibirValores() : ' '}
        <Text/>

      <CustomButton title="Cadastrar" onPress {() => cadastrar()}/>
      <CustomButton title="Exibir" onPress {() => setExibir(true)}/>
    </Veiw>
  );
}
