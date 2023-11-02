import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import HomeScreenStyles from './HomeScreenStyles';

const HomeScreen = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    // Implement your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={HomeScreenStyles.container}>
      <Text>Email:</Text>
      <TextInput
        style={HomeScreenStyles.input}
        placeholder="Enter your email"
        value={email}
        onChangeText={(text) => setEmail(text)}
      />
      <Text>Password:</Text>
      <TextInput
        style={HomeScreenStyles.input}
        placeholder="Enter your password"
        value={password}
        onChangeText={(text) => setPassword(text)}
        secureTextEntry={true}
      />
      <Button title="Login" onPress={handleLogin} />

      <Button
        title="I don't have an account"
        onPress={() => console.log("Navigate to sign up screen")}
      />
    </View>
  );
};

export default HomeScreen;
