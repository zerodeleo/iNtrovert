import * as types from '../types';

const initState = [
  {
    createdAt: Math.random(),
    at: 'Söndag 24 juli 2022 10.00 - 13.10',
    title: 'boka handledarkurs',
    address: 'Södermalm Fatburs Kvarngata 7',
    kl: '10.00',
    description: 'På adressen kommer ni att se skyltar utställda på trottoaren som pekar er mot ingången till #7, den ligger på en liten sidogata som är vinkelrät mot Fatburs Kvarngata. porten är uppställd, gå in genom den och direkt till vänster ligger dörren till kurslokalen. OBS. kom i tid, porten stängs vid kursstart och det är då tyvärr ej möjligt att delta på kursen. Lokalen är öppen från och med 20 min före kursstart.',
    link: 'https://trafiko.se/',
    linkDescription: 'Trafiko',
    bokad: 'JA',
    betald: 'JA',
    isDone: true,
  },
  {
    createdAt: Math.random(),
    at: 'Söndag 24 juli 2022',
    title: 'Ansök om körkortstillstånd',
    address: null,
    kl: null,
    description: 'Så fort du är klar med handledarkursen så ansöker du om körkortstillstånd. Synundersökningen skickas in av optikern via e-tjänst.',
    link: 'https://www.transportstyrelsen.se/sv/Blanketter/Vag/korkort/privatperson/ansok-om-korkortstillstand-grupp-i/',
    bokad: 'NEJ',
    betald: 'GRATIS',
    linkDescription: 'Ansök här',
    isDone: false,
  },
  {
    createdAt: Math.random(),
    at: 'Måndag 25 juli 2022 09.30',
    title: 'boka synundersökning',
    address: 'Synsam Tyresö C.',
    kl: '09.30',
    description: 'Kostar 150kr, fick tyvärr inte betala i förväg, man måste betala på plats. Ett måste för att vi ska få igenom övningskörningstillstånd. Se till att verifiera att optikern skickar in ditt synintyg.',
    link: 'https://www.synsam.se/synunders%C3%B6kning-k%C3%B6rkort',
    linkDescription: 'Synsam',
    bokad: 'JA',
    betald: 'NEJ',
    isDone: false,
  },
  {
    createdAt: Math.random(),
    at: null,
    title: 'boka riskettan och risktvåan',
    address: null,
    kl: null,
    description: 'Har betalt en helgkurs för dig, den heter: "Risk 1 & 2 intensiv samma dag". Ordernummer 4038, bokad i ditt namn. De släpper tider lite hursom, kolla vilken helg som passar dig så får vi boka upp en tid. De har även fått ditt telefonnummer och kommer troligtvis ringa dig och fråga om vilken dag du vill ha. Ringer dem inte så mailar jag dem. Kefft bokningssystem, lol. Både riskettan och risktvåan behöver man göra för att få köra upp samt göra teoriprov. Riskettan pratar bara om droger och alkohol i trafiken, och risktvåan är askul - då får du köra halkbana.',
    link: 'https://www.korkortshuset.se/17/22/e-handel/productdetails/9890',
    linkDescription: 'Välj tid här på körkortshuset',
    bokad: 'NEJ',
    betald: 'JA',
    isDone: false,
  },
  {
    createdAt: Math.random(),
    at: null,
    title: 'boka förarprov',
    address: null,
    kl: null,
    description: 'Boka 2 st förarprov. Kunskapsprov B och Körprov B. Behöver bokas ASAP då tider finns först om ca 6 mån. Boka i januari så hinner vi övningsköra en del innan. Jag kommer hem 3 december så efter det kan vi racerköra dagligen om så behövs. Kunskapsprov är inne i stan. Körprov: förslagsvis Tullinge. Jag körde upp i Sollentuna, men det är en av dem svårare har jag hört. Farsta ska även vara svårare. Men i slutändan spelar det ingen roll. Allt söderut är bra eftersom vi troligtvis kommer övningsköra i söderort eftersom morsans bil är där.',
    link: 'https://fp.trafikverket.se/boka/#/',
    linkDescription: 'Boka här på trafikverket',
    bokad: 'NEJ',
    betald: 'NEJ',
    status: 'URGENT',
    isDone: false,
  }
];

const cardReducer = (state = initState, {type, payload}) => {
  switch (type) {
    case types.ADD_CARD:
      return {
        ...state,
      };
    case types.UPDATE_CARD:
      return {
        ...state,
      };
    case types.TOGGLE_CARD:
      return {
        ...state,
      };
    case types.DELETE_CARD:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default cardReducer;
