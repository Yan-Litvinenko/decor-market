import ContactsPhone from '@/components/contactsPhone/ContactsPhone';
import HeaderFavorite from '@/components/headerFavorite/HeaderFavorite';
import HeaderShopping from '@/components/headerShopping/HeaderShopping';

export default function HeaderAdditionalLinks(): React.JSX.Element {
    return (
        <div className="header__additional-links">
            <ContactsPhone />
            <HeaderShopping />
            <HeaderFavorite />
        </div>
    );
}
