import Link from 'next/link';

export default function FooterInformation(): React.JSX.Element {
    return (
        <article className="footer__information">
            <ul className="footer__information-list">
                <li className="footer__information-item" aria-label="Все права защищены">
                    &copy; Все права защищены, {new Date().getFullYear()}
                </li>
                <li className="footer__information-item">
                    <Link
                        className="footer__information-link"
                        href={'/privacy'}
                        aria-label="Пользовательское соглашение"
                    >
                        Пользовательское соглашение
                    </Link>
                </li>
            </ul>
        </article>
    );
}
