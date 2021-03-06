import { LanguageType } from 'store/reducers/locale/langugeType'

export const environment = {
  firebase: {
    apiKey: 'AIzaSyDl65oMmFlDAIbAKG3Wvn4qNLIdykPZVLE',
    authDomain: 'lstn-mcarthur.firebaseapp.com',
    databaseURL: 'https://lstn-mcarthur.firebaseio.com',
    projectId: 'lstn-mcarthur',
    storageBucket: 'lstn-mcarthur.appspot.com',
    messagingSenderId: '695026662482'
  },
  settings: {
    enabledOAuthLogin: true,
    appName: 'lstn',
    defaultProfileCover: 'https://firebasestorage.googleapis.com/v0/b/open-social-33d92.appspot.com/o/images%2F751145a1-9488-46fd-a97e-04018665a6d3.JPG?alt=media&token=1a1d5e21-5101-450e-9054-ea4a20e06c57',
    defaultLanguage: LanguageType.English
  },
  theme: {
    primaryColor: '#F9EFF1',
    secondaryColor: '#423D6F'
  }
}
