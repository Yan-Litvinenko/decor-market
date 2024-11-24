import Navigation from '@/components/navigation/Navigation';
import HeaderAdditionalLinks from '@/components/headerAdditionalLinks/HeaderIcons';
import { MenuOutlined } from '@ant-design/icons';

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
                    <HeaderAdditionalLinks />
                </div>
            </div>
        </header>
    );
}
