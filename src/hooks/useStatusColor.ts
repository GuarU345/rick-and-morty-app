import { useEffect, useState } from "react"
import { Status } from "../utils/constants"

export const useStatusColor = ({ status }: { status: string }) => {
    const [statusColor, setStatusColor] = useState("")

    useEffect(() => {
        if (status === Status.Alive) {
            setStatusColor('bg-green-400')
        }
        else if (status === Status.Dead) {
            setStatusColor('bg-red-400')
        }
        else if (status === Status.Unknown) {
            setStatusColor('bg-gray-400')
        }

    }, [])

    return { statusColor }
}