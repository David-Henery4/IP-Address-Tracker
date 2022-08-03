import React from 'react'
import { useMap } from 'react-leaflet'

const SetInitialView = ({lat,long}) => {
    const map = useMap()
    map.setView([lat,long], 13)
    return null
}

export default SetInitialView