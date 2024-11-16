import React from 'react';
import Link from 'next/link';
import { PhoneOutlined, ShoppingCartOutlined, SunOutlined, MenuOutlined } from '@ant-design/icons';

export default function UserLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="header__inner">
                        <button className="header__burger">
                            <MenuOutlined />
                        </button>

                        <nav className={`header__nav ${false ? 'header__nav_active' : ''}`}>
                            <ul className="header__nav-list">
                                <li className="header__nav-item">
                                    <Link className="header__nav-link" href="#">
                                        Главная
                                    </Link>
                                </li>
                                <li className="header__nav-item">
                                    <Link className="header__nav-link" href="#">
                                        Карнизы
                                    </Link>
                                </li>
                                <li className="header__nav-item">
                                    <Link className="header__nav-link" href="#">
                                        Рольшторы
                                    </Link>
                                </li>
                                <li className="header__nav-item">
                                    <Link className="header__nav-link" href="#">
                                        Плинтус
                                    </Link>
                                </li>
                                <li className="header__nav-item">
                                    <Link className="header__nav-link" href="#">
                                        Пороги
                                    </Link>
                                </li>
                                <li className="header__nav-item">
                                    <Link className="header__nav-link" href="#">
                                        Контакты
                                    </Link>
                                </li>
                                <li className="header__nav-item">
                                    <Link className="header__nav-link" href="#">
                                        О нас
                                    </Link>
                                </li>
                            </ul>
                        </nav>

                        <div className="header__contacts-shopping">
                            <div className="header__contacts">
                                <PhoneOutlined className="header__contacts-icon" />
                                +375 (29) 624-30-85
                                <Link className="header__contacts-link" href="tel:+79219219219" />
                            </div>
                            <div className="header__shopping">
                                <span>Мой заказ</span>
                                <ShoppingCartOutlined className="header__shopping-icon" />
                                <Link className="header__shopping-link" href="/" />
                            </div>
                            <div className="header__theme">
                                <SunOutlined className="header__theme-icon" />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <main>{children}</main>
        </>
    );
}
