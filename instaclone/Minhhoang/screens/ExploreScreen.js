import React from 'react';
import { StyleSheet, View, Image, Text, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MasonryList from "react-native-masonry-list";

const ExploreScreen = () => {
  const navigation = useNavigation();

  const images = [
    { uri: 'https://source.unsplash.com/random?sig=', dimensions: { height: 200 } },
    { uri: 'https://source.unsplash.com/random?sig=0', dimensions: { height: 7 } },
    { uri: 'https://source.unsplash.com/random?sig=1', dimensions: { height: 100 } },
    { uri: 'https://source.unsplash.com/random?sig=2', dimensions: { width: 2 , height: 1 } },
    { uri: 'https://source.unsplash.com/random?sig=3', dimensions: { width: 3 , height: 2 } },
    { uri: 'https://source.unsplash.com/random?sig=4', dimensions: { width: 3 , height: 5 } },
    { uri: 'https://source.unsplash.com/random?sig=5', dimensions: { height: 100 } },
    { uri: 'https://source.unsplash.com/random?sig=6', dimensions: { height: 100 } },
    { uri: 'https://source.unsplash.com/random?sig=7', dimensions: { width: 200 } },
    { uri: 'https://source.unsplash.com/random?sig=8', dimensions: { width: 3 , height: 4 } },
    { uri: 'https://source.unsplash.com/random?sig=1', dimensions: { width: 1 , height: 2 } },
    { uri: 'https://source.unsplash.com/random?sig=9', dimensions: { width: 3 , height: 5 } },
    { uri: 'https://source.unsplash.com/random?sig=10', dimensions: { height: 1 } },
    { uri: 'https://source.unsplash.com/random?sig=11', dimensions: { height: 2 } },
    { uri: 'https://source.unsplash.com/random?sig=12', dimensions: { width: 2 } },
    { uri: 'https://source.unsplash.com/random?sig=13', dimensions: { width: 1 , height: 3 } },
    { uri: 'https://source.unsplash.com/random?sig=14', dimensions: { width: 1 , height: 2 } },
    { uri: 'https://source.unsplash.com/random?sig=15', dimensions: { width: 1 , height: 2 } },
    { uri: 'https://source.unsplash.com/random?sig=16', dimensions: { width: 1 , height: 2 } },
    { uri: 'https://source.unsplash.com/random?sig=17', dimensions: { width: 1 , height: 2 } },
    //{ uri: require('../pictures/dog.jpg'), dimensions: { width: 100 , height: 100 } }, //chỉ hoạt động trên web
  ];

  return (
    <View style={styles.container}>
      <MasonryList
        images={images}
        columns={3}
        spacing={0.4}
        imageContainerStyle={styles.image}
        onPressImage={(item) => {
          navigation.navigate('Post', { image: item.uri });
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    borderWidth: 0,
    borderColor: 'white',
  },
});

export default ExploreScreen;