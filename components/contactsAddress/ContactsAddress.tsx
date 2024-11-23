import { CONTACTS } from '@/constants/contacts';
import Link from 'next/link';

export default function ContactsAddress(): React.JSX.Element {
    const { address, mapLink } = CONTACTS;
    return (
        <address className="contacts-address">
            <Link aria-label={`Посмотреть на карте адрес ${address}`} href={mapLink} target="_blank">
                {address}
            </Link>
        </address>
    );
}
