import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
//import React from 'react';
import { View, Text, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import AI_1 from './assets/AI_1.jpg';
import AI_2 from './assets/AI_2.jpg';
import AI_3 from './assets/AI_3.jpg';
import AI_4 from './assets/AI_4.jpg';
import AI_5 from './assets/AI_5.jpg';


const CallScreen = ({ route }) => {
    if(route.params != null){
        var { name, image, camOn } = route.params; 
    }
    else{
        var name = '';
        var image = AI_3;
        var camOn = true;
    }
    
    const navigation = useNavigation();

    const [isCamOn, setIsCamOn] = useState(camOn);
    const [isMicOn, setIsMicOn] = useState(true);
    const [isMute, setIsMute] = useState(false);
    const CamPress = () => {
        setIsCamOn(!isCamOn);
    };
    const MicPress = () => {
        setIsMicOn(!isMicOn);
    };
    const MutePress = () => {
        setIsMute(!isMute);
    }
    useEffect(() => {
        navigation.setOptions({
            title: '',
            headerTransparent: true,
            headerLeft: () => (
                <View style={styles.header}>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                    <MaterialIcons name="arrow-back" size={24} color="#fff" />
                  </TouchableOpacity>
                  <Text style={{fontSize: 16, margin: 2,color: '#fff', justifyContent: 'center', width: 200}}>{name}</Text>
                </View>
              ),
              headerRight: () => (
                <View style={styles.header}>
                  <MaterialIcons name='person-add' style={{margin: 10}} size={30} color="#fff" />
                  <MaterialIcons name="more-horiz" style={{margin: 10}} size={30} color="#fff" />
                </View>
              ),
        });
      }, [navigation, isCamOn, isMicOn, isMute]);
    return (
        <View style={styles.container}>
            <View style={{alignItems: 'center', paddingTop: '50%'}}>
                <Image source={image} style={{borderRadius: 50, width: 100, height: 100}} />
                <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold', paddingTop: 10}}>{name}</Text>
                <Text style={{fontSize: 18, color: '#F5F5F5', paddingTop: 5,}}>Đang gọi...</Text>
            </View>
            <View style={{flex: 1, justifyContent: 'flex-end'}}>
                <View style={styles.control}>
                    <MaterialIcons name={isCamOn?'videocam':'videocam-off'} style={{margin: 10, flex: 1, textAlign: 'center'}} size={30} color="#fff" onPress={CamPress}/>
                    <MaterialIcons name={isMicOn?'mic':'mic-off'} style={{margin: 10, flex: 1, textAlign: 'center'}} size={30} color="#fff" onPress={MicPress}/>
                    <MaterialIcons name='videogame-asset' style={{margin: 10, flex: 1, opacity: 0.5, textAlign: 'center'}} size={30} color="#fff" />
                    <MaterialIcons name={isMute?'volume-off':'volume-up'} style={{margin: 10, flex: 1, textAlign: 'center'}} size={30} color="#fff" onPress={MutePress}/>
                    <View style={{ flex: 1, textAlign: 'center', backgroundColor: 'red',justifyContent: 'center',height: 50, alignItems: 'center', borderRadius: 50,}}>
                        <MaterialIcons name='call-end' size={30} color="#fff" onPress={() => navigation.goBack()} />
                    </View>                
                </View>
            </View>
        </View>
    );
}
export default CallScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7D7D7D',
    },
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: 10,   
    },
    control: {     
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',           
        borderRadius: 30,
        backgroundColor: '#383838',
        height: 80,
        margin: 10,
        padding: 10,       
    },
});
