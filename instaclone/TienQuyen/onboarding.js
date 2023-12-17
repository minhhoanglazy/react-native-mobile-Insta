// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Simple Intro Slider

// import React in our code
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
// import all the components we are going to use
import {
  StyleSheet,
  View,
  Text,
  Image,
} from 'react-native';

//import AppIntroSlider to use it
import AppIntroSlider from 'react-native-app-intro-slider';

const OnBoardingScreen = () => {
  const [showRealApp, setShowRealApp] = useState(false);
  const navigation = useNavigation();

  const onDone = () => {
    // Navigate to LoginScreen
    navigation.navigate('Welcome');
  };

  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: 'center',
          marginTop: '50%',
          paddingBottom: 100,
        }}>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTitleStyle}>{item.title}</Text>
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        navigation.navigate('Welcome')
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}          
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
          style={{ backgroundColor: '#4991EC' }}
        />
      )}
    </>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 150,
    height: 150,
    resizeMode: 'contain',
    objectFit: 'contain',
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    title: 'Share Photo & Videos',
    text: 'Have fun with your friends by posting cool photos and videos',
    image: require('./assets/instagram-icon-white-png-4.png'),
    backgroundColor: '#4991EC',
  },
  {
    key: 's2',
    title: 'Stories',
    text: 'Share stories that disappear after 24h.',
    image: require('./assets/screenshot-xxl.png'),
    backgroundColor: '#4991EC',
  },
  {
    key: 's3',
    title: 'Messages',
    text: 'Messages. Communicate with your friends privately',
    image: require('./assets/chat-4-xxl.png'),
    backgroundColor: '#4991EC',
  },
  {
    key: 's4',
    title: 'Group Chats',
    text: 'Group Chats. Stay in touch during group chats',
    image: require('./assets/group-xxl.png'),
    backgroundColor: '#4991EC',
  },
  {
    key: 's5',
    title: 'Checkins',
    text: 'Checkins. Check in and share your location with friends',
    image: require('./assets/pinpng.com-dot-icon-png-2086901.png'),
    backgroundColor: '#4991EC',
  },
  {
    key: 's6',
    title: 'Get Notified',
    text: 'Get Notified. Receive notifications when you get new messages and likes',
    image: require('./assets/bell-2-xxl.png'),
    backgroundColor: '#4991EC',
  },
];
