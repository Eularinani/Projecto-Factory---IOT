import { Platform, StyleSheet } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import{RFValue} from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({

    Container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
        width: wp(100),
        backgroundColor: '#F3F7E4',
        
    },
    UpContent:{
        flex: 0.20,
        width: wp(100),
        flexDirection:'row'
    },
    leftUpContent:{
        flex:1,
        
        justifyContent: 'center',
        alignItems: 'flex-start',
        paddingHorizontal:wp(3)
    },
    ProfilePicture:{
        width: 80,
        height: 80,
        borderRadius: 48,
        backgroundColor:'#013823',
        alignItems:'center',
        justifyContent: 'center',
        shadowOffset:{
            width: 1,
            height:2,
        },
        shadowOpacity: 0.6,
    },
    rightUpContent:{
        flex:2,
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingHorizontal:wp(3)
    },
    partnersButton:{
        backgroundColor: 'white',
        width: 190,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        borderRadius: 23,
        paddingHorizontal:5,
        shadowColor:"#CFCFCF",
        shadowOffset:{
            width: 1,
            height:2,
        },
        shadowOpacity: 0.6,
    },

    MainContent:{
        flex: 1,
        width: wp(100),
    },
    userNameWelcomeBack:{
        flex:0.35,
        paddingHorizontal:wp(3)
    },
    locationAndTemperature:{
        flex:1.05,
        alignItems: 'center',
    },
    sliderviewContainer:{
        
        flex:0.50,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sliderIconsAlign:{
        width: wp(100),
        height: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems:'center',
    },
    onAndOffButtonsContainer:{
        flex:0.75,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal:wp(3),
    },
    LightContainer:{
        height: Platform.OS == 'android' ? hp(11): 100,
        width: Platform.OS == 'android' ? wp(20): 105,
        borderRadius: 15,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor:"#CFCFCF",
        shadowOffset:{
            width: 1,
            height:2,
        },
        shadowOpacity: 0.6,
        
    },
    FanContainer:{
        height: Platform.OS == 'android' ? hp(11): 100,
        width: Platform.OS == 'android' ? wp(20): 105,
        borderRadius: 10,
        backgroundColor: '#FEFFF6',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor:"#CFCFCF",
        shadowOffset:{
            width: 1,
            height:2,
        },
        shadowOpacity: 0.6,
    },
    LockContainer:{
        height: Platform.OS == 'android' ? hp(11): 100,
        width: Platform.OS == 'android' ? wp(20): 105,
        borderRadius: 10,
        backgroundColor: '#FEFFF6',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor:"#CFCFCF",
        shadowOffset:{
            width: 1,
            height:2,
        },
        shadowOpacity: 0.6,
    },
    iconStyle:{
        marginBottom: Platform.OS == 'ios' ? 10: 0,
        marginTop: Platform.OS == 'android' ? 6: 0,
        
    }

})