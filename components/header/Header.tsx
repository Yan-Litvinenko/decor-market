import Link from 'next/link';
import ContactsPhone from '../contactsPhone/ContactsPhone';
import Navigation from '../navigation/Navigation';
import { ShoppingCartOutlined, SunOutlined, MenuOutlined } from '@ant-design/icons';

export default function Header(): React.JSX.Element {
    return (
        <header className="header" aria-label="Шапка сайта">
            <div className="container">
                <div className="header__inner">
                    <h2 className="visually-hidden">Меню</h2>
                    <button className="header__burger" type="button" aria-label="Открыть меню" aria-expanded>
                        <MenuOutlined />
                    </button>

                    <Navigation />

                    <div className="header__contacts-shopping">
                        <ContactsPhone />
                        <div className="header__shopping">
                            <span>Мой заказ</span>
                            <ShoppingCartOutlined className="header__shopping-icon" />
                            <Link className="header__shopping-link" href="/" aria-label="Перейти в корзину" />
                        </div>
                        <div className="header__theme">
                            <SunOutlined className="header__theme-icon" aria-label="Переключить тему" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
