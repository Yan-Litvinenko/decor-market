'use client';

import { YMaps as MapProvider, Map, Placemark } from '@pbe/react-yandex-maps';

export default function ContactsMap(): React.JSX.Element {
    const SHOP_LOCATION = {
        center: [53.894501, 30.32327],
        zoom: 16,
    };

    return (
        <MapProvider>
            <Map style={{ height: '360px', width: '100%' }} defaultState={SHOP_LOCATION}>
                <Placemark
                    defaultGeometry={SHOP_LOCATION.center}
                    properties={{
                        hintContent: 'Декор Маркет',
                        balloonContent: 'г.Могилёв, Быховская улица, 6Э, 150 ролет',
                    }}
                />
            </Map>
        </MapProvider>
    );
}
