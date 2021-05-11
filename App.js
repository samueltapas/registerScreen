import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const cadastro = () => {
    { name.length <= 4 && email.length === 0 && password.length === 0 ? 
    (alert('Informe nome e sobrenome! Email e senha válidos')) : 
    (alert(`Olá ${name}! O seu cadastro foi efetuado com sucesso, 
    enviamos a sua senha para o email: ${email}`))}
  }

  return (
    <View style={styles.container}>
      <StatusBar hidden />
      
      <Image style={{width:100, height:100, marginBottom:40}} source={require('./assets/register.png')}/>

      <Text style={styles.text}>Nome Completo:</Text>
      <TextInput 
        style={styles.textInput} 
        onChangeText={text=>setName(text)} 
        placeholder="Digite o seu nome"
      />

      <Text style={styles.text}>Seu melhor email:</Text>
      <TextInput 
        style={styles.textInput} 
        onChangeText={text=>setEmail(text)} 
        placeholder="email@email.com"
      />

      <Text style={styles.text}>Sua melhor senha:</Text>
      <TextInput 
        style={styles.textInput} 
        onChangeText={text=>setPassword(text)} 
        placeholder="*1 letra maiuscula, numeros*"
        secureTextEntry={true}
      />

      <TouchableOpacity style={styles.btnRegister} onPress={()=>cadastro()}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d4d4d4',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20

  },
  textInput: {
    width: '100%',
    height: 40,
    backgroundColor: 'white',
    borderRadius:20,
    paddingLeft: 20,
    marginBottom: 30
  },
  text: {
    fontWeight: "bold",
    color: "grey",
    marginLeft: -230,
    marginBottom: 10
  },
  btnRegister: {
    width:"50%",
    height:60,
    backgroundColor: "#53a1b5",
    marginTop:20,
    textAlign: 'center',
    alignItems: 'center',
    borderRadius: 300,
    justifyContent: 'center'
  }
});
