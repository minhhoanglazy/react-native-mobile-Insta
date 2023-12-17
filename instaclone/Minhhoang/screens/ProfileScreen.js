import React from 'react';
import { ScrollView } from 'react-native';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, TouchableHighlight } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const data = [
    'https://source.unsplash.com/random?sig=',
    'https://source.unsplash.com/random?sig=0',
    'https://source.unsplash.com/random?sig=1',
    'https://source.unsplash.com/random?sig=-1',
    'https://source.unsplash.com/random?sig=-2',
    'https://source.unsplash.com/random?sig=-3',
    'https://source.unsplash.com/random?sig=n',
];

const ProfileScreen = () => {
  const renderItem = ({ item }) => (
    <Image style={styles.image} source={{ uri: item }} />
  );

  return (
    <View style={styles.container}>
      <View style={{marginTop: 40, paddingBottom: 10, borderColor: 'gray', borderBottomWidth: 1,}}>
          <View style={{paddingTop: 8, flexDirection: 'row', justifyContent: 'space-between',}}>
            <View>
            </View>
            <Text style={{textAlign: 'center', fontSize: 18, fontWeight: 'bold',}}>
              Profile
            </Text>
            <View >
              <TouchableHighlight >
                <Icon name="notifications" size={20} color='black' />
              </TouchableHighlight>
            </View>
          </View>
      </View>
      <ScrollView>
        <View style={styles.header}>
          <Image style={styles.profilePic} source={{uri: 'https://source.unsplash.com/random?sig='}} />
          <View style={styles.header}>
            <Text style={styles.details}>13 Posts</Text>
            <Text style={styles.details}>3 Followers</Text>
            <Text style={styles.details}>5 Following</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.profileSetting}>Profile Settings</Text>
        </TouchableOpacity>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item}
          numColumns={3}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 10,
  },
  details: {
    paddingHorizontal: 24,
  },
  button: {
    backgroundColor: '#0492c2',
    padding: 12,
    margin: 10,
    alignItems: 'center',
    borderRadius: 8,
  },
  profileSetting: {
    fontWeight: 'bold',
    color: 'white',
  },
  image: {
    width: '33.33%',
    height: 170,
    borderWidth: 1,
    borderColor: 'white',
  },
});

export default ProfileScreen;
