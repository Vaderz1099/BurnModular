import { View, Text, Image, StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import TrataQuemaduras from '../../assets/TrataQuemaduras.jpg'

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;

const MedicalScreen = () => {
  return (
    <View>
      <Image
        source = { TrataQuemaduras }
        style = { styles.thumbnail }
      />
    </View>
  )
}

const styles = StyleSheet.create({

  thumbnail: {
      width: windowHeight + 100,
      height: 2600,
      alignItems: 'center'
  },

})

export default MedicalScreen