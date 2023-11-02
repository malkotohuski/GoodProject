import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import RegisterScreenStyles from './RegisterScreenStyles'; // Import your styles

const RegisterScreen = ({ navigation }) => { // Assuming you're using navigation in your app
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [repeatPassword, setRepeatPassword] = React.useState('');

  const handleRegister = () => {
    // Implement your registration logic here
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Repeat Password:', repeatPassword);
  };

  return (
    <View style={RegisterScreenStyles.container}>
      <Text>Email:</Text>
      <TextInput
        style={RegisterScreenStyles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text>Password:</Text>
      <TextInput
        style={RegisterScreenStyles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Text>Repeat Password:</Text>
      <TextInput
        style={RegisterScreenStyles.input}
        placeholder="Repeat your password"
        value={repeatPassword}
        onChangeText={(text) => setRepeatPassword(text)}
        secureTextEntry={true}
      />
      <Button title="Register" onPress={handleRegister} />
      <Button
        title="I have an account"
        onPress={() => navigation.navigate('LoginScreen')} // Navigate to your login screen
      />
    </View>
  );
};

export default RegisterScreen;
