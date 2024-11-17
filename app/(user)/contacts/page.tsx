import ContactsMap from '@/components/contactsMap/ContactsMap';

export default function Contacts(): React.JSX.Element {
    return (
        <div className="contacts">
            <div className="container">
                <div className="contacts__inner">
                    <h1 className="contacts__title title" aria-label="Контакты">
                        Контакты
                    </h1>
                    <ContactsMap />
                </div>
            </div>
        </div>
    );
}
