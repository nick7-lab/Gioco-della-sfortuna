/**
 * Lista delle card utilizzate nell'applicazione.
 * 
 * Ogni elemento rappresenta un evento o una situazione
 * legata al mondo della palestra.
 * 
 * Struttura di una card:
 * @property {number} id Identificativo univoco
 * @property {*} immagine Percorso dell'immagine tramite require()
 * @property {string} titolo Titolo descrittivo della card
 * @property {number} [indiceSfortuna] Livello di sfortuna
 * 
 * @type {Array<{id: number, immagine: *, titolo: string, indiceSfortuna: number}>}
 */
export default [
    {id: 1, immagine: require('./assets/ArmaBiologica.jfif'), titolo: 'Arma Biologica', indiceSfortuna: 10},

    {id: 2, immagine: require('./assets/Autogol.jfif'), titolo: 'Autogoal', indiceSfortuna: 41},

    {id: 3, immagine: require('./assets/BarrettaSchifosa.jfif'), titolo: 'Barretta di cartone nbuss', 
    indiceSfortuna: 6},

    {id: 4, immagine: require('./assets/BorracciaKiller.jfif'), titolo: 'La borraccia killer',
    indiceSfortuna: 22},

    {id: 5, immagine: require('./assets/CadutaDalTapis.jfif'), titolo: 'Caduta dal Tapis',
    indiceSfortuna: 36},

    {id: 6, immagine: require('./assets/CalzinoAppallottolato.jfif'), titolo: 'Calzino appallottato',
    indiceSfortuna: 3},

    {id: 7, immagine: require('./assets/ChestDayDolori.jfif'), titolo: 'Il dolore proprio nel chest day',
    indiceSfortuna: 15},

    {id: 8, immagine: require('./assets/ColpoMignolo.jfif'), titolo: 'Colpo sul mignolo',
    indiceSfortuna: 21},

    {id: 9, immagine: require('./assets/CrushAssente.jfif'), titolo: "Non c'e' la tua crush",
    indiceSfortuna: 14},

    {id: 10, immagine: require('./assets/CuffieScariche.jfif'), titolo: 'Cuffie scariche',
    indiceSfortuna: 9},

    {id: 11, immagine: require('./assets/DatiWorkoutCancellati.jfif'), titolo: 'Il workout cancellato',
    indiceSfortuna: 10},

    {id: 12, immagine: require('./assets/DopoUnEsercizioIntensoTeLaSeiFattaAddosso.jfif'), 
    titolo: 'Esercizio troppo intenso(con sorpresa', indiceSfortuna: 60},

    {id: 13, immagine: require('./assets/DryScooping.jfif'), titolo: 'Il dry scooping', 
    indiceSfortuna: 34},

    {id: 14, immagine: require('./assets/EsplosioneShaker.jfif'), titolo: "L'esplosione proteica'",
    indiceSfortuna: 38},

    {id: 15, immagine: require('./assets/GymToker.jfif'), titolo: 'La gymtoker proprio vicino a te',
    indiceSfortuna: 30},

    {id: 16, immagine: require('./assets/HaiFattoCadereTutto.jfif'), titolo: 'Lo sparpagliamento',
    indiceSfortuna: 25},

    {id: 17, immagine: require('./assets/HaiPersoIlTel.jfif'), titolo: "Il telefonon nce piu'!!!",
    indiceSfortuna: 52},

    {id: 18, immagine: require('./assets/HaiPersoLaScheda.jfif'), titolo: "Dov'è la dannata scheda?",
    indiceSfortuna: 8},

    {id: 19, immagine: require('./assets/HaiPersoLAsciugamanp.jfif'), titolo: "Ma l'asciugamano dov'è?",
    indiceSfortuna: 4},

    {id: 20, immagine: require('./assets/HannoRubatoIManubri.jfif'), titolo: 'Manco fossimo a Napoli (ti hanno rubato i pesi)',
    indiceSfortuna: 13},

    {id: 21, immagine: require('./assets/IlBroNonCe.jfif'), titolo: 'Oggi allenamento senza il bro',
    indiceSfortuna: 16},

    {id: 22, immagine: require('./assets/IlCane.jfif'), titolo: 'E questo proprio a me doveva scassare la m...',
    indiceSfortuna: 44},

    {id: 23, immagine: require('./assets/IlCrampo.jfif'), titolo: 'O mammi mi c dlor (il crampo al polpaccio)',
    indiceSfortuna: 35},

    {id: 24, immagine: require('./assets/IlLegDay.jfif'), titolo: 'Noooo il leg day nooo',
    indiceSfortuna: 33},

    {id: 25, immagine: require('./assets/IlSalutoSosia.jfif'), titolo: 'E quist c vo mo (Saluti la persona sbagliata credendo che è il tuo bro',
    indiceSfortuna: 27},

    {id: 26, immagine: require('./assets/IlTizioDelPosare.jfif'), titolo: 'Il tizio strano ti sta fissando mentre si spalma la crema in maniera sensuale', 
    indiceSfortuna: 39},

    {id: 27, immagine: require('./assets/Infortunio.jfif'), titolo: 'Aiaaa (chi m la fatt fa). Volevi essere un duro, ma sei caduto',
    indiceSfortuna: 46},

    {id: 28, immagine: require('./assets/LaTrappola.jfif'), titolo: 'La trappola (cacarella)',
    indiceSfortuna: 29},

    {id: 29, immagine: require('./assets/LucchettoSmemorato.jfif'), titolo: 'NOOO, e mo?',
    indiceSfortuna: 55},

    {id: 30, immagine: require('./assets/MacchinarioOccupato.jfif'), titolo: 'Macchinario occupato. Ci alterniamo?',
    indiceSfortuna: 7},

    {id: 31, immagine: require('./assets/MagliaAlContrario.jfif'), titolo: 'La maglia a contrario',
    indiceSfortuna: 12},

    {id: 32, immagine: require('./assets/MaledettoElastico.jfif'), titolo: 'Auch!!!(proprj da). L elastico proprio lì',
    indiceSfortuna: 43},

    {id: 33, immagine: require('./assets/MoscierinoGigante.jfif'), titolo: 'Il moscerone nel boccone',
    indiceSfortuna: 28},

    {id: 34, immagine: require('./assets/NonTroviLaBottiglia.jfif'), titolo: 'E la bottiglia !?',
    indiceSfortuna: 7},

    {id: 35, immagine: require('./assets/Nubifragio.jfif'), titolo: 'Non mi fiderò mai più del meteo',
    indiceSfortuna: 50},

    {id: 36, immagine: require('./assets/PalestraChiusa.jfif'), titolo: 'Niente training oggi',
    indiceSfortuna: 19},

    {id: 37, immagine: require('./assets/Peso50kg.jfif'), titolo: 'Hai ottenuto il dolore più acuto(complimenti)',
    indiceSfortuna: 95},

    {id: 38, immagine: require('./assets/Peso5kg.jfif'), titolo: 'AAAAAA che dolore', indiceSfortuna: 49},

    {id: 39, immagine: require('./assets/PetoFragoroso.jfif'), titolo: "l'urlo liberatorio(e non solo)",
    indiceSfortuna: 70},

    {id: 40, immagine: require('./assets/Pozzanghera.jfif'), titolo: 'Sei stato sporcato', indiceSfortuna: 51},

    {id: 41, immagine: require('./assets/Rissa.jfif'), titolo: 'Sei finito in una rissa',
    indiceSfortuna: 65},

    {id: 42, immagine: require('./assets/SchienaBlocco.jfif'), titolo: "Almeno la schiena si è raddrizzata",
    indiceSfortuna: 48},

    {id: 43, immagine: require('./assets/SoffocazioneBilanciere.jfif'), titolo: 'Soffocamenti alla panca piana',
    indiceSfortuna: 67},

    {id: 44, immagine: require('./assets/StortaPugno.jfif'), titolo: 'Colpa del saccone', indiceSfortuna: 32},

    {id: 45, immagine: require('./assets/SudoreAltrui.jfif'), titolo: 'Che schif (sudore altrui)',
    indiceSfortuna: 31},

    {id: 46, immagine: require('./assets/TiDimentichi.jfif'), titolo: 'Ti sei dimenticato di nuovo !?',
    indiceSfortuna: 20},

    {id: 47, immagine: require('./assets/TiSiStrappano.jfif'), titolo: 'I pantaloni non erano cosi tanto squat proof',
    indiceSfortuna: 53},

    {id: 48, immagine: require('./assets/TroppoAssaiCaffe.jfif'), titolo: 'Il caffe fa male!!',
    indiceSfortuna: 51},

    {id: 49, immagine: require('./assets/UnaBellaStorta.jfif'), titolo: 'Bella storta!',
    indiceSfortuna: 41},

    {id: 50, immagine: require('./assets/SeiRimastoSenzAcqua.jfif'), titolo: "A corto d'acqua nel deserto",
    indiceSfortuna: 90}
]