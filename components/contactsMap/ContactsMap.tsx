'use client';

import { YMaps as MapProvider, Map } from '@pbe/react-yandex-maps';

export default function ContactsMap(): React.JSX.Element {
    return (
        <MapProvider>
            <Map defaultState={{ center: [55.7558, 37.6173], zoom: 10 }} />
        </MapProvider>
    );
}
