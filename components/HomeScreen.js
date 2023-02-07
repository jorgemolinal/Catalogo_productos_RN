import { useState, useEffect } from "react";
import CONFIG from "./config/config";
import SearchPage from "./SearchPage";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Header';
import { Image } from 'react-native';
import { mockdata } from './constants/products.js'
import React from "react";

const USE_SERVER = CONFIG.use_server;
const SERVER_URL = CONFIG.server_url;

//ideas:
//probar response.status y si no es 200 poner un error en pantalla
//
function HomeScreen(props) {
    const [loading, setLoading] = useState(true);
    const [myProducts, setMyproducts] = useState([]);
    
    const download = async () => {
    if (USE_SERVER){
        let downloadedData;
      try {
        const res = await fetch(SERVER_URL);
        downloadedData = await res.json();
      } catch (e) {
        console.log("No se ha podido descargar la información.");
      }
      setMyproducts(downloadedData);
    } else {
        setMyproducts(mockdata);
    }
	}

    useEffect(() => {
        //Descargar el fichero y despues poner loading a false
        async function fetchData() {
          await download();
            setTimeout(()=>{
              setLoading(false);
              console.log(loading) //No cambia el valor de loading (No funciona el set)
            },300);		
        }
    
        fetchData();
      }, [])

  return (
      <View id="main" style={styles.container}>
        <View  style={styles.Header}>
         <Header />
         </View>
        {loading ?  <Image testID='loading' style={styles.image} source={require('./../assets/loading.gif')} alt="logo" /> : <SearchPage theproducts={myProducts.products} navigation={props.navigation}/>}
        <StatusBar style="auto" />
      </View>

  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 10,
      marginTop:20
    },
    header:{
       marginTop: 20
    },
  });

export default HomeScreen;
