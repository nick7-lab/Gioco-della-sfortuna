import {StyleSheet, View, Text, TouchableOpacity, ScrollView, Image} from 'react-native'
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context'
import React, {useState} from 'react'
import sfortuneList from './card.js'

const startGame = (setPlayerCards) => {
    const nuoveCarte = []
    let numeroCasuale = 0
    let counter = 0

    console.log("sono in startGame")

    while(nuoveCarte.length < 3 ){
      counter = 0
      numeroCasuale = Math.floor(Math.random() * (50) + 1)

      for (let i=0; i<nuoveCarte.length; i++){
        if (numeroCasuale != nuoveCarte[i]){
          counter += 1
        }
      }

      if (counter == nuoveCarte.length){
        nuoveCarte[nuoveCarte.length] = numeroCasuale
      }
    }

    for(let i=0; i<nuoveCarte.length; i++){
      console.log(nuoveCarte[i])
    }
    setPlayerCards([...nuoveCarte])
}

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
      GIOCO DELLA SFORTUNA
    </Text>
  </View>
  )
}

/**
 * Componente che gestisce il testo principale del gioco in base allo stato attuale.
 *
 * @component
 * @param {Object} props - Le proprietà del componente.
 * @param {boolean} props.start - Indica se il gioco è avviato (true) o deve ancora iniziare (false).
 * @returns {React.JSX.Element} Il testo del corpo del gioco.
 */
const Body = ({start, setStart, playerCards, setPlayerCards}) => {

  const sfortunaCasuale = Math.floor(Math.random() * (50) + 1)

  if (start == false){
    return(
      <View > 
        <View style = {styles.bodyStartView}>
          <Text style = {styles.bodyStartText}>
            Inizia game: 
          </Text>
        </View>

        <View style = {{alignItems: 'center', marginBottom: 50}}>
          <TouchableOpacity 
            style={styles.bodyCustomButton1} 
            onPress={() => {
             startGame(setPlayerCards)
             setStart(true)}
            }
            activeOpacity={0.7} 
          >
          <Text style={styles.bodyCustomButtonText1}>START</Text>
          </TouchableOpacity>
        </View>
        
        <View style = {styles.card} key = {sfortuneList[sfortunaCasuale].id}>
          <Image
            source = {sfortuneList[sfortunaCasuale].immagine}
            style = {{height: 180, width: '100%', marginBottom: 10}}
          />
          <Text style = {{fontSize: 15, fontWeight: 'bold', marginBottom: 10 }}>
            La sfortuna a tuo servizio
          </Text>
        </View>
      </View>
    )
  }
  else {
    
    return(
      <View>
        <TouchableOpacity 
          onPress={() => setStart(false)}
        >
        <Text style = {{color: 'white'}}> Ricomincia </Text>
        </TouchableOpacity>
      </View>
    )
  }
  
}

/**
 * Componente principale dell'app React Native.
 *
 * @component
 * @returns {React.JSX.Element} Il punto di ingresso principale dell'interfaccia dell'app.
 */
export default function App() {
  const [start, setStart] = useState(false)
  const [playerCards, setPlayerCards] = useState([])
  
  return(
    <SafeAreaProvider>
      <SafeAreaView style = {styles.containerMaster}>
        <Header/>
        <Body start = {start} setStart = {setStart} 
         playerCards = {playerCards} setPlayerCards = {setPlayerCards}/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  containerMaster: {
    flex: 1,
    backgroundColor: 'black'
  },
  headerView: {
    marginBottom: 4,
    paddingVertical: 3
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white'
  },
  bodyStartView: {
    marginBottom: 60,       
  },
  bodyStartText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white'
  },
  bodyCustomButton1: {
    backgroundColor: '#ff5722', 
    paddingVertical: 15,        
    paddingHorizontal: 50,      
    borderRadius: 25,           
    shadowColor: '#000',        
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,               
    width: '60%',               
  },
  bodyCustomButtonText1: {
    color: '#ffffff',           
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',        
    textTransform: 'uppercase'  
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#F2F4F8',
    borderRadius: 20,
    overflow: 'hidden',
    width: 280,
    alignSelf: 'center'
  },
})
