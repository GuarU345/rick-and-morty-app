import React, { useEffect, useState } from 'react'
import { Image, Text, View } from 'react-native'
import { Status } from '../utils/constants'
import { useStatusColor } from '../hooks/useStatusColor'

type Props = {
    image: string,
    name: string,
    status: string
}

export const CharacterItem = ({ name, image, status }: Props) => {
    const { statusColor } = useStatusColor({ status })

    return (
        <View className="flex shadow-lg bg-white shadow-black">
            <Image className="w-40 h-56 object-fill" source={{ uri: image }} />
            <View className='p-2 flex gap-1 items-start w-full'>
                <Text>{name}</Text>
                <View className={`flex justify-center items-center rounded-full p-2 ${statusColor}`}>
                    <Text>{status}</Text>
                </View>
            </View>
        </View >
    )
}
