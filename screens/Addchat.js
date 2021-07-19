import React, { useState } from "react";
import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";
import { Input } from "react-native-elements/dist/input/Input";
import Icon from "react-native-vector-icons/FontAwesome";
import { db } from "../firebase";

const Addchat = ({ navigation }) => {
  const [input, setinput] = useState("");

  useLayoutEffect(() => {
    navigation.setOptions({
      title: "add a new chat",
      headerBackTitle: "chats",
    });
  }, [navigation]);

  const createChat = async () => {
    await db
      .collection("chats")
      .add({
        chatName: input,
      })
      .then(() => {
        navigation.navigate("Home");
      })
      .catch((error) => alert(error));
  };

  return (
    <View style={styles.container}>
      <Input
        placeholder='Enter a chat name'
        value={input}
        onChangeText={(text) => setinput(text)}
        onSubmitEditing={createChat}
        leftIcon={
          <Icon name='wechat' type='antdesign' size={24} color='black' />
        }
      />
      <Button onPress={createChat} title='create new chat' />
    </View>
  );
};

export default Addchat;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 30,
    height: 100,
  },
});
