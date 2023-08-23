import { View, Text, Image, Button, Alert } from 'react-native'
import React, { useState } from 'react'
// import MenuButtonItem from '../Components/MenuButtonItem';
import ImagePicker from 'react-native-image-crop-picker';

const CameraScreen = () => {

  const [image, setImage] = useState('https://fakeimg.pl/150x150')

  const createTwoButtonAlert = () =>
    Alert.alert('Aalizando imagen', 'Espere mientras conseguimos su resultado', [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Resultado', onPress: () => Alert.alert('Tienes una quemadura de 3er grado.')},
    ]);

  const selectImage = () => {

    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      console.log(image);
    });

  }

  return (
    <View>
      <Image
        style = {{
          alignSelf: 'center',
          height: 200,
          width: 200,
        }}
        source = {{ uri: image }}
      />
      <Text>{''}</Text>
      <Button
        title = "Seleccionar Imagen"
        onPress = { selectImage }
      />
      <Text>{''}</Text>
      <Button title={'Analizar Imagen'} onPress={createTwoButtonAlert} />
    </View>
  )
}

export default CameraScreen