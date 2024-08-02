import dynamic from 'next/dynamic'

const DynamicMap = dynamic(() => import('@modules/Map/Map'), {
    ssr: false,
})

function MapPage() {
    return <DynamicMap />
}

export default MapPage
