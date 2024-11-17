import Link from 'next/link';
import PhoneNumber from '../phoneNumber/PhoneNumber';

export default function FooterContacts(): React.JSX.Element {
    return (
        <address className="footer__contacts">
            <h2 className="visually-hidden">Контакты</h2>
            <ul className="footer__contacts-list">
                <li className="footer__contacts-item">
                    <PhoneNumber />
                </li>
                <li className="footer__contacts-item">
                    <address className="footer__contacts-address">
                        <Link
                            className="footer__contacts-link"
                            aria-label="Посмотреть на карте адрес г.Могилёв, Быховская улица, 6Э, 150 ролет"
                            href="https://yandex.by/maps/158/mogilev/house/Z0kYdQVjS0IHQFtpfXR4dXljZQ==/?ll=30.323271%2C53.894501&z=16"
                            target="_blank"
                        >
                            г.Могилёв, Быховская улица, 6Э, 150 ролет
                        </Link>
                    </address>
                </li>
                <li className="footer__contacts-item">
                    <time className="footer__contacts-time" aria-label="Время работы с 9:00 до 15:00 (ПН выходной)">
                        c 9:00 до 15:00
                    </time>
                    <span aria-label="ПН выходной"> (ПН выходной)</span>
                </li>
            </ul>
        </address>
    );
}
