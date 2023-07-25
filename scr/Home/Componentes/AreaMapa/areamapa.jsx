import {StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect, useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';



    export default function  AreaMapa() {
      

  return (
     <MapView
  
        style={styles.container}
       initialRegion={{
        latitude:  -11.8638,
        longitude: -55.5298,
        latitudeDelta: 0.03,
        longitudeDelta: 0.03,
        }}
        >


      <Marker
        coordinate={{
          latitude: -11.86380271574664,
          longitude: -55.51635312318693,
        }}
        title="TwSpeed"
        description="TwSpeed Sinop-MT"
      />
    </MapView>
  );
};


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(46,139,87,)',
    width: '100%',
    height: '37%',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    top: '-2%',
    alignSelf: 'center',
    opacity: 0.7,
    maxWidth: '90%',
    maxHeight: '30%',
    
  },
});
