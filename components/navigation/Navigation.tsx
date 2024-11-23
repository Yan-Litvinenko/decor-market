'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { RootPage } from '@/types/client/index.interface';

type NavigationItem = {
    key: string;
    title: string;
    href: RootPage;
    ariaLabel: string;
};

export default function Navigation(): React.JSX.Element {
    const pathname: string = usePathname();
    const pages: NavigationItem[] = [
        {
            key: 'navigation-main',
            title: 'Главная',
            href: '/',
            ariaLabel: 'Главная страница',
        },
        {
            key: 'navigation-cornice',
            title: 'Карнизы',
            href: '/cornices',
            ariaLabel: 'Карнизы',
        },
        {
            key: 'navigation-plinth',
            title: 'Плинтуса',
            href: '/plinths',
            ariaLabel: 'Плинтус',
        },
        {
            key: 'navigation-doorstep',
            title: 'Пороги',
            href: '/thresholds',
            ariaLabel: 'Пороги',
        },
        {
            key: 'navigation-contacts',
            title: 'Контакты',
            href: '/contacts',
            ariaLabel: 'Контакты',
        },
        {
            key: 'navigation-about',
            title: 'О нас',
            href: '/about',
            ariaLabel: 'О нас',
        },
    ];

    return (
        <nav className="nav" aria-label="Меню">
            <ul className="nav__list" aria-label="Список пунктов меню">
                {pages.map(({ title, href, key, ariaLabel }) => {
                    return (
                        <li className="nav__item" key={key} aria-label={ariaLabel}>
                            <Link
                                className={`nav__link ${pathname === href ? 'nav__link-active' : ''}`}
                                href={href}
                                aria-current="page"
                            >
                                {title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
