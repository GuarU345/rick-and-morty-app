import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { getCharacters } from './src/services/characters';
import { CharacterList } from './src/components/CharacterList';


export default function App() {
  const [characters, setCharacters] = useState([])

  const get = async () => {
    const resp = await getCharacters()
    setCharacters(resp)
  }

  useEffect(() => {
    get()
  }, [])

  return (
    <View className="flex items-center h-screen mt-10 p-2">
      <Text className='text-xl font-bold self-start mb-2'>Characters</Text>
      <CharacterList characters={characters} />
      <StatusBar style="auto" />
    </View>
  );
}
