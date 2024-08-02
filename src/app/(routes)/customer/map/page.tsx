'use client'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { LatLng } from 'leaflet'

const position: LatLng = new LatLng(35.6895, 51.3896)

function MapPage() {
    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default MapPage