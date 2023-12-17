//home, new post, log in, sign up
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './instaclone/Gianghung/Welcome';
// import Login from './instaclone/Login';
// import Signup from './instaclone/Signup';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { StatusBar } from "expo-status-bar";
// // import Newpost from './instaclone/Newpost';
// import Test2 from './instaclone/Test2';
// // import Test from './instaclone/Test';
// import Loginemail from './instaclone/Loginemail';
import Home from './instaclone/Gianghung/Home';
import OnBoardingScreen from './instaclone/TienQuyen/onboarding';

// const Stack = createStackNavigator();
// //"screenOptions={{ headerShown: false }}" dung de an header
// const App = () =>{
//     return (
//       <NavigationContainer>
//         <Stack.Navigator screenOptions={{ headerShown: false}}>
//             <Stack.Screen  name="Welcome"  component={Welcome}  />   
//             <Stack.Screen name="Login"  component={Login} /> 
//             <Stack.Screen name="Loginemail"  component={Loginemail} /> 
//             <Stack.Screen name="Signup"  component={Signup} />
//             <Stack.Screen name="Home" component={Home}/>
//             {/* <Stack.Screen name="Newpost" component={Newpost}/> */}
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }

export default Welcome;