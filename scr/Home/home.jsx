import { View, StyleSheet, Platform, Permissions } from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
//import Nameuser from './Componentes/Nameuser/nameuser'
import ButtonPress from './Componentes/Buttonprincipal/buttonprincipal';
import { Degradefundo } from './Componentes/Degradepg/degradepg'
import AreaMapa from './Componentes/AreaMapa/areamapa';
import Header from './Componentes/Header/Header';
import LowerPart from './Componentes/lowerPart/LowerPart';
import Geolocation from '@react-native-community/geolocation';



export default function Home() {

  return (
    

    // <Degradefundo
    // colors={['#ff0000', '#ff8419', '#ff5a0a', '#ff4001', '#dd5035']}
    // >
    <View style={styles.home}>

    <Header/>
    
    
    <ButtonPress /> 
    
 
    <AreaMapa/>
    <LowerPart/>
    </View>
    // </Degradefundo>
    

  );
};


const styles = StyleSheet.create ({
home:{
  backgroundColor: '#f38c49',
  width: '100%',
  height: '100%',
}
})

