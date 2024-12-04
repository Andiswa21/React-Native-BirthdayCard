import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ImageBackground } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

const App = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [cardImage, setCardImage] = useState(require('../assets/images/baloon.jpg'));

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Create Your Birthday Card</Text>

      <ImageBackground source={cardImage} style={styles.cardImage} >
        <View style={styles.textOverlay}>
          <Text style={styles.cardText}>Happy Birthday, {name}!</Text>
          <Text style={styles.cardText}>{message}</Text>
        </View>
      </ImageBackground>

      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        onChangeText={text => setName(text)}
        value={name}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Birthday Message"
        onChangeText={text => setMessage(text)}
        value={message}
      />


      <Button
        title="Choose Image"
        onPress={async () => {
          let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          });

          if (!result.canceled) {
            setCardImage({ uri: result.uri });
          }
        }}
      />

      <Button title="Reset" onPress={() => { setName(''); setMessage(''); setCardImage(require('../assets/images/baloon.jpg')); }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f8ff',
    alignItems: 'center',
  },
  header: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4b0082',
    marginBottom: 20,
    textAlign: 'center',
  },
  cardImage: {
    width: '100%',
    height: 250,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    overflow: 'hidden',
  },
  input: {
    height: 40,
    borderColor: '#4b0082',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    width: '90%',
    borderRadius: 5,
    backgroundColor: 'rgba(0, 0, 0, 0.3)',
  },
  cardPreview: {
    marginTop: 20,
    padding: 20,
    backgroundColor: '#ffe4e1',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    width: '90%',
    alignItems: 'center',
  },
  cardText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333',
    marginBottom: 5,
  },
  resetButton: {
    marginTop: 20,
    backgroundColor: '#4b0082',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  resetButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});


export default App;