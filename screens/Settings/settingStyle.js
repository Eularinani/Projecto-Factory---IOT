import { StyleSheet, Platform } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Platform.OS == 'ios' ? wp(8) : wp(9),
      paddingBottom: Platform.OS == 'ios' ? wp(18) : wp(17),
      paddingHorizontal: wp(3),
      backgroundColor: '#F3F7E4'
    },
    BorderContainer:{
      backgroundColor: '#F3F7E4',
      flex: 1,
      width: '100%'
    },
    settingsContainer:{
      flex:0.3,
      justifyContent: 'center',
    },
    AccountContainer:{
      flex:1,
    },
    NotificationsContainer:{
      flex:1.2,
      paddingVertical: 10,
    },
    imageContainer:{
      width: wp(18),
      height: hp(8),
      backgroundColor: '#013823',
      borderRadius: 60,
      alignItems:'center',
      justifyContent: 'center',
    },
    AccountHeader:{
      flexDirection: 'row',
      alignItems: 'center',
      flex:0.4,
    },
    AccountBody:{
      flex:1,

    },
    listButtons:{
      flexDirection: 'row',
      alignItems:'center',
      justifyContent: 'space-between',
      
      height:hp(7.8),
    }
});