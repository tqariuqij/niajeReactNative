import { StatusBar } from "expo-status-bar";
import React, { useLayoutEffect } from "react";
import { useState } from "react";
import { StyleSheet, View, KeyboardAvoidingView } from "react-native";
import { Input, Button, Text } from "react-native-elements";
import { auth } from "../firebase";

const RegisterScreen = ({ navigation }) => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [imageUrl, setimageUrl] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerBackTitle: "back to login",
    });
  }, [navigation]);

  const register = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authUser) => {
        authUser.user.updateProfile({
          displayName: name,
          photoURL:
            imageUrl ||
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fcommons.wikimedia.org%2Fwiki%2FFile%3AProfile_avatar_placeholder_large.png&psig=AOvVaw32mZCgduPcSChjfTVx5CEG&ust=1624700745871000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJj294jAsvECFQAAAAAdAAAAABAD",
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <KeyboardAvoidingView behavior='padding' style={styles.container}>
      <StatusBar style='light' />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a signal account
      </Text>

      <View style={styles.inputContainer}>
        <Input
          placeholder='Full Name'
          autoFocus
          type='text'
          value={name}
          onChangeText={(text) => setname(text)}
        />
        <Input
          placeholder='Email'
          type='text'
          value={email}
          onChangeText={(text) => setemail(text)}
        />
        <Input
          placeholder='Password'
          type='text'
          secureTextEntry
          value={password}
          onChangeText={(text) => setpassword(text)}
        />
        <Input
          placeholder='profile picture url (optional)'
          type='text'
          value={imageUrl}
          onChangeText={(text) => setimageUrl(text)}
          onSubmitEditing={register}
        />
      </View>
      <Button
        containerStyle={styles.button}
        raised
        onPress={register}
        title='Register'
      />
    </KeyboardAvoidingView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    backgroundColor: "white",
  },
  inputContainer: {
    width: 300,
  },
  button: { width: 200, marginTop: 10 },
});
