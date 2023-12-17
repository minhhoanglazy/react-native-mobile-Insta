import React, { useState } from "react";
import { View, Text, ScrollView, TouchableHighlight, TextInput } from "react-native";
import Icon from 'react-native-vector-icons/Ionicons';
import home from './Home';
import { SafeAreaView } from "react-native";

const Newpost = ({navigation}) => 
{
    const [postText, setPostText] = useState('');

    return(
        <SafeAreaView>
            <View style={{marginTop: 40, paddingBottom: 10, flexDirection: 'row', justifyContent: 'space-between',borderColor: 'lightgray', borderBottomWidth: 1,}}>
                <View style={{flexDirection: "row",}}>
                    <Icon name="home" size={30} color='black' />
                    <TouchableHighlight onPress={()=> navigation.navigate('Home')} >
                        <Text style={{marginTop: 10,}}></Text>
                    </TouchableHighlight>
                </View>
                <View style={{paddingTop: 8,}}>
                    <Text style={{textAlign: 'center', fontSize: 15, fontWeight: 'bold',}}>
                        Create Post
                    </Text>
                </View>
                <TouchableHighlight style={{}} onPress={()=> navigation.navigate('Home')}>
                    <Text style={{color: 'darkblue', marginTop: 10, }}>Post</Text>
                </TouchableHighlight>
            </View>
            <View >
                <View style={{marginTop:5, flexDirection: 'row', width: 650,}}>
                    <TextInput
                        style={{flex: 1,
                        padding: 10,
                        fontSize: 16,
                        textAlignVertical: 'top',}}
                        placeholder="What's on your mind?"
                        multiline={true}
                        onChangeText={setPostText}
                        value={postText}
                    />
                </View>

            </View>
        </SafeAreaView>
    );
}

export default Newpost;
