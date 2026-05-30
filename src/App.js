/**
 * @author Carbonella Nicandro
 */

import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react';
import sfortuneList from './card.js';

/**
 * Genera un ID di sfortuna casuale che non sia ancora stato estratto.
 * Implementa un sistema di sicurezza a 100 tentativi per evitare loop infiniti.
 *
 * @param {number[]} alreadyCreatedCards - Array contenente gli ID delle carte già utilizzate.
 * @returns {number} ID numerico della nuova carta sfortuna estratta.
 */
const generateDifferentCards = (alreadyCreatedCards) => {
  let sfortunaCasuale = 1; 
  let trovato = false;
  let tentativi = 0;

  while (!trovato) {
    let counter = 0;
    let numeroCasuale = Math.floor(Math.random() * 50) + 1;
    tentativi++;

    if (tentativi == 100) {
      break;
    }

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

/**
 * Ordina un array di ID di carte sfortuna in base al loro indiceSfortuna crescente.
 * Utilizza un algoritmo di ordinamento Bubble Sort classico.
 *
 * @param {number[]} arrayDaOrdinare - L'array di ID numerici da ordinare.
 * @returns {number[]} L'array ordinato in base all'indice di sfortuna.
 */
const ordinaCarteCrescenti = (arrayDaOrdinare) => {
  for (let i = 0; i < arrayDaOrdinare.length; i++) {
    for (let j = 0; j < arrayDaOrdinare.length - 1; j++) {
      let cartaAttuale = sfortuneList[arrayDaOrdinare[j]];
      let cartaSuccessiva = sfortuneList[arrayDaOrdinare[j + 1]];

      if (cartaAttuale && cartaSuccessiva && cartaAttuale.indiceSfortuna > cartaSuccessiva.indiceSfortuna) {
        let temp = arrayDaOrdinare[j];
        arrayDaOrdinare[j] = arrayDaOrdinare[j + 1];
        arrayDaOrdinare[j + 1] = temp;
      }
    }
  }
  return arrayDaOrdinare;
};

/**
 * Inizializza lo stato del gioco estraendo le prime 3 carte per il giocatore,
 * ordinandole, impostando le vite, azzerando il contatore e generando la prima carta corrente.
 *
 * @param {Object} params - I setter degli stati di React.
 * @param {function} params.setPlayerCards - Setter per le carte in mano al giocatore.
 * @param {function} params.setAlreadyCreatedCards - Setter per lo storico delle carte estratte.
 * @param {function} params.setCurrentCard - Setter per la carta attualmente da piazzare.
 * @param {function} params.setVite - Setter per il numero di vite rimaste.
 * @param {function} params.setCarteIndovinate - Setter per il contatore delle carte indovinate.
 * @param {function} params.setStart - Setter per avviare la sessione di gioco attiva.
 */
const startGame = ({ setPlayerCards, setAlreadyCreatedCards, setCurrentCard, setVite, setCarteIndovinate, setStart }) => {
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

  const primaCartaCorrente = generateDifferentCards(nuoveCarte);
  const nuoveCarteOrdinate = ordinaCarteCrescenti(nuoveCarte);

  setPlayerCards([...nuoveCarteOrdinate]);
  setAlreadyCreatedCards([...nuoveCarteOrdinate, primaCartaCorrente]);
  setCurrentCard(primaCartaCorrente); 
  setVite(3); 
  setCarteIndovinate(0); 
  setStart(true);
};

/**
 * Gestisce la logica di posizionamento della carta corrente nel varco selezionato.
 * Verifica la correttezza matematica della posizione, aggiorna il tabellone se esatto,
 * oppure scala una vita se errato, gestendo anche le condizioni di Vittoria e Game Over.
 *
 * @param {number} varcoScelto - L'indice dello spazio/intervallo in cui inserire la carta.
 * @param {number[]} playerCards - Array degli ID delle carte attuali del giocatore.
 * @param {function} setPlayerCards - Setter per aggiornare le carte del giocatore.
 * @param {number} currentCard - ID della carta sfortuna attualmente sotto esame.
 * @param {function} setCurrentCard - Setter per la prossima carta da esaminare.
 * @param {number[]} alreadyCreatedCards - Storico di tutti gli ID delle carte estratti finora.
 * @param {function} setAlreadyCreatedCards - Setter dello storico delle carte estratte.
 * @param {number} vite - Numero di vite correnti del giocatore.
 * @param {function} setVite - Setter per aggiornare le vite residue.
 * @param {number} carteIndovinate - Numero di carte indovinate correttamente in questa partita.
 * @param {function} setCarteIndovinate - Setter per incrementare le carte indovinate.
 * @param {function} setStart - Setter per interrompere o azzerare la partita.
 */
const posizionaCartaNeiVarchi = (
  varcoScelto, 
  playerCards, 
  setPlayerCards, 
  currentCard, 
  setCurrentCard, 
  alreadyCreatedCards, 
  setAlreadyCreatedCards, 
  vite,
  setVite,
  carteIndovinate,
  setCarteIndovinate,
  setStart
) => {
  const infoCartaCorrente = sfortuneList[currentCard];
  let corretto = false;

  if (varcoScelto === 0) {
    const primaCarta = sfortuneList[playerCards[0]];
    if (infoCartaCorrente.indiceSfortuna <= primaCarta.indiceSfortuna) {
      corretto = true;
    }
  } 
  else if (varcoScelto === playerCards.length) {
    const ultimaCarta = sfortuneList[playerCards[playerCards.length - 1]];
    if (infoCartaCorrente.indiceSfortuna >= ultimaCarta.indiceSfortuna) {
      corretto = true;
    }
  } 
  else {
    const cartaSinistra = sfortuneList[playerCards[varcoScelto - 1]];
    const cartaDestra = sfortuneList[playerCards[varcoScelto]];

    if (
      infoCartaCorrente.indiceSfortuna >= cartaSinistra.indiceSfortuna &&
      infoCartaCorrente.indiceSfortuna <= cartaDestra.indiceSfortuna
    ) {
      corretto = true;
    }
  }

  if (corretto) {
    let aggiornate = [...playerCards, currentCard];
    aggiornate = ordinaCarteCrescenti(aggiornate);
    
    const nuoveCarteIndovinate = carteIndovinate + 1;
    setPlayerCards(aggiornate);
    setCarteIndovinate(nuoveCarteIndovinate);

    if (nuoveCarteIndovinate === 6) {
      Alert.alert("COMPLIMENTI!", "Hai inserito correttamente 6 carte e hai vinto!", [
        { text: "Torna al Menu", onPress: () => setStart(false) }
      ]);
      return;
    }

    const prossimaCarta = generateDifferentCards([...alreadyCreatedCards, currentCard]);
    setAlreadyCreatedCards([...alreadyCreatedCards, currentCard, prossimaCarta]); 
    setCurrentCard(prossimaCarta);
  } else {
    const nuoveVite = vite - 1;
    setVite(nuoveVite);

    if (nuoveVite <= 0) {
      Alert.alert("GAME OVER", "Hai esaurito le tue vite!", [
        { text: "Riprova", onPress: () => setStart(false) }
      ]);
      return;
    }

    const prochaineCarta = generateDifferentCards(alreadyCreatedCards);
    setAlreadyCreatedCards([...alreadyCreatedCards, prochaineCarta]);
    setCurrentCard(prochaineCarta);
    Alert.alert("Sbagliato!", "La posizione scelta non è corretta.");
  }
};

/**
 * Componente Header. Mostra il titolo del gioco e, se la partita è avviata,
 * le statistiche correnti relative alle vite e alle carte completate.
 *
 * @component
 * @param {Object} props - Proprietà del componente.
 * @param {number} props.vite - Vite restanti.
 * @param {number} props.carteIndovinate - Numero di carte indovinate.
 * @param {boolean} props.start - Stato di attivazione del gioco.
 */
const Header = ({ vite, carteIndovinate, start }) => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.headerText}>GIOCO DELLA SFORTUNA</Text>
      {start && (
        <View style={styles.statsContainer}>
          <Text style={styles.statsText}>VITE: {Array(vite).fill('❤️').join('') || '💀'}</Text>
          <Text style={styles.statsText}>CARTE: {carteIndovinate}/6</Text>
        </View>
      )}
    </View>
  );
};

