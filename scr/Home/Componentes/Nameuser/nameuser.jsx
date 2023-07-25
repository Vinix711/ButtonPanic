import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';





const Nomeuser = ({ name }) => {
  const [nome, setNome] = useState('');

  const handleNomeChange = (text) => {
    setNome(text);

  };







  return (

    
    <View style={styles.container}>
      <Text> Nome (Que vai aparecer na central de resgate):</Text>
      <TextInput
        style={{ borderWidth: 0.5, borderRadius: 20,padding: 5, width: '60%', textAlign: 'center',  }}
        value={nome}
        onChangeText={handleNomeChange}
        
        />

      <Text>{nome}, Usuário em perigo!</Text>
    </View>

  );
};

export default Nomeuser;


const styles = StyleSheet.create ({
    container:{
      backgroundColor: 'rgba(46,139,87,0)',
      width: '100%', 
      height: '10%',
      borderRadius: 30, 
      alignItems: 'center',
      justifyContent: 'center',  
      top: '7%',
      alignSelf: 'center', 
      textAlign: 'center',
    }
})
