import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import React from 'react'

const MenuButtonItem = ({ text, onPress, image }) => {
  return (
    <TouchableOpacity
        style = { styles.buttonContainer }
        onPress={ onPress }
    >
      <Image
        source = { image }
        style = { styles.medicalIcon }
      />

      <Text style = { styles.text }>{ text }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

    buttonContainer: {
        alignItems: 'center',
        backgroundColor: '#d9d9d9',
        borderRadius: 10,
        flexDirection: 'row',
        marginBottom: 10,
        padding: 10,
    },

    medicalIcon: {
      borderRadius: 30,
      height: 40,
      width: 40,
    },

    text: {
      marginStart: 15,
    },

})

export default MenuButtonItem
