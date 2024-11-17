import Link from 'next/link';
import ContactsPhone from '../contactsPhone/ContactsPhone';
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

                    <nav className={`header__nav ${false ? 'header__nav_active' : ''}`} aria-label="Меню">
                        <ul className="header__nav-list" aria-label="Список пунктов меню">
                            <li className="header__nav-item" aria-label="Главная страница">
                                <Link className="header__nav-link" href="/" aria-current="page">
                                    Главная
                                </Link>
                            </li>
                            <li className="header__nav-item" aria-label="Карнизы">
                                <Link className="header__nav-link" href="/" aria-current="page">
                                    Карнизы
                                </Link>
                            </li>
                            <li className="header__nav-item" aria-label="Рольшторы">
                                <Link className="header__nav-link" href="/" aria-current="page">
                                    Рольшторы
                                </Link>
                            </li>
                            <li className="header__nav-item" aria-label="Плинтус">
                                <Link className="header__nav-link" href="/" aria-current="page">
                                    Плинтус
                                </Link>
                            </li>
                            <li className="header__nav-item" aria-label="Пороги">
                                <Link className="header__nav-link" href="/" aria-current="page">
                                    Пороги
                                </Link>
                            </li>
                            <li className="header__nav-item" aria-label="Контакты">
                                <Link className="header__nav-link" href="/contacts" aria-current="page">
                                    Контакты
                                </Link>
                            </li>
                            <li className="header__nav-item" aria-label="О нас">
                                <Link className="header__nav-link" href="/about" aria-current="page">
                                    О нас
                                </Link>
                            </li>
                        </ul>
                    </nav>

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
