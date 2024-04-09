import { Platform, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    map:{
      width: wp(100),
      height: hp(100),
      
    },
    SearchBarContainer:{
      width: Platform.OS == 'ios' ? wp(80) : wp(80),
      height: hp(6),
      backgroundColor: 'white',
      position: 'absolute',
      top: wp(23),
      alignSelf: 'center',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: wp(3),
      borderRadius: 48,
      backgroundColor: '#F3F7E4'
    }
});