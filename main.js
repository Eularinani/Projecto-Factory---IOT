import { Platform, StyleSheet, Text, View } from 'react-native';
import { Home } from './screens/Home/home';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default function Appjs() {
  return (
    <View style={styles.container}>
      <Home/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Platform.OS == 'ios' ? wp(8) : wp(9),
    paddingBottom: Platform.OS == 'ios' ? wp(18) : wp(17),
    backgroundColor: '#F3F7E4',
  },
});