import {StyleSheet, View, Text, Button, ScrollView, Image} from 'react-native'
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import React, {useState} from 'react'

/**
 * Componente che renderizza l'intestazione dell'applicazione.
 * Mostra il titolo del gioco centrato all'interno di un box con bordo.
 *
 * @component
 * @returns {React.JSX.Element} L'elemento Header per la parte superiore dello schermo.
 */
const Header = () => {
  return(
    <View style = {styles.headerView}>
    <Text style = {styles.headerText} >
      Gioco della sfortuna
    </Text>
  </View>
  )
}

/**
 * Componente principale dell'app React Native.
 *
 * @component
 * @returns {React.JSX.Element} Il punto di ingresso principale dell'interfaccia dell'app.
 */
export default function App() {
  return(
    <SafeAreaProvider>
      <SafeAreaView style = {styles.containerMaster}>
        <Header/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  containerMaster: {
    flex: 1
  },
  headerView: {
    borderWidth: 1
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})
