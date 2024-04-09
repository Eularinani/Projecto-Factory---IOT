import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Switch, Platform } from 'react-native';
import { styles } from './homeStyle';
import * as Feather from "react-native-feather";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import{RFValue} from 'react-native-responsive-fontsize'
import Slider from '@react-native-community/slider';
import { useEffect, useState } from "react";
import axios from 'axios';

export const Home = () =>{

    const[range,setRange] = useState('0%');
    const[activoLight, setActivoLight] = useState(false);
    const[activoLock, setActivoLock] = useState(false);
    const[activoFan, setActivoFan] = useState(false);
    const[DhtTemperatura, setDhTemperatura] = useState('--');

    // Switch da luz e request http para o arduino (luz)
    const toogleSwitchLight = () =>{

        setActivoLight(previousState => !previousState)
        
    }

    const switchLightOnArduino = () =>{
        if(activoLight = false){
            axios.get('enderço http da luz/on').then(response => {
                console.log('Led Ligada');
            })
        } else {
            axios.get('enderço http da luz/off').then(response =>{
                console.log('led desligada');
            })
        }
    }

    // Switch da tranca
    const toogleSwitchLock = () =>{

        setActivoLock(previousState => !previousState)
    }

    // Switch da ventoinha
    const toogleSwitchFan = () =>{

        setActivoFan(previousState => !previousState)
    }

    // valores dinamicos e temperatura
    useEffect(() => {
        const temperaturaArduino = () =>{
            axios.get('endereço  esp/dht/temperature').then(response =>{
                setDhTemperatura(dhtTemperatura => response.data);
                console.log('dado temperatura recuperado com sucesso');
            })
        }
    },[]);
    
    return(
        <View style={styles.Container}>
            <View style={styles.UpContent}>
                
                <View style={styles.leftUpContent}>
                    <View style={styles.ProfilePicture}>
                        <Feather.User width={30} height={45} color={'white'}/>
                    </View>
                </View>

                <View style={styles.rightUpContent}>
                    <TouchableOpacity style={styles.partnersButton}>
                        <Feather.Plus height={35} width={35} color={'#013823'}/>
                        <Text style={{fontSize:18, color:'#013823'}}>Shelter Partners</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.MainContent}>

                <View style={styles.userNameWelcomeBack}>
                    <Text style={{fontSize:RFValue(27)}}>Hi User 👋</Text>
                    <Text style={{fontSize:RFValue(18), color:"#B5B3B3",}}>Welcome Back to your Shelter</Text>
                </View>

                <View style={styles.locationAndTemperature}>
                    <Text style={{fontSize:RFValue(35)}}>Location</Text>
                    <Text style={{fontSize: RFValue(135),color:'#F07426'}}> {DhtTemperatura}º</Text>
                </View>

                <View style={styles.sliderviewContainer}>
                    <Text style={{fontSize:RFValue(20), color:"#B5B3B3"}}>Fan Speed {range}</Text>

                    <View style={styles.sliderIconsAlign}>

                        <Feather.Minus width={41} height={51} color={'#B1FC85'}/>

                        <Slider style={{width: wp(60), marginHorizontal: wp(3),
                            shadowColor:"#CFCFCF",
                            shadowOffset:{
                            width: 1,
                            height:2,
                            },shadowOpacity: 0.6,}}
                            minimumValue={0}
                            maximumValue={1}
                            minimumTrackTintColor="#B1FC85"
                            maximumTrackTintColor="gray"
                            thumbTintColor="#B1FC85"
                            value={0}
                            onValueChange={value => setRange(parseInt(value*100) + '%')}
                            >
                        </Slider>

                        <Feather.Plus width={wp(10)} height={hp(10)} color={'#B1FC85'}/>
                    </View>
                </View>

                <View style={styles.onAndOffButtonsContainer}>
                    
                    <View style={styles.LightContainer}>
                        <Feather.Sun width={Platform.OS == 'android' ? 30 : 40} height={Platform.OS == 'android' ? 30 : 40} color={'#616161'} style={styles.iconStyle}/>

                        <Switch 
                        trackColor={{false: 'gray', true: '#0099FF'}} 
                        thumbColor={activoLight ? 'white' : 'white'}
                        ios_backgroundColor='grey'
                        onValueChange={toogleSwitchLight}
                        value={activoLight}
                        />
                    </View>

                    <View style={styles.FanContainer}>
                        <Feather.Aperture width={Platform.OS == 'android' ? 30 : 40} height={Platform.OS == 'android' ? 30 : 40} color={'#616161'} style={styles.iconStyle}/>

                        <Switch
                        trackColor={{false: 'gray', true: '#0099FF'}} 
                        thumbColor={activoFan ? 'white' : 'white'}
                        ios_backgroundColor='grey'
                        onValueChange={toogleSwitchFan}
                        value={activoFan}
                        />
                    </View>

                    <View style={styles.LockContainer}>
                        <Feather.Lock width={Platform.OS == 'android' ? 30 : 40} height={Platform.OS == 'android' ? 30 : 40} color={'#616161'} style={styles.iconStyle}/>

                        <Switch
                        trackColor={{false: 'gray', true: '#0099FF'}} 
                        thumbColor={activoLock ? 'white' : 'white'}
                        ios_backgroundColor='grey'
                        onValueChange={toogleSwitchLock}
                        value={activoLock}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}