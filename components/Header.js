import { View, Button, Text, Image, StyleSheet } from 'react-native';

export default function Header(props) {  

  return (
    <View testID='cabecera' style={styles.container}>
      <Image testID='logo' style={styles.image} source={require('./../assets/manos.png')} alt="logo" />
      <Text testID='mensaje'>Bienvenida a la página de Jorge Molina Lafuente</Text>      
    </View>)
}

const styles = StyleSheet.create({
  image: {
    width:60,
    height: 40,
  },
  container:{
    alignItems: 'center',
  }
});