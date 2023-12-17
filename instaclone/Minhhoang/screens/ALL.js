import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text, TouchableHighlight } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import Icon from "react-native-vector-icons/Ionicons";
import HomeScreen from '../../Gianghung/Home';
import ExploreScreen from './ExploreScreen';
import PostScreen from './PostScreen';
import PeopleScreen from './PeopleScreen';
//import ProfileScreenhoang from './ProfileScreen';
import CallScreen from '../../TienQuyen/CallScreen';
import ConversationScreen from '../../TienQuyen/ConversationScreen';
import MessageScreen from '../../TienQuyen/MessageScreen';
import MessageDetailScreen from '../../TienQuyen/MessageDetailScreen';
import ProfileScreenquyen from '../../TienQuyen/ProfileScreen';
import { View } from 'react-native';
import { ScrollView } from 'react-native';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const ExploreStack = () => {
  return (
    <Stack.Navigator initialRouteName="Explore" screenOptions={{
      headerTitleAlign: 'center', headerShown: true,
    }}>
      <Stack.Screen name="Explore" component={ExploreScreen} 
          options={({ navigation }) => ({
          title: 'Explore',
          headerLeft: null,
        })} 
      />
      <Stack.Screen 
        name="Post" 
        component={PostScreen} 
        options={({ navigation }) => ({
          title: 'Post',
          headerBackTitleVisible: true,
        })}
      />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{
      headerTitleAlign: 'center', 
    }}>
      <Stack.Screen name="Profile" component={ProfileScreenquyen} 
        options={({ navigation }) => ({
          title: 'Profile',
          headerLeft: null,
        })}
      />
      <Stack.Screen 
        name="Post" 
        component={PostScreen} 
        options={({ navigation }) => ({
          title: 'Post',
          headerBackTitleVisible: true,
        })}
      />
    </Stack.Navigator>
  );
};

const MessageStack = () => {
  return (
    <Stack.Navigator initialRouteName="Messages" screenOptions={{
      headerTitleAlign: 'center',
    }}>
      <Stack.Screen name="Messages" component={ConversationScreen} 
        options={({ navigation }) => ({
          headerLeft: null,
        })}
      />
      <Stack.Screen 
        name="Message" 
        component={MessageScreen} 
        options={({ navigation }) => ({
          title: 'Message',
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen 
        name="Detail" 
        component={MessageDetailScreen} 
        options={({ navigation }) => ({
          title: 'Detail',
          headerBackTitleVisible: false,
        })}
      />
      <Stack.Screen name="Profile" component={ProfileScreenquyen} />
      <Stack.Screen 
        name="Call" 
        component={CallScreen} 
        options={({ navigation }) => ({
          title: 'Call',
          headerBackTitleVisible: false,
        })}
      />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: 'center',
          headerShown: false,
        }}
        tabBarOptions={{
          activeTintColor: 'blue',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}>
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ 
            headerTitle: 'Instagram',
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Explore" 
          component={ExploreStack} 
          options={{ 
            tabBarBadge: 5,
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="search-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="Messagespage" 
          component={MessageStack} 
          options={{ 
            tabBarBadge: 2,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="chatbubble-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="People" 
          component={PeopleScreen} 
          options={{ 
            headerShown: true,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="people-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen 
          name="ProfileStack" 
          component={ProfileStack} 
          options={{ 
            tabBarIcon: ({ color, size }) => (
              <Ionicons name="person-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
  );
};

export default App;
