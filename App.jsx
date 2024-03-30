import { StatusBar } from 'expo-status-bar';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import tw from './tailwind';
import earthChan from './assets/icon.png';

export default function App() {
  return (
    <View
      style={tw`bg-[#00223a] flex flex-col justify-center items-center h-full gap-y-8`}
    >
      <Text style={tw`text-2xl text-white max-w-[300px]`}>Hello World!</Text>
      <TouchableOpacity style={tw`h-[400px] w-[400px]`}>
        <Image style={tw`h-[400px] w-[400px]`} source={earthChan} />
      </TouchableOpacity>
      <StatusBar style='auto' />
    </View>
  );
}
