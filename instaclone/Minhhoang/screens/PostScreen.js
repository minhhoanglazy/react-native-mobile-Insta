import React, { useState } from 'react';
import { ScrollView, View, Image, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import dogPic from '../pictures/dog.jpg';
import robberPic from '../pictures/robber.png';
import kingPic from '../pictures/king.jpg';

const PostScreen = ({ route }) => {
  const { image } = route.params;
  const navigation = useNavigation();
  
  const [likes, setLikes] = useState(4);
  const [heartFilled, setHeartFilled] = useState(false);
  const toggleHeart = () => {
    setLikes(likes + (heartFilled ? -1 : 1));
    setHeartFilled(!heartFilled);
  };

  const handlePress = () => {
    Alert.alert(
      "Post Options",
      "Choose an option",
      [
        { text: "Delete", onPress: () => console.log("Delete Pressed") },
        { text: "Share", onPress: () => console.log("Share Pressed") },
        { text: "Report", onPress: () => console.log("Report Pressed") }
      ]
    );
  };
  
  const myTime = ['3 hours ago', '2 hours ago', '6 hours ago', '30 minutes ago', '1 minute ago'];
  const randomTime = myTime[Math.floor(Math.random() * myTime.length)];
  
  return (
    <View style={styles.container}>
      <ScrollView style={styles.postContainer}>
        <View style={styles.header}>
          <View style={styles.profileContainer}>
            <Image source={{ uri: 'https://source.unsplash.com/random?sig=' }} style={styles.profilePic} />
            <Text style={styles.username}>Maria</Text>
          </View>
          <TouchableOpacity onPress={handlePress} style={styles.menuIcon}>
            <Ionicons name="ellipsis-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Image source={{ uri: image }} style={styles.image} />
        <View style={styles.iconBar}>
          <TouchableOpacity onPress={toggleHeart} style={styles.icon}>
            <Ionicons name={heartFilled ? "heart" : "heart-outline"} size={28} color={heartFilled ? "red" : "black"} />
          </TouchableOpacity>
          <TouchableOpacity>
          <Ionicons name="chatbubble-outline" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text style={styles.likes}>{likes} likes</Text>
        <Text style={styles.time}>{randomTime}</Text>
        {/*Comments*/}
        <View style={styles.comment}>
          <Image source={ require('../pictures/crispy.png') } style={styles.commentProfilePic} />
          <View style={styles.commentBox}>
            <Text style={styles.username}>Joanne</Text>
            <Text>San Francisco is amazing. I'm so jealous 🔥</Text>
          </View>
        </View>
        <View style={styles.comment}>
          <Image source={dogPic} style={styles.commentProfilePic} />
          <View style={styles.commentBox}>
            <Text style={styles.username}>Amy</Text>
            <Text>Is this from Twin Peaks? 😍😍😍</Text>
          </View>
        </View>
        <View style={styles.comment}>
          <Image source={ robberPic } style={styles.commentProfilePic} />
          <View style={styles.commentBox}>
            <Text style={styles.username}>Brotato</Text>
            <Text>Helolololol 🗣️🗣️🔊🔊🔊❌❌❌❌❌</Text>
          </View>
        </View>
        <View style={styles.comment}>
          <Image source={kingPic} style={styles.commentProfilePic} />
          <View style={styles.commentBox}>
            <Text style={styles.username}>Racer</Text>
            <Text>Get a life</Text>
          </View>
        </View>
      </ScrollView>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Add a comment..."
        />
        <TouchableOpacity>
          <Ionicons style={styles.send} name="send" size={24} color="blue" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  postContainer: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 10,
  },
  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 45,
    height: 45,
    borderRadius: 23,
    marginRight: 10,
  },
  image: {
    width: '100%',
    height: 360,
  },
  iconBar: {
    flexDirection: 'row',
    justifyContent: 'start',
    alignItems:'center',
    padding: 10,
  },
  icon:{
    marginRight:10
  },
  username: {
    fontWeight: 'bold',
    marginRight: 10,
    fontSize: 15
  },
  likes: {
    marginHorizontal: 10,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  time:{
     marginHorizontal:10,
     color:'gray',
     marginBottom:14
   },
   comment:{
     flexDirection:'row',
     marginHorizontal:10,
     marginBottom:10,
     alignItems:'center'
   },
   commentProfilePic:{
     width:50,
     height:50,
     borderRadius:25,
     marginRight:10
   },
   commentBox:{
     flexShrink:1,
     borderRadius:4,
     borderWidth:0.5,
     borderColor:'gray',
     backgroundColor:'lightgray',
     paddingVertical:4,
     paddingHorizontal:8
   },
   inputContainer:{
     flexDirection:'row',
     paddingHorizontal:10
   },
   input:{
     flex:1,
     height:40,
     borderColor:'gray',
     borderWidth:1,
     marginRight:10,
     borderRadius:6,
     paddingLeft:10
   },
   send:{
      marginVertical:7
   }
});

export default PostScreen;
