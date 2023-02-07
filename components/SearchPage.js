import React from "react";
import { useState } from "react";
import { Button, FlatList, Text, View, TextInput, StyleSheet, Image } from 'react-native';
//import { NavigationContainer, useNavigationContainerRef} from '@react-native/native';

export default function SearchPage(props) {  
    const [cargarLista, setCargarLista] = useState(props.theproducts);
    const [palabraBuscar, setPalabrabuscar] = useState("");

    const buscar = () => { 
        let arrayPintar = props.theproducts.filter(element => element.title.toLowerCase().trim().includes(palabraBuscar.toLowerCase().trim()) === true); 
        setCargarLista(arrayPintar);
    }

    const renderItem = ({item}) => (
        <View key={item.id}  testID={'item_'+item.id}>          
            <Text testID={'title_'+item.id} style ={{fontSize: 30}}>{item.title}</Text>
            <Image source={{uri: item.images[0]}} />
            <Button testID={'button_'+item.id} onPress={() => props.navigation.navigate('VistaProducto', {
                productoTitle: item.title , productoId: item.id, description: item.description
            })} title="Ver producto"/>
        </View>
    )
    

    return (<View id="productosresultados" style={styles.container}>
        <Text testID="catalogo" style={styles.titulo}>Catálogo</Text>
        <View id="buscadores">
            <TextInput type="text" testID="filtro" placeholder="Producto a buscar" value={palabraBuscar} onChangeText={(text) => setPalabrabuscar(text)}></TextInput>
            <Button testID="buscador" title= "Buscar" id="buscador" className="new" onPress={() =>buscar()}/>
        </View>

        <FlatList
            data={cargarLista}
            renderItem={renderItem}
        />
    </View>)
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
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
