import Link from 'next/link';
import { PhoneOutlined } from '@ant-design/icons';
import { CONTACTS } from '@/constants/contacts';

export default function ContactsPhone(): React.JSX.Element {
    const { visual, number } = CONTACTS.phone;

    return (
        <div className="phone">
            <PhoneOutlined className="phone__icon" />
            {visual}
            <Link className="phone__link" href={`tel:+${number}`} aria-label={`Позвонить по телефону ${visual}`} />
        </div>
    );
}
