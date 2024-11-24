import Link from 'next/link';
import { ShoppingCartOutlined } from '@ant-design/icons';

export default function HeaderShopping(): React.JSX.Element {
    return (
        <div className="header__shopping">
            <span>Заказ</span>
            <ShoppingCartOutlined className="header__shopping-icon" />
            <Link className="header__shopping-link" href="/" aria-label="Перейти в корзину" />
        </div>
    );
}
