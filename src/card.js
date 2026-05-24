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
 * @property {number} [indiceSfortuna] Livello opzionale di sfortuna
 * 
 * @type {Array<Object>}
 */
export default [
    {id: 1, immagine: require('./assets/ArmaBiologica.jfif'), titolo: 'Arma Biologica',
    indiceSfortuna: 15},

    {id: 2, immagine: require('./assets/Autogol.jfif'), titolo: 'Autogoal'},

    {id: 3, immagine: require('./assets/BarrettaSchifosa.jfif'), 
    titolo: 'Barretta di cartone'},

    {id: 4, immagine: require('./assets/BorracciaKiller.jfif'), titolo: 'La borraccia killer'},

    {id: 5, immagine: require('./assets/CadutaDalTapis.jfif'), titolo: 'Caduta dal Tapis'},

    {id: 6, immagine: require('./assets/CalzinoAppallottolato.jfif'), titolo: 'Calzino appallottato'},

    {id: 7, immagine: require('./assets/ChestDayDolori.jfif'), titolo: 'Il dolore nel chest day'},

    {id: 8, immagine: require('./assets/ColpoMignolo.jfif'), titolo: 'Colpo sul mignolo'},

    {id: 9, immagine: require('./assets/CrushAssente.jfif'), titolo: "Non c'e' la tua crush"},

    {id: 10, immagine: require('./assets/CuffieScariche.jfif'), titolo: 'Cuffie scariche'},

    {id: 11, immagine: require('./assets/DatiWorkoutCancellati.jfif'), titolo: 'Il workout cancellato'},

    {id: 12, immagine: require('./assets/DopoUnEsercizioIntensoTeLaSeiFattaAddosso.jfif'), 
    titolo: 'Esercizio troppo intenso(con sorpresa'},

    {id: 13, immagine: require('./assets/DryScooping.jfif'), titolo: 'Il dry scooping'},

    {id: 14, immagine: require('./assets/EsplosioneShaker.jfif'), titolo: "L'esplosione proteica'"},

    {id: 15, immagine: require('./assets/GymToker.jfif'), titolo: 'La gymtoker'},

    {id: 16, immagine: require('./assets/HaiFattoCadereTutto.jfif'), titolo: 'Lo sparpagliamento'},

    {id: 17, immagine: require('./assets/HaiPersoIlTel.jfif'), titolo: "Il telefonon nce piu'!!!"},

    {id: 18, immagine: require('./assets/HaiPersoLaScheda.jfif'), titolo: "Dov'è la dannata scheda?"},

    {id: 19, immagine: require('./assets/HaiPersoLAsciugamanp.jfif'), titolo: "Ma l'asciugamano"},

    {id: 20, immagine: require('./assets/HannoRubatoIManubri.jfif'), titolo: 'Manco fossimo a Napoli'},

    {id: 21, immagine: require('./assets/IlBroNonCe.jfif'), titolo: 'Oggi allenamento senza il bro'},

    {id: 22, immagine: require('./assets/IlCane.jfif'), titolo: 'E questo proprio a me doveva scassare la m...'},

    {id: 23, immagine: require('./assets/IlCrampo.jfif'), titolo: 'O mammi mi c dlor'},

    {id: 24, immagine: require('./assets/IlLegDay.jfif'), titolo: 'Noooo il leg day nooo'},

    {id: 25, immagine: require('./assets/IlSalutoSosia.jfif'), titolo: 'E quist c vo mo'},

    {id: 26, immagine: require('./assets/IlTizioDelPosare.jfif'), titolo: 'Il tizio strano'},

    {id: 27, immagine: require('./assets/Infortunio.jfif'), titolo: 'Aiaaa (chi m la fatt fa)'},

    {id: 28, immagine: require('./assets/LaTrappola.jfif'), titolo: 'La trappola'},

    {id: 29, immagine: require('./assets/LucchettoSmemorato.jfif'), titolo: 'NOOO, e mo?'},

    {id: 30, immagine: require('./assets/MacchinarioOccupato.jfif'), titolo: 'Ci alterniamo?'},

    {id: 31, immagine: require('./assets/MagliaAlContrario.jfif'), titolo: 'La maglia a contrario'},

    {id: 32, immagine: require('./assets/MaledettoElastico.jfif'), titolo: 'Auch!!!(proprj da)'},

    {id: 33, immagine: require('./assets/MoscierinoGigante.jfif'), titolo: 'Il moscerone nel boccone'},

    {id: 34, immagine: require('./assets/NonTroviLaBottiglia.jfif'), titolo: 'E la bottiglia !?'},

    {id: 35, immagine: require('./assets/Nubifragio.jfif'), titolo: 'Non mi fiderò mai più del meteo'},

    {id: 36, immagine: require('./assets/PalestraChiusa.jfif'), titolo: 'Niente training oggi'},

    {id: 37, immagine: require('./assets/Peso50kg.jfif'), titolo: 'Hai ottenuto il dolore più intenso(complimenti)'},

    {id: 38, immagine: require('./assets/Peso5kg.jfif'), titolo: 'AAAAAA'},

    {id: 39, immagine: require('./assets/PetoFragoroso.jfif'), titolo: "l'urlo liberatorio(e non solo)"},

    {id: 40, immagine: require('./assets/Pozzanghera.jfif'), titolo: 'Sei stato sporcato'},

    {id: 41, immagine: require('./assets/Rissa.jfif'), titolo: 'Sei finito in una rissa'},

    {id: 42, immagine: require('./assets/SchienaBlocco.jfif'), titolo: "Almeno la schiena si è raddrizzata"},

    {id: 43, immagine: require('./assets/SoffocazioneBilanciere.jfif'), titolo: 'Hai caricato troppo'},

    {id: 44, immagine: require('./assets/StortaPugno.jfif'), titolo: 'Colpa del saccone'},

    {id: 45, immagine: require('./assets/SudoreAltrui.jfif'), titolo: 'Che schif'},

    {id: 46, immagine: require('./assets/TiDimentichi.jfif'), titolo: 'Ti sei dimenticato di nuovo !?'},

    {id: 47, immagine: require('./assets/TiSiStrappano.jfif'), titolo: 'I pantaloni non erano cosi tanto squat proof'},

    {id: 48, immagine: require('./assets/TroppoAssaiCaffe.jfif'), titolo: 'Il caffe fa male!!'},

    {id: 49, immagine: require('./assets/UnaBellaStorta.jfif'), titolo: 'Bella storta!'},

    {id: 50, immagine: require('./assets/SeiRimastoSenzAcqua.jfif'), titolo: "A corto d'acqua nel deserto"}
]