/**
 * Componente Body. Gestisce la vista iniziale con il bottone START,
 * oppure visualizza la carta sfortuna corrente da collocare sul tabellone.
 *
 * @component
 * @param {Object} props - Proprietà del componente.
 * @param {boolean} props.start - Stato di attivazione del gioco.
 * @param {function} props.setStart - Funzione per impostare lo stato di avvio.
 * @param {function} props.setPlayerCards - Funzione per impostare le carte del giocatore.
 * @param {number[]} props.alreadyCreatedCards - ID delle carte create fino a ora.
 * @param {function} props.setAlreadyCreatedCards - Funzione per aggiornare lo storico delle carte.
 * @param {number} props.currentCard - ID della carta attualmente estratta.
 * @param {function} props.setCurrentCard - Funzione per aggiornare la carta corrente.
 * @param {function} props.setVite - Funzione per reimpostare le vite iniziali.
 * @param {function} props.setCarteIndovinate - Funzione per azzerare il counter carte.
 */
const Body = ({
  start,
  setStart,
  setPlayerCards,
  alreadyCreatedCards,
  setAlreadyCreatedCards,
  currentCard,
  setCurrentCard,
  setVite,
  setCarteIndovinate,
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
                alreadyCreatedCards,
                setAlreadyCreatedCards,
                setCurrentCard, 
                setVite,
                setCarteIndovinate,
                setStart,
              });
            }}
            activeOpacity={0.7}>
            <Text style={styles.bodyCustomButtonText1}>START</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    const cartaCorrente = sfortuneList[currentCard];

    return (
      <View style={{ marginBottom: 20 }}>
        <TouchableOpacity
          onPress={() => setStart(false)}
          style={{ marginBottom: 10 }}>
          <Text style={{ color: 'white', textAlign: 'center' }}> Abbandona </Text>
        </TouchableOpacity>
        {cartaCorrente && (
          <View style={styles.card} key={cartaCorrente.id}>
            <Text style={{ color: 'black', padding: 5 }}>
              Colloca la seguente sfortuna:
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

/**
 * Componente Footer. Renderizza una lista orizzontale scorrevole che alterna i varchi
 * (pulsanti interattivi per l'inserimento) e le carte attualmente presenti sul tabellone del giocatore.
 *
 * @component
 * @param {Object} props - Proprietà del componente.
 * @param {boolean} props.start - Stato di attivazione del gioco.
 * @param {number[]} props.playerCards - ID delle carte possedute dal giocatore.
 * @param {function} props.setPlayerCards - Funzione per impostare le carte del giocatore.
 * @param {number} props.currentCard - ID della carta attualmente estratta.
 * @param {function} props.setCurrentCard - Funzione per impostare la carta corrente.
 * @param {number[]} props.alreadyCreatedCards - ID delle carte estratte complessivamente.
 * @param {function} props.setAlreadyCreatedCards - Funzione per aggiornare le carte estratte complessivamente.
 * @param {number} props.vite - Vite rimanenti del giocatore.
 * @param {function} props.setVite - Funzione per scalare o reimpostare le vite.
 * @param {number} props.carteIndovinate - Numero di risposte corrette date.
 * @param {function} props.setCarteIndovinate - Funzione per aggiornare il numero di risposte corrette.
 * @param {function} props.setStart - Funzione per stoppare o resettare il gioco.
 */
const Footer = ({ 
  start, 
  playerCards, 
  setPlayerCards, 
  currentCard, 
  setCurrentCard, 
  alreadyCreatedCards, 
  setAlreadyCreatedCards, 
  vite,
  setVite,
  carteIndovinate,
  setCarteIndovinate,
  setStart
}) => {
  const cartaIniziale = sfortuneList[1];

  if (start == false) {
    return (
      <View>
        {cartaIniziale && (
          <View style={styles.card} key={cartaIniziale.id}>
            <Image
              source={cartaIniziale.immagine}
              style={{ height: 180, width: '100%', marginBottom: 10 }}
            />
            <Text style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 10, color: 'black' }}>
              La sfortuna a tuo servizio
            </Text>
          </View>
        )}
      </View>
    );
  } else {
    const renderPulsanteVarco = (indiceVarco) => (
      <TouchableOpacity
        key={`varco-${indiceVarco}`}
        style={styles.footerCustomButton}
        onPress={() => {
          posizionaCartaNeiVarchi(
            indiceVarco, 
            playerCards, 
            setPlayerCards, 
            currentCard, 
            setCurrentCard, 
            alreadyCreatedCards, 
            setAlreadyCreatedCards, 
            vite,
            setVite,
            carteIndovinate,
            setCarteIndovinate,
            setStart
          );
        }}
      >
        <Text style={{ textAlign: 'center', color: 'white', fontSize: 11 }}>Inserisci qui</Text>
      </TouchableOpacity>
    );

    const elementiFooter = [];
    
    for (let i = 0; i < playerCards.length; i++) {
      elementiFooter.push(renderPulsanteVarco(i));

      const carta = sfortuneList[playerCards[i]];
      if (carta) {
        elementiFooter.push(
          <View style={styles.cardFooter} key={`carta-${carta.id}`}>
            <Image
              source={carta.immagine}
              style={{ height: 180, width: '100%', marginBottom: 10 }}
            />
            <Text style={styles.sfortuneTitleText}>{carta.titolo}</Text>
            <Text style={styles.sfortuneIndexText}>
              Sfortune index: {carta.indiceSfortuna}
            </Text>
          </View>
        );
      }
    }
    
    elementiFooter.push(renderPulsanteVarco(playerCards.length));

    return (
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={{ alignItems: 'center', paddingHorizontal: 10 }}>
        <View style={styles.footerHorizontalView}>
          {elementiFooter}
        </View>
      </ScrollView>
    );
  }
};

/**
 * Componente Principale dell'Applicazione (App).
 * Gestisce l'intera architettura degli stati globali del Gioco della Sfortuna.
 *
 * @component
 */
export default function App() {
  const [start, setStart] = useState(false);
  const [playerCards, setPlayerCards] = useState([]);
  const [alreadyCreatedCards, setAlreadyCreatedCards] = useState([]);
  const [currentCard, setCurrentCard] = useState(null);
  const [vite, setVite] = useState(3); 
  const [carteIndovinate, setCarteIndovinate] = useState(0); 

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.containerMaster}>
        <Header vite={vite} carteIndovinate={carteIndovinate} start={start} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Body
            start={start}
            setStart={setStart}
            setPlayerCards={setPlayerCards}
            alreadyCreatedCards={alreadyCreatedCards}
            setAlreadyCreatedCards={setAlreadyCreatedCards}
            currentCard={currentCard}       
            setCurrentCard={setCurrentCard} 
            setVite={setVite}
            setCarteIndovinate={setCarteIndovinate}
          />
          <Footer
            start={start}
            playerCards={playerCards}
            setPlayerCards={setPlayerCards}
            currentCard={currentCard}
            setCurrentCard={setCurrentCard}
            alreadyCreatedCards={alreadyCreatedCards}
            setAlreadyCreatedCards={setAlreadyCreatedCards}
            vite={vite}
            setVite={setVite}
            carteIndovinate={carteIndovinate}
            setCarteIndovinate={setCarteIndovinate}
            setStart={setStart}
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
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 8,
    paddingHorizontal: 10,
  },
  statsText: {
    fontSize: 16,
    color: '#ff5722',
    fontWeight: 'bold',
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
    width: 200,
    alignSelf: 'center',
    marginRight: 10,
    marginLeft: 10,
  },
  footerHorizontalView: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  footerCustomButton: {
    backgroundColor: '#ff5722',
    borderRadius: 15,
    paddingVertical: 10,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sfortuneIndexText: {
    marginBottom: 5,
    color: 'blue',
  },
  sfortuneTitleText: {
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 13,
    paddingHorizontal: 4,
  },
});