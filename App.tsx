import React from 'react'
import { SafeAreaView } from 'react-native'

// import { ArregloScreen } from './screens/ArregloScreen';
// import { PrimeraScreen } from './screens/PrimeraScreen';
// import { SegundaScreen } from './screens/SegundaScreen';
// import { TerceraScreen } from './screens/TerceraScreen';
// import { CuartaScr } from './screens/CuartaScr';
// import { QuintaScr } from './screens/QuintaScr';
// import { SextaScr } from './screens/SextaScr';
// import { SeptimaScr} from './screens/SeptimaScr';
// import { OctavaScr } from './screens/OctavaScr';
import { NovenaScr } from './screens/NovenaScr';


export const App = () => {
  return (
    <SafeAreaView style={{flex:1}}>
      {/* <ArregloScreen/> */}
      {/* <PrimeraScreen/>  */}
      {/* <SegundaScreen/> */}
      {/* <TerceraScreen/> */}
      {/* <CuartaScr/> */}
      {/* <QuintaScr/> */}
      {/* <SextaScr/> */}
      {/* <SeptimaScr/> */}
      {/* <OctavaScr/> */}
      <NovenaScr/>
    </SafeAreaView>
  )
}

export default App;