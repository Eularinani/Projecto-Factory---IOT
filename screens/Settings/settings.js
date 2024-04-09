import { StyleSheet, Switch, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './settingStyle';
import{RFValue} from 'react-native-responsive-fontsize'
import * as Feather from "react-native-feather";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { useState } from 'react';

export default function Settings() {

  const[activoNotify, setActivoNotify] = useState(false);

  const toogleSwitchNotify = () =>{

    setActivoNotify(previousState => !previousState)

}
  return (
    <View style={styles.container}>
      <View style={styles.BorderContainer}>
        <View style={styles.settingsContainer}>
          <Text style={{fontSize:RFValue(27), fontWeight: 'bold'}}>Settings</Text>
        </View>

        <View style={styles.AccountContainer}>
          <View style={styles.AccountHeader}>
            <View style={styles.imageContainer}>
                <Feather.User width={wp(10)} height={hp(10)} color={'#B1FC85'}/>
            </View>
            <Text style={{fontWeight: 'bold', fontSize: RFValue(20), marginHorizontal: 15}}>Account</Text>
          </View>

          <View style={styles.AccountBody}>
              <TouchableOpacity style={styles.listButtons}>
                <Text style={{fontSize: RFValue(18)}}>Edit Profile</Text>
                <Feather.ChevronRight width={wp(10)} height={hp(10)} color={'#013823'}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.listButtons}>
                <Text style={{fontSize: RFValue(18)}}>Add Packages</Text>
                <Feather.ChevronRight width={wp(10)} height={hp(10)} color={'#013823'}/>
              </TouchableOpacity>

              <TouchableOpacity style={styles.listButtons}>
                <Text style={{fontSize: RFValue(18)}}>Instagram</Text>
                <Feather.ChevronRight width={wp(10)} height={hp(10)} color={'#013823'}/>
              </TouchableOpacity>

          </View>

        </View>

        <View style={styles.NotificationsContainer}>
          <View style={styles.AccountHeader}>
            <View style={styles.imageContainer}>
              <Feather.Bell width={wp(10)} height={hp(10)} color={'#B1FC85'}/>
            </View>
            <Text style={{fontWeight: 'bold', fontSize: RFValue(20), marginHorizontal: 15}}>Notifications</Text>
          </View>
          
          <View style={styles.listButtons}>
            <Text style={{fontSize: RFValue(18)}}>App notification</Text>
            <Switch
            trackColor={{false: 'gray', true: '#0099FF'}} 
            thumbColor={activoNotify ? 'white' : 'white'}
            ios_backgroundColor='grey'
            onValueChange={toogleSwitchNotify}
            value={activoNotify}
            />
          </View>

          <View style={styles.AccountHeader}>
            <View style={styles.imageContainer}>
              <Feather.MoreHorizontal width={wp(10)} height={hp(10)} color={'#B1FC85'}/>
            </View>
            <Text style={{fontWeight: 'bold', fontSize: RFValue(20), marginHorizontal: 15}}>More</Text>
          </View>

          <TouchableOpacity style={styles.listButtons}>
            <Text style={{fontSize: RFValue(18)}}>Language & Country</Text>
            <Feather.ChevronRight width={wp(10)} height={hp(10)} color={'#013823'}/>
          </TouchableOpacity>

          <TouchableOpacity style={styles.listButtons}>
            <Text style={{fontSize: RFValue(18), fontWeight: 'bold'}}>Sign Out</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

