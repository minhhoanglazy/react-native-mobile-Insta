import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import AI_1 from './assets/AI_1.jpg';
import AI_2 from './assets/AI_2.jpg';
import AI_3 from './assets/AI_3.jpg';
import AI_4 from './assets/AI_4.jpg';
import AI_5 from './assets/AI_5.jpg';

const conversations = [
    { name: 'Đặng Tiến Quyền', message: 'Xin chào!', image: AI_3, time: '10:00 AM' },
    { name: 'Porsche Taycan Wannabuy', message: 'Chào bạn!', image: AI_4, time: '10:05 AM' },
    { name: 'Đinh Minh Hoàng', message: 'Chào bạn!', image: AI_1, time: '10:05 AM' },  
    { name: 'Đặng Tiến Quyền', message: 'Xin chào!', image: AI_3, time: '10:00 AM' },
    { name: 'Porsche Taycan Wannabuy', message: 'Chào bạn!', image: AI_4, time: '10:05 AM' },
    { name: 'Đinh Minh Hoàng', message: 'Chào bạn!', image: AI_1, time: '10:05 AM' },  
    // Thêm nhiều cuộc trò chuyện khác ở đây
  ];

const ConversationItem = ({ name, message, image, time }) => {
  const navigation = useNavigation();

  
  return (
    <TouchableOpacity onPress={() =>  navigation.navigate('Message', {name: name})}>
      <View style={styles.item}>
        <Image source={ image } style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.name}>{name}</Text>
          <View style={styles.messageTimeContainer}>
            <Text style={styles.message}>{message} · </Text>
            <Text style={styles.time}>{time}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};


  
const ConversationScreen = ({ navigation }) => (
  <View style={styles.container}>
    <FlatList
      data={conversations}
      renderItem={({ item }) => <ConversationItem {...item} />}
      keyExtractor={(item) => item.name}
    />
  </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    item: {
      flexDirection: 'row',
      padding: 10,
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 10,
    },
    textContainer: {
      justifyContent: 'center',
    },
    
    messageTimeContainer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    name: {
      fontWeight: 'bold',
    },
    message: {
      color: '#888',
    },
    time: {
      color: '#888',
    },
});

export default ConversationScreen;
