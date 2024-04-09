import { Platform, StyleSheet, View, Dimensions } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AuthenticationScreen from './screens/Autentication/autentication';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Appjs from './main';
import Maps from './screens/Maps/maps';
import * as Feather from "react-native-feather";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Settings from './screens/Settings/settings';

export default function App() {

  const Stack = createStackNavigator();

  // Obtém as dimensões da tela
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  function BotttomTabs(){

    const Tab = createBottomTabNavigator();
    return(
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarHideOnKeyboard: true,
          tabBarStyle: styles.tabBarStyle,
          tabBarIconStyle: { marginBottom: Platform.OS === 'ios' ? hp(1) : 0 } // Adiciona margem inferior para centralizar verticalmente no iOS
        }}
      >
        <Tab.Screen 
          name='Maps' 
          component={Maps} 
          options={{
            tabBarIcon: ({focused, color, size}) => (
              focused ? (
                <View style={[styles.iconContainer, styles.focusedStyle]}>
                  <Feather.Map stroke="white" width={wp(10)} height={wp(10)} />
                </View>
              ) : (
                <View style={[styles.iconContainer, styles.nonFocused]}>
                  <Feather.Map stroke="#616161" width={wp(10)} height={wp(10)}/>
                </View>
                
              )  
            ) 
          }}
        />

        <Tab.Screen name='Bottom' component={Appjs}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              focused ? (
                <View style={[styles.iconContainer, styles.focusedStyle]}>
                  <Feather.Home stroke="white" width={wp(10)} height={wp(10)}/>
                </View>
              ) : (
                <View style={[styles.iconContainer, styles.nonFocused]}>
                  <Feather.Home stroke="#616161" width={wp(10)} height={wp(10)}/>
                </View>
                
              )  
            ) 
          }}
        />

        <Tab.Screen name='Settinga' component={Settings}
          options={{
            tabBarIcon: ({focused, color, size}) => (
              focused ? (
                <View style={[styles.iconContainer, styles.focusedStyle]}>
                  <Feather.Settings stroke="white" width={wp(10)} height={wp(10)}/>
                </View>
              ) : (
                <View style={[styles.iconContainer, styles.nonFocused]}>
                  <Feather.Settings stroke="#616161" width={wp(10)} height={wp(10)}/>
                </View>
                
              )  
            ) 
          }}
        />

      </Tab.Navigator>
      
    )
  }
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name='Authentication' component={AuthenticationScreen}/>
        <Stack.Screen name='Home' component={BotttomTabs}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: wp(16),
    
  },
  tabBarStyle: {
    position: 'absolute',
    bottom: hp(2.3),
    left: Platform.OS == 'ios' ? wp(16) : wp(20),
    right: Platform.OS == 'ios' ? wp(16) : wp(20),
    height: hp(8.7),
    borderRadius: 48,
    justifyContent: 'space-between',
    backgroundColor:'#013823',
    borderTopWidth: 0,
    shadowColor:"#CFCFCF",
    alignItems: 'center',
    shadowOffset:{
      width: 1,
      height:2,
    },
    shadowOpacity: 0.6,
    paddingTop: (Dimensions.get('window').width >= 375 && Dimensions.get('window').height >= 812) ? 35 : 0 // Adiciona paddingTop baseado nas dimensões da tela
  },
  focusedStyle: {
    alignItems: 'center',
  },
  nonFocused: {
    alignItems: 'center',
  },
  iconContainer: {
    flex: 1,
    justifyContent: 'center',
  },
});
