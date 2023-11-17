/* eslint-disable linebreak-style */
/* eslint-disable arrow-parens */
import {StyleSheet, Text, View, TextInput,
  TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import axios from 'axios';

/**
 * @return {signup}
 */
// eslint-disable-next-line react/prop-types
const SignUp = ({navigation}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = async () => {
    if (name === '' || email === '' || password === '') {
      alert('All fields are required');
    }
    await axios.post('http://localhost:8001/api/signup', {name, email, password});
    alert('Sign Up Successful');
  };
  return (
    <KeyboardAwareScrollView contentContainerStyle={styles.container}>
      <View style={{marginVertical: 100}}>
        <View style={styles.imageContainer}>
          {/* eslint-disable-next-line react/jsx-no-undef */}
          <Image source={require('../../assets/logo.png')}
            style={styles.imageStyles}/>
        </View>
        <Text style={styles.signupText}>SignUp</Text>
        {/* Name Input */}
        <View style={{marginHorizontal: 24}}>
          <Text style={{fontSize: 16, color: '#8e93a1'}}>NAME</Text>
          <TextInput style={styles.signupInput} value={name}
            onChangeText={text => setName(text)}
            autoCapitalize='words'
            autoCorrect={false}/>
        </View>
        {/* Email */}
        <View style={{marginHorizontal: 24}}>
          <Text style={{fontSize: 16, color: '#8e93a1'}}>EMAIL</Text>
          <TextInput style={styles.signupInput} value={email}
            onChangeText={text => setEmail(text)}
            autoComplete='email'
            keyboardType='email-address'/>
        </View>
        {/* Password */}
        <View style={{marginHorizontal: 24}}>
          <Text style={{fontSize: 16, color: '#8e93a1'}}>PASSWORD</Text>
          <TextInput style={styles.signupInput} value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
            autoComplete='password'/>
        </View>
        <TouchableOpacity onPress={handleSubmit} style={styles.buttonStyle}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
        <Text style={{fontSize: 12, textAlign: 'center'}}>
          Already Joined? {' '}
          <Text style={{fontWeight: 'bold', color: 'darkred'}}
            // eslint-disable-next-line react/prop-types
            onPress={() => navigation.navigate('SignIn')}>
          Sign In
          </Text>
        </Text>
        {/* Stringify */}
        {/* <Text style={{marginHorizontal: 24}}>
          {JSON.stringify({name, email, password})}
        </Text> */}
      </View>
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  signupText: {
    fontSize: 30,
    textAlign: 'center',
  },
  signupInput: {
    borderBottomWidth: 0.5,
    height: 48,
    borderBottomColor: '#8e93a1',
    marginBottom: 30,
    backgroundColor: 'lightgray',
  },
  buttonStyle: {
    backgroundColor: 'darkmagenta',
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    marginHorizontal: 15,
    borderRadius: 15,
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  imageContainer: {justifyContent: 'center', alignItems: 'center'},
  imageStyles: {width: 100, height: 100, marginVertical: 20},
});

export default SignUp;
