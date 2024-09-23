import { View, Text} from 'react-native'
import React, { useEffect } from 'react'
import { StatusBar } from 'expo-status-bar';

const home = () => {
  useEffect(() => {
    console.log('HomeScreen rendered');
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-custom-background">
      <Text className="font-bold text-2xl my-4">
        home
      </Text>
      {/* <StatusBar style="dark" /> */}
    </View>
  );
};

export default home;