import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from 'react-native';

import icon3 from './assets/ALAS (190).png';

const DismissKeyboard = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    {children}
  </TouchableWithoutFeedback>
);

export default function Page_Login(props) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const APIuser = {
    name: 'cris',
    pass: 123,
  };

  const autenticacao = () => {
    if (usuario.toLowerCase().trim() == APIuser.name && senha == APIuser.pass) {
      props.navigation.navigate('Home');
    } else {
      Platform.OS === 'web' ? alert(`Invalid`) : Alert.alert(`Invalid`);
    }
  };

  return (
    <ImageBackground style={css.Container}>
      <KeyboardAvoidingView style={css.mainContainer}>
        <DismissKeyboard>
          <View style={css.container1}>
            <Image source={icon3} style={{ width: 150, height: 150 }} />
          </View>
        </DismissKeyboard>

        <DismissKeyboard>
          <View style={css.container2}>
            <View style={css.inputBorder}>
              <TextInput
                placeholder="Type your email"
                placeholderTextColor="#FFF5"
                style={css.input}
                clearButtonMode="always"
                value={usuario}
                onChangeText={(t) => setUsuario(t)}
              />
            </View>

            <View style={css.inputBorder}>
              <TextInput
                placeholder="Type your password"
                placeholderTextColor="#FFF5"
                style={css.input}
                secureTextEntry={true}
                value={senha}
                onChangeText={(t) => setSenha(t)}
                clearButtonMode="always"
              />
            </View>

            <TouchableOpacity style={css.btn} onPress={autenticacao}>
              <Text style={css.texto}>SIGN IN</Text>
            </TouchableOpacity>
          </View>
        </DismissKeyboard>

        <DismissKeyboard>
          <View style={css.container3}>
            <Text style={{ fontWeight: 'bold', color: '#fff' }}>
               Cristiane Pereira - Recode - 2021
            </Text>
          </View>
        </DismissKeyboard>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
}

const css = StyleSheet.create({
  Container: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: '',
    paddingVertical: '15%',
    backgroundImage: 'linear-gradient(to right bottom, #F9369E, #F26B6B, #FFAD35)'
  },
  mainContainer: {
    flex: 1,
  },
  container1: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 5,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 20,
  },
  container3: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width: '100%',
    padding: 5,
    borderBottomWidth: 2,
    borderColor: '#fff5',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  inputBorder: {
    backgroundColor: '#fff2',
    width: '100%',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  btn: {
    backgroundColor: '#544FAB',
    marginTop: 12,
    padding: 8,
    borderRadius: 50,
    width: '50%',
  },
  texto: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 5,
  },
});
