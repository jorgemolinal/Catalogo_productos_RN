import { Button, Text, View, StyleSheet } from 'react-native';
import React from "react";
import Header from './Header';

export default function Vista({route, navigation}) {

    const {productoTitle} = route.params;
    const {description} = route.params;
    
	return (<View style={{ flex:1, alignItems:'center' }}>
        <Header/>
        <View style={styles.container}>
            <Text style={{ fontSize:30, textAlign:'center' }} testID='detalle'>{productoTitle}</Text>
            <Text style={{ marginBottom:200 }}>{description}</Text>
            {/* <Image style={{height: 50, width: 50}} source={require("../../assets/list.png")} /> */}
            <Button  testID='volver' onPress={() => navigation.navigate('HomeScreen')} title="Volver"/>
        </View>
	</View>)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      marginTop:10,
    },
    titulo:{
       fontWeight: "bold",
       fontSize: 35
    },
    boton:{
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
    }
  });
