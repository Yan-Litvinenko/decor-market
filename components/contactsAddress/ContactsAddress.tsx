import Link from 'next/link';

export default function ContactsAddress(): React.JSX.Element {
    return (
        <address className="contacts-address">
            <Link
                aria-label="Посмотреть на карте адрес г.Могилёв, Быховская улица, 6Э, 150 ролет"
                href="https://yandex.by/maps/158/mogilev/house/Z0kYdQVjS0IHQFtpfXR4dXljZQ==/?ll=30.323271%2C53.894501&z=16"
                target="_blank"
            >
                г.Могилёв, Быховская улица, 6Э, 150 ролет
            </Link>
        </address>
    );
}
