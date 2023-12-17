import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import PeopleScreen from './PeopleScreen';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../pictures/insta.png')}
        style={styles.logo}
      />
      <Text style={styles.heading}>Welcome</Text>
      <Text style={styles.subheading}>
        Go ahead and follow a few friends. Their posts will show up here.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(PeopleScreen)}>Find Friends</TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  subheading: {
    fontSize: 16,
    color: '#777777',
    paddingHorizontal: 40,
    paddingVertical: 20,
    textAlign: 'center',
  },
  button: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#0492c2',
    paddingHorizontal: 80,
    paddingVertical: 10,
    borderRadius: 8,
  },
});

export default HomeScreen;