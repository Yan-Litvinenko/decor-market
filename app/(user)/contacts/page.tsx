import ContactsAddress from '@/components/contactsAddress/ContactsAddress';
import ContactsMap from '@/components/contactsMap/ContactsMap';
import ContactsMode from '@/components/contactsMode/ContactsMode';
import ContactsPhone from '@/components/contactsPhone/ContactsPhone';

export default function Contacts(): React.JSX.Element {
    return (
        <div className="contacts">
            <div className="container">
                <div className="contacts__inner">
                    <h1 className="contacts__title title" aria-label="Контакты">
                        Контакты
                    </h1>
                    <div className="contacts__content">
                        <ul className="contacts__list">
                            <li className="contacts__item">
                                <h3 className="contacts__item-title">Наш телефон:</h3>
                                <ContactsPhone />
                            </li>
                            <li className="contacts__item">
                                <h3 className="contacts__item-title">Режим работы:</h3>
                                <ContactsMode />
                            </li>
                            <li className="contacts__item">
                                <h3 className="contacts__item-title">Адрес:</h3>
                                <ContactsAddress />
                            </li>
                        </ul>
                        <ContactsMap />
                    </div>
                </div>
            </div>
        </div>
    );
}
