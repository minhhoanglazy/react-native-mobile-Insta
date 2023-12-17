import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
//import React from 'react';
import { View, Text, Image, StyleSheet,ScrollView , FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import AI_1 from './assets/AI_1.jpg';
import AI_2 from './assets/AI_2.jpg';
import AI_3 from './assets/AI_3.jpg';
import AI_4 from './assets/AI_4.jpg';
import AI_5 from './assets/AI_5.jpg';


const MessageDetailScreen = ({ }) => {
    if(null){
        
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
                    <MaterialIcons name="arrow-back" size={24} color="#001CFF" />
                  </TouchableOpacity>
                  <Text style={{fontSize: 16, margin: 2,color: '#000', justifyContent: 'center', width: 200}}>{name}</Text>
                </View>
              ),
              headerRight: () => (
                <View style={styles.header}>
                  <MaterialIcons name="more-vert" style={{margin: 10}} size={30} color="#000" />
                </View>
              ),
        });
      }, [navigation, isCamOn, isMicOn, isMute]);
    return (
        <ScrollView style={styles.container}>
            <View style={{alignItems: 'center', paddingTop: '50%'}}>
                <Image source={image} style={{borderRadius: 50, width: 100, height: 100}} />
                <Text style={{fontSize: 25, color: 'white', fontWeight: 'bold', paddingTop: 10}}>{name}</Text>
                <View style={{flexDirection: 'row', width: '95%'}}>
                    <View style={styles.choise}>
                        <View style={[{margin: 3}, styles.icon]}>
                            <MaterialIcons name="call" size={24} color="white" onPress={() => navigation.navigate('Call', {name: name, image: image, camOn: true})} />
                        </View>
                        <Text style={styles.textChoise}>Gọi thoại</Text>
                    </View>
                    <View style={styles.choise}>
                        <View style={[{margin: 3}, styles.icon]}>
                            <MaterialIcons name="videocam" size={24} color="white" onPress={() => navigation.navigate('Call', {name: name, image: image, camOn: false})} />
                        </View>
                        <Text style={styles.textChoise}>Gọi video</Text>
                    </View>
                    <View style={styles.choise}>
                        <View style={[{margin: 3}, styles.icon]}>
                            <MaterialIcons name="person" size={24} color="white" onPress={() => navigation.navigate('Profile')} />
                        </View>
                        <Text style={styles.textChoise}>Trang cá nhân</Text>
                    </View>
                    <View style={styles.choise}>
                        <View style={[{margin: 3}, styles.icon]}>
                            <MaterialIcons name="notifications" size={24} color="white" onPress={() => navigation.navigate('Call', {name: name, image: image, camOn: false})} />
                        </View>
                        <Text style={styles.textChoise}>Tắt thông báo</Text>
                    </View>                    
                </View>
                <View style={{width: '95%', paddingTop: 20}}>
                    <Text style={{color: '#969696', flex: 1}}>Tùy Chỉnh</Text>
                    <View style={{flexDirection: 'row', with: '100%'}}>
                        <Text style={[styles.choise, {fontSize: 15, flex: 1}]}>Chủ đề</Text>
                        <MaterialIcons name="radio-button-unchecked" style={{paddingTop: 15}} size={24} color="blue" />
                    </View>
                    <View style={{flexDirection: 'row', with: '100%'}}>
                        <Text style={[styles.choise, {fontSize: 15}]}>Cảm xúc nhanh</Text>
                        <MaterialIcons name="thumb-up" style={{paddingTop: 15}} size={24} color="blue" />
                    </View>
                    <View style={{flexDirection: 'row', with: '100%'}}>
                        <Text style={[styles.choise, {fontSize: 15}]}>Biệt danh</Text>
                    </View>
                    <View style={{flexDirection: 'row', with: '100%'}}>
                        <Text style={[styles.choise, {fontSize: 15}]} >Hiệu ứng từ ngữ</Text>
                        <MaterialIcons name="auto-fix-high" style={{paddingTop: 15}} size={24} color="blue" />
                    </View>
                    <Text style={{color: '#969696', flex: 1}}>Hành động khác</Text>
                    <View style={{flexDirection: 'row', with: '100%'}}>
                        <Text style={[styles.choise, {fontSize: 15, flex: 1}]}>Chủ đề</Text>
                        <MaterialIcons name="radio-button-unchecked" style={{paddingTop: 15}} size={24} color="blue" />
                    </View>
                    <View style={{flexDirection: 'row', with: '100%'}}>
                        <Text style={[styles.choise, {fontSize: 15}]}>Cảm xúc nhanh</Text>
                        <MaterialIcons name="thumb-up" style={{paddingTop: 15}} size={24} color="blue" />
                    </View>
                    <View style={{flexDirection: 'row', with: '100%'}}>
                        <Text style={[styles.choise, {fontSize: 15}]}>Biệt danh</Text>
                    </View>
                    <View style={{flexDirection: 'row', with: '100%'}}>
                        <Text style={[styles.choise, {fontSize: 15}]} >Hiệu ứng từ ngữ</Text>
                        <MaterialIcons name="auto-fix-high" style={{paddingTop: 15}} size={24} color="blue" />
                    </View>
                    <Text style={{color: '#969696', flex: 1}}>Tùy Chỉnh</Text>
                    <View style={{flexDirection: 'row', with: '100%'}}>
                        <Text style={[styles.choise, {fontSize: 15, flex: 1}]}>Chủ đề</Text>
                        <MaterialIcons name="radio-button-unchecked" style={{paddingTop: 15}} size={24} color="blue" />
                    </View>
                    <View style={{flexDirection: 'row', with: '100%'}}>
                        <Text style={[styles.choise, {fontSize: 15}]}>Cảm xúc nhanh</Text>
                        <MaterialIcons name="thumb-up" style={{paddingTop: 15}} size={24} color="blue" />
                    </View>
                    <View style={{flexDirection: 'row', with: '100%'}}>
                        <Text style={[styles.choise, {fontSize: 15}]}>Biệt danh</Text>
                    </View>
                    <View style={{flexDirection: 'row', with: '100%'}}>
                        <Text style={[styles.choise, {fontSize: 15}]} >Hiệu ứng từ ngữ</Text>
                        <MaterialIcons name="auto-fix-high" style={{paddingTop: 15}} size={24} color="blue" />
                    </View>
                </View>
            </View>
        </ScrollView>
    );
}
export default MessageDetailScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
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
    choise: {
        alignItems: 'center',
        flex: 1,
        paddingTop: 20,
    },
    textChoise: {
        color: 'black',
    },
    icon: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        height: 40,
        borderRadius: 50,
        backgroundColor: '#5D5D5D',
    },
});
