import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import tw from './tailwind';

export default function App() {
  return (
    <View style={tw`bg-[#00223a] flex flex-col justify-center items-center`}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style='auto' />
    </View>
  );
}
