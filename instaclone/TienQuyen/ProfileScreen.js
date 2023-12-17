import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import React, { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView } from 'react-native-gesture-handler';
const data = [
    'https://source.unsplash.com/random?sig=',
    'https://source.unsplash.com/random?sig=0',
    'https://source.unsplash.com/random?sig=1',
    'https://source.unsplash.com/random?sig=-1',
    'https://source.unsplash.com/random?sig=-2',
    'https://source.unsplash.com/random?sig=-3',
    'https://source.unsplash.com/random?sig=n',
    'https://source.unsplash.com/random?sig=-2',
    'https://source.unsplash.com/random?sig=-3',
    'https://source.unsplash.com/random?sig=n',
    'https://source.unsplash.com/random?sig=-2',
    'https://source.unsplash.com/random?sig=-3',
    'https://source.unsplash.com/random?sig=n',
];
function UserProfile({ user }) {
  return (
    <View style={styles.header}>      
        <View>
          <Image source={user.image}  style={styles.profilePic} />
          <Text style={styles.name}>{user.name}</Text>
        </View>
        <View style={[styles.header, styles.header2]}>
          <View style={{alignItems: 'center', margin: 'auto'}}>
            <Text style={styles.details}>{user.posts}</Text>
            <Text style={styles.details}>Post</Text>
          </View>
          <View style={{alignItems: 'center', margin: 'auto'}}>
            <Text style={styles.details}>{user.followers}</Text>
            <Text style={styles.details}>Followers</Text>
          </View>
          <View style={{alignItems: 'center', margin: 'auto'}}>
            <Text style={styles.details}>{user.following}</Text>
            <Text style={styles.details}>Following</Text>
          </View>
        </View>        
    </View>
  );
}

const ProfileScreen = () => {
  const renderItem = ({ item }) => (
    <Image style={styles.image} source={{ uri: item }} />
  );
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: 'Profile',
      headerRight: () => (
        <View style={styles.header}>          
          <MaterialIcons name="notifications" style={{margin: 3}} size={24} color="#0492C2" />
        </View>
      ),
    });
    
  }, [navigation]);
  return (
    <ScrollView style={styles.container}>
      <UserProfile user={{ image: require('./assets/AI_2.jpg'), name: 'Đặng Tiến Quyền', posts: 13, followers: 13, following: 13 }} />
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
  );
};

const styles = StyleSheet.create({
  information: {
    display: 'flex',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',    
    flexWrap: 'wrap',
  },
  header2: {
    flex: 1,    
  },
  profilePic: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginLeft: 10,
  },
  details: {
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
