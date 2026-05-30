import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { useState, useEffect } from 'react';
import sfortuneList from './card.js';

const generateDifferentCards = (alreadyCreatedCards) => {
  let sfortunaCasuale;
  let trovato = false;
  let tentativi = 0;

  while (!trovato) {
    let counter = 0;
    let numeroCasuale = Math.floor(Math.random() * 50) + 1;
    tentativi++;

    if (tentativi == 100) break;

    for (let i = 0; i < alreadyCreatedCards.length; i++) {
      if (numeroCasuale != alreadyCreatedCards[i]) {
        counter += 1;
      }
    }

    if (counter === alreadyCreatedCards.length) {
      sfortunaCasuale = numeroCasuale;
      trovato = true;
    }
  }

  return sfortunaCasuale;
};

const startGame = ({ setPlayerCards, setAlreadyCreatedCards, setStart, playerCards }) => {
  const nuoveCarte = [];
  let numeroCasuale = 0;
  let counter = 0;

  while (nuoveCarte.length < 3) {
    counter = 0;
    numeroCasuale = Math.floor(Math.random() * 50) + 1;

    for (let i = 0; i < nuoveCarte.length; i++) {
      if (numeroCasuale != nuoveCarte[i]) {
        counter += 1;
      }
    }

    if (counter == nuoveCarte.length) {
      nuoveCarte[nuoveCarte.length] = numeroCasuale;
    }
  }

  setPlayerCards([...nuoveCarte]);
  setAlreadyCreatedCards([...nuoveCarte]);
  setStart(true);

};

const Header = () => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>GIOCO DELLA SFORTUNA</Text>
    </View>
  );
};

const Body = ({
  start,
  setStart,
  setPlayerCards,
  alreadyCreatedCards,
  setAlreadyCreatedCards,
  playerCards
}) => {
  if (start == false) {
    return (
      <View>
        <View style={styles.bodyStartView}>
          <Text style={styles.bodyStartText}>Inizia game:</Text>
        </View>

        <View style={{ alignItems: 'center', marginBottom: 60 }}>
          <TouchableOpacity
            style={styles.bodyCustomButton1}
            onPress={() => {
              startGame({
                setPlayerCards,
                setAlreadyCreatedCards,
                setStart,
                playerCards
              });
            }}
            activeOpacity={0.7}>
            <Text style={styles.bodyCustomButtonText1}>START</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    const sfortunaCasuale = generateDifferentCards(alreadyCreatedCards);
    const cartaCorrente = sfortuneList[sfortunaCasuale];

    return (
      <View style={{ marginBottom: 20 }}>
        <TouchableOpacity
          onPress={() => setStart(false)}
          style={{ marginBottom: 10 }}>
          <Text style={{ color: 'white' }}> Ricomincia </Text>
        </TouchableOpacity>
        {cartaCorrente && (
          <View style={styles.card} key={cartaCorrente.id}>
            <Text style={{ color: 'black' }}>
              {' '}
              Colloca la seguente sfortuna:{' '}
            </Text>
            <Image
              source={cartaCorrente.immagine}
              style={{ height: 180, width: '100%', marginBottom: 10 }}
            />
            <Text style={[styles.sfortuneTitleText, { marginBottom: 10 }]}>
              {cartaCorrente.titolo}
            </Text>
          </View>
        )}
      </View>
    );
  }
};

const Footer = ({ start, playerCards, setPlayerCards }) => {
  //all'inizio del gioco
  const sfortunaCasuale = Math.floor(Math.random() * 50) + 1;
  const cartaIniziale = sfortuneList[sfortunaCasuale];

  if (start == false) {
    return (
      <View>
        {cartaIniziale && (
          <View style={styles.card} key={cartaIniziale.id}>
            <Image
              source={cartaIniziale.immagine}
              style={{ height: 180, width: '100%', marginBottom: 10 }}
            />
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                marginBottom: 10,
                color: 'black',
              }}>
              La sfortuna a tuo servizio
            </Text>
          </View>
        )}
      </View>
    );
  } else {
    
    const elementi = []
    for(let i = 0; i<playerCards.length + 1; i++){
      elementi.push(i)
    }

    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        style={{ navigatorStyle: 'center' }}
        contentContainerStyle={{ alignItems: 'center' }}>
        {elementi.map((v) => {
          const carta = playerCards[v];

          return (
            <View style={styles.footerHorizontalView}>
              <TouchableOpacity
                style={styles.footerCustomButton}>
                <Text style = {{textAlign: 'center'}}> Posiziona quì </Text>
              </TouchableOpacity>

              {playerCards[v] !== undefined && sfortuneList[carta] ? (
                <View key={sfortuneList[carta].id} style={styles.cardFooter}>
                <Image
                  source={sfortuneList[carta].immagine}
                  style={{ height: 180, width: '100%', marginBottom: 10 }}
                />
                <Text style={styles.sfortuneTitleText}>{sfortuneList[carta].titolo}</Text>
                <Text style={styles.sfortuneIndexText}>
                  Sfortune index: {sfortuneList[carta].indiceSfortuna}
                </Text>
              </View>
              ) : null}
              
            </View>
          );
        })}
      </ScrollView>
    );
  }
};

export default function App() {
  const [start, setStart] = useState(false);
  const [playerCards, setPlayerCards] = useState([]);
  const [alreadyCreatedCards, setAlreadyCreatedCards] = useState([]);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.containerMaster}>
        <Header />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Body
            start={start}
            setStart={setStart}
            setPlayerCards={setPlayerCards}
            alreadyCreatedCards={alreadyCreatedCards}
            setAlreadyCreatedCards={setAlreadyCreatedCards}
            playerCards={playerCards}
          />
          <Footer
            start={start}
            playerCards={playerCards}
            setPlayerCards={setPlayerCards}
          />
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  containerMaster: {
    flex: 1,
    backgroundColor: 'black',
  },
  headerView: {
    marginBottom: 4,
    paddingVertical: 3,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  bodyStartView: {
    marginBottom: 60,
  },
  bodyStartText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'white',
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
    textTransform: 'uppercase',
  },
  card: {
    alignItems: 'center',
    backgroundColor: '#F2F4F8',
    borderRadius: 20,
    overflow: 'hidden',
    width: 280,
    alignSelf: 'center',
  },
  cardFooter: {
    alignItems: 'center',
    backgroundColor: '#F2F4F8',
    borderRadius: 20,
    overflow: 'hidden',
    width: 250,
    alignSelf: 'center',
    marginRight: 20,
  },
  footerHorizontalView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerCustomButton: {
    marginRight: 20,
    backgroundColor: '#ff5722',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  sfortuneIndexText: {
    marginBottom: 5,
    color: 'blue',
  },
  sfortuneTitleText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
