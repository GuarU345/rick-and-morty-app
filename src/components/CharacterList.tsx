import React from 'react'
import { FlatList, View } from 'react-native'
import { Result } from '../types'
import { CharacterItem } from './CharacterItem'

export const CharacterList = ({ characters }: { characters: Result[] }) => {
    return (
        <View className="w-full grid items-center">
            <FlatList
                data={characters}
                numColumns={2}
                columnWrapperStyle={{ gap: 20 }}
                contentContainerStyle={{ gap: 2 }}
                renderItem={({ item: character }) => (
                    <CharacterItem name={character.name} image={character.image} status={character.status} />
                )}
                ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
            />
        </View>
    )
}
