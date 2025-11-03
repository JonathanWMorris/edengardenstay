import { Image, StyleSheet, View } from 'react-native';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('@/assets/images/home.png')}
        style={styles.image}
        resizeMode="contain"  // or "cover" to fill the screen
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
