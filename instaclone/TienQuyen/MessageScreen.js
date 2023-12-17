import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity, Animated, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import CallScreen from './CallScreen';
import AI_1 from './assets/AI_1.jpg';
import AI_2 from './assets/AI_2.jpg';
import AI_3 from './assets/AI_3.jpg';
import AI_4 from './assets/AI_4.jpg';
import AI_5 from './assets/AI_5.jpg';

const messages = [
  {
    name: 'Porsche Taycan Wannabuy',
    image: AI_4,
    messages: [
      { sender: 'Porsche Taycan Wannabuy', message: 'Yeah, I heard there are a lot of people interested in this beautiful car', image: AI_4, time: '10:00 AM' },
      { sender: 'You', message: 'Just did a drive test today with this beauty', image: AI_2, time: '10:05 AM' },
      { sender: 'Porsche Taycan Wannabuy', message: 'That sounds amazing! How was the experience?', image: AI_4, time: '10:10 AM' },
      { sender: 'You', message: 'It was fantastic! The car is really smooth and fast.', image: AI_2, time: '10:15 AM' },
      { sender: 'Porsche Taycan Wannabuy', message: 'I\'m glad to hear that. I\'m looking forward to trying it out myself.', image: AI_4, time: '10:20 AM' },
      { sender: 'You', message: 'You definitely should. It\'s worth it!', image: AI_2, time: '10:25 AM' },
    ]
  },  
  {
    name: 'Đinh Ninh Hoàng',
    image: AI_1,
    messages: [
      { sender: 'Porsche Taycan Wannabuy', message: 'Yeah, I heard there are a lot of people interested in this beautiful car', image: AI_1, time: '10:00 AM' },
      { sender: 'You', message: 'Just did a drive test today with this beauty', image: AI_2, time: '10:05 AM' },
      { sender: 'Porsche Taycan Wannabuy', message: 'That sounds amazing! How was the experience?', image: AI_1, time: '10:10 AM' },
      { sender: 'You', message: 'It was fantastic! The car is really smooth and fast.', image: AI_2, time: '10:15 AM' },
      { sender: 'Porsche Taycan Wannabuy', message: 'I\'m glad to hear that. I\'m looking forward to trying it out myself.', image: AI_1, time: '10:20 AM' },
      { sender: 'You', message: 'You definitely should. It\'s worth it!', image: AI_2, time: '10:25 AM' },
    ]
  },
  {
    name: 'Đặng Tiến Quyền',
    image: AI_3,
    messages: [
      { sender: 'Đặng Tiến Quyền', message: 'Yeah, I heard there are a lot of people interested in this beautiful car', image: AI_3, time: '10:00 AM' },
      { sender: 'You', message: 'Just did a drive test today with this beauty', image: AI_2, time: '10:05 AM' },
      { sender: 'Đặng Tiến Quyền', message: 'That sounds amazing! How was the experience?', image: AI_3, time: '10:10 AM' },
      { sender: 'You', message: 'It was fantastic! The car is really smooth and fast.', image: AI_2, time: '10:15 AM' },
      { sender: 'Đặng Tiến Quyền', message: 'I\'m glad to hear that. I\'m looking forward to trying it out myself.', image: AI_3, time: '10:20 AM' },
      { sender: 'You', message: 'You definitely should. It\'s worth it!', image: AI_2, time: '10:25 AM' },
    ]
  }    
];


const MessageItem = ({ sender, message, image, time }) => {
  
  return (
    <View style={sender === 'You' ? [styles.itemRight] : [styles.itemLeft]}>
      <View style={{height: '100%', justifyContent: 'flex-end'}}>
        <Image source={image} style={[styles.image, sender==='You' ? {marginLeft: 10}:{marginRight: 10}]} />
      </View>      
      <View style={[styles.textContainer]}>
        <Text style={[styles.message, sender==='You' ? {borderBottomRightRadius:3, backgroundColor: '#4395F8', color: 'white'}:{borderBottomLeftRadius: 3, backgroundColor: '#F1F2F3', color: 'black'}]}>{message}</Text>
        {/* <Text style={styles.time}>{time}</Text> */}
      </View>
      <View style={{height: '100%', justifyContent: 'flex-end'}}>
        <Image style={[styles.image,{marginLeft: 10}]} />
      </View> 
    </View>
  );
};

const MessageScreen = ({ route }) => {
  const { name } = route.params;
  const person = messages.find(person => person.name === name);
  //const chatPartner = messages[0].sender; // Lấy tên người bạn đang trò chuyện
  const navigation = useNavigation();
  if (!person || !person.messages) {
    // Xử lý trường hợp person không tồn tại hoặc không có thuộc tính 'messages'
    // Ví dụ: Hiển thị thông báo lỗi hoặc thực hiện hành động phù hợp khác
    return (
      <View>
        <Text>Không tìm thấy tin nhắn cho người này.</Text>
      </View>
    );
  }
  useEffect(() => {
    navigation.setOptions({
      title: '',
      headerLeft: () => (
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons name="arrow-back" size={24} color="#001CFF" />
          </TouchableOpacity>
          <Text style={{fontSize: 16, margin: 2, justifyContent: 'center', width: 200}}>{name}</Text>
        </View>
      ),
      headerRight: () => (
        <View style={styles.header}>
          <MaterialIcons name="videocam" style={{margin: 3}} size={24} color="#001CFF" onPress={() => navigation.navigate('Call', {name: person.name, image: person.image, camOn: true})} />
          <MaterialIcons name="call" style={{margin: 3}} size={24} color="#001CFF" onPress={() => navigation.navigate('Call', {name: person.name, image: person.image, camOn: false})}/>
          <MaterialIcons name="info-outline" style={{margin: 3}} size={24} color="#001CFF" onPress={() => navigation.navigate('Detail', {name: person.name, image: person.image, camOn: false})}/>
        </View>
      ),
    });
    const parentNavigation = navigation.getParent();
    if (parentNavigation) {
      parentNavigation.setOptions({
        tabBarStyle: {display: 'none'},
      });
    }

    return () => {
      if (parentNavigation) {
        parentNavigation.setOptions({
          tabBarStyle: {display: 'flex'},
        });
      }
    };
  }, [navigation]);

  return (
    <View style={styles.container}>      
      <FlatList
        data={person.messages}
        renderItem={({ item }) => <MessageItem {...item} />}
        keyExtractor={(item) => item.time}
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: 'white', padding: 10, borderTopWidth: 1, borderTopColor: 'black' }}>
        <TouchableOpacity>
          <MaterialIcons name="camera-alt" size={24} color="#001CFF" />
        </TouchableOpacity>
        <TextInput
          style={{ flex: 1, marginLeft: 10, marginRight: 10, borderRadius: 5, backgroundColor: '#F1F2F3', fontSize: 16, padding: 5 }}
          placeholder="Start typing..."
        />
        <TouchableOpacity>
          <MaterialIcons name="send" size={24} color="#001CFF" />
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#fff',    
  },
  title: {
    color: '#000',
    fontSize: 18,
    flex: 1,
    textAlign: 'center',
  },
  itemLeft: {
    flexDirection: 'row',
    padding: 5,
  },
  itemRight: {
    flexDirection: 'row-reverse',
    padding: 5,
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
  textContainer: {
    justifyContent: 'center',
    flex: 1,
  },
  message: {
    color: '#000',
    fontSize: 16,    
    padding: 10,
    borderRadius: 15,    
    backgroundColor: 'red',
  },
  time: {
    color: '#888',
    fontSize: 12,
  },
});

export default MessageScreen;
