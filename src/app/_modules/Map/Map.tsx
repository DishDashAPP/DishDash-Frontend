'use client'

import { FC } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import { LatLng } from 'leaflet'
import { TLocation } from '@utils/apiTypes'
import 'leaflet/dist/leaflet.css'

type MapProps = {
    position: TLocation | null
}

const Map: FC<MapProps> = ({ position }) => {
    const defaultPosition = new LatLng(35.6895, 51.3896)
    const markerPosition = position ? new LatLng(position.latitude, position.longitude) : defaultPosition

    return (
        <div className="w-full h-full overflow-hidden">
            <MapContainer
                center={markerPosition}
                zoom={13}
                scrollWheelZoom={false}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={markerPosition}>
                    <Popup>موقعیت فعلی شما</Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default Map
