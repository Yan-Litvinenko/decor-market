import ContactsPhone from '../contactsPhone/ContactsPhone';
import ContactsAddress from '../contactsAddress/ContactsAddress';
import ContactsMode from '../contactsMode/ContactsMode';

export default function FooterContacts(): React.JSX.Element {
    return (
        <address className="footer__contacts">
            <h2 className="visually-hidden">Контакты</h2>
            <ul className="footer__contacts-list">
                <li className="footer__contacts-item">
                    <ContactsPhone />
                </li>
                <li className="footer__contacts-item">
                    <ContactsAddress />
                </li>
                <li className="footer__contacts-item">
                    <ContactsMode />
                </li>
            </ul>
        </address>
    );
}
