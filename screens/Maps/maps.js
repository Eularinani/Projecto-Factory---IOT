import { StyleSheet, Text, TextInput, View } from 'react-native';
import { styles } from './mapStyle';
import MapView from 'react-native-maps';
import * as Feather from "react-native-feather";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Maps() {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}/>
      <View style={styles.SearchBarContainer}>
          <Feather.Search width={wp(8)} height={hp(8)} color={'#013823'}/>
          <TextInput style={{marginHorizontal: 15, fontSize: 20, color: '#013823'}}>Your Friend Name</TextInput>
      </View>
    </View>
  );
}