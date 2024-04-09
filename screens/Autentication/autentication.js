import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AuthenticationScreen() {

  const nav = useNavigation();
  return (
    <View style={styles.container}>
      <Text>Authentication Screen</Text>
      <TouchableOpacity onPress={()=> nav.navigate('Home')}>
        <Text>GO TO HOME</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    
    
  },
});