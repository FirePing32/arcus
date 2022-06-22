import React, { useState } from 'react';
import { Pressable, Image, View, Text, StyleSheet, useColorScheme } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Colors from '../components/colors'

export default function ImagePickerExample() {
  const [image, setImage] = useState(null);
  let colorScheme = useColorScheme()

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let imageLibraryResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    });

    if (!imageLibraryResult.cancelled) {
      setImage(imageLibraryResult.uri);
    }
  };

  const captureImage = async () => {
    let captureResult = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 0.8,
    })

    if (!captureResult.cancelled) {
      setImage(captureResult.uri);
    }
  }

  const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      margin: 10,
      borderRadius: 7,
      backgroundColor: colorScheme == 'dark' ? Colors.DARK_WIDGET : Colors.LIGHT_WIDGET,
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: colorScheme == 'dark' ? Colors.LIGHT_TEXT : Colors.DARK_TEXT,
    },
  });

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: colorScheme == 'dark' ? Colors.DARK : Colors.LIGHT }}>
      <Pressable style={styles.button} onPress={pickImage}>
        <Text style={styles.text}>Choose from gallery</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={captureImage}>
        <Text style={styles.text}>Capture Image</Text>
      </Pressable>
        {image && <Image source={{ uri: image }} style={{ width: 200, height: 200, margin: 20 }} />}
    </View>
  );
}
