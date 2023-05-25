import {View, Text, StyleSheet, Image, Pressable} from 'react-native';

export default function Home(){
  return (
    <View style={{flex:1}}>
      <View style={styles.body}>
        <Text style={styles.title}>Little Lemon</Text>
        <Text style={styles.subtitle}>Chicago</Text>
        <View style={styles.viewBody}>
          <Text style={styles.description}>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist</Text>
          <Image source={require('../assets/Heroimage.png')} style={styles.hero} />
        </View>
      </View>  
      <View style={{margin: 10, flex: 0.45}}>
        <Text style={styles.ofd}>Order for delivery!</Text>
        <View style={{flexDirection: 'row'}}>
          <Pressable style={styles.buttonMenu}>
            <Text style={styles.buttonText}>Starters</Text>
          </Pressable>
          <Pressable style={styles.buttonMenu}>
            <Text style={styles.buttonText}>Mains</Text>
          </Pressable>
          <Pressable style={styles.buttonMenu}>
            <Text style={styles.buttonText}>Desserts</Text>
          </Pressable>
          <Pressable style={styles.buttonMenu}>
            <Text style={styles.buttonText}>Drinks</Text>
          </Pressable>
        </View>
        <View
          style={{
            borderBottomColor: 'black',
            borderBottomWidth: StyleSheet.hairlineWidth,
            margin: 10
          }}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{ 
    flex: 0.55,
    backgroundColor: 'grey'
  },
  title: {
    fontSize: 48,
    color: 'yellow',
    marginLeft: 10
  },
  subtitle:{
    fontSize: 36,
    color: 'white',
    marginLeft: 10
  },
  viewBody:{
    flexDirection: 'row',
    margin:10
  },
  description: {
    flex: 0.5,  
  },
  hero:{
    resizeMode: 'contains',
    width: '50%',
    height: 150,
    flex: 0.5
  },
  ofd:{    
    fontWeight: 'bold',
  },
  buttonMenu:{
    flex: 0.25,
    fontSize: 12,
    backgroundColor: '#D3D3D3',
    borderColor: '#D3D3D3',
    borderRadius: 10,  
    margin: 2,
    padding:2  
  },
  buttonText: {
    color: 'gray',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold'
  },
});