import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const DATA = [
  { id: '1', name: 'Joanne Li', image: 'https://via.placeholder.com/50' },
  { id: '2', name: 'Darren Black', image: 'https://source.unsplash.com/random?sig=' },
  { id: '3', name: 'Lesa Richardson', image: 'https://source.unsplash.com/random?sig=-1' },
  { id: '4', name: 'Cristina Radulescu', image: 'https://source.unsplash.com/random?sig=0' },
  { id: '5', name: 'Craig Kardashian', image: 'https://source.unsplash.com/random?sig=1' },
  { id: '6', name: 'Amy Cuban', image: require('../pictures/dog.jpg') },
  { id: '7', name: 'Osaka', image: require('../pictures/osak.jpg') },
  { id: '8', name: 'Mister Cristiano Ronaldo Messi', image: require('../pictures/crispy.png') },
  { id: '9', name: 'Supercell', image: require('../pictures/king.jpg') },
  { id: '10', name: 'Uhe~', image: require('../pictures/robber.png') },
];

const Item = ({ name,image }) => {
    const [isFollowing, setIsFollowing] = useState(false); //set isFollowing to false initially

    const handlePress = () => {
      setIsFollowing(!isFollowing);
    }; //change isFollowing to the opposite value

    let imageSource = null;

    // Kiểm tra nếu image là một chuỗi, coi nó là một URL và sử dụng nó như một source
    if (typeof image === 'string') {
      imageSource = { uri: image };
    } else {
      // Nếu không phải chuỗi, coi image là một đối tượng require (local image)
      imageSource = image;
    }

    return (
        <View style={styles.item}>
        <Image
        source={imageSource}
        style={styles.profilePic}
        />
        <Text style={styles.name}>{name}</Text>
        <TouchableOpacity style={styles.button} onPress={handlePress}> 
            <Text style={styles.buttonText}>{isFollowing ? 'Unfollow' : 'Follow'}</Text> 
        </TouchableOpacity>
        </View>
    );
};

const PeopleScreen = () => {
  return (
    <View style={{ flex: 1 }}>
        <View style={styles.searchContainer}>
          <Ionicons name="search" size={20} color="gray" />
            <TextInput
                style={styles.searchBar}
                placeholder="Search for friends"
                placeholderTextColor="gray"
            />
        </View>
        <FlatList
            data={DATA}
            renderItem={({ item }) => <Item name={item.name} image={item.image} />}
            keyExtractor={item => item.id}
        />
    </View>
  );
};

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 6,
    margin: 10,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
  },
  searchBar: {
    height: 40,
    flex: 1,
    borderRadius: 10,
    paddingLeft: 6
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    flex: 1,
    marginLeft: 10,
  },
  button: {
    width: 120,
    backgroundColor:'#0492c2', // Light blue color
    borderRadius:10,
    paddingVertical:7, // Make the button thinner
  },
  buttonText:{
     color:'white',
     fontWeight:'normal',
     textAlign:'center'
   }
});

export default PeopleScreen;
