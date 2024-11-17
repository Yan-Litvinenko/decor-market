import Link from 'next/link';
import { PhoneOutlined } from '@ant-design/icons';

export default function PhoneNumber(): React.JSX.Element {
    return (
        <div className="phone">
            <PhoneOutlined className="phone__icon" />
            +375 (29) 624-30-85
            <Link
                className="phone__link"
                href="tel:+375296243085"
                aria-label="Позвонить по телефону +375 (29) 624-30-85"
            />
        </div>
    );
}
