import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function RootApp() {
  const [nameApp, setNameApp] = useState('');

  useEffect(() => {
    if (nameApp === '') {
      setNameApp('My ChatGPT');
    }
  }, [nameApp]);

  return (
    <View style={styles.container}>
      {nameApp && <Text>{nameApp}</Text>}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
