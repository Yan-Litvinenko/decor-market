'use client';

import Link from 'next/link';
import useActiveLink from '@/hooks/useActiveLink';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';

export default function HeaderFavorite(): React.JSX.Element {
    const isActiveLink = useActiveLink();

    return (
        <div className="header__favorite">
            {isActiveLink('/favorite') ? (
                <HeartFilled className="header__favorite-icon" />
            ) : (
                <HeartOutlined className="header__favorite-icon" />
            )}
            <Link className="header__favorite-link" href="/favorite" aria-label="Перейти в избранное" />
        </div>
    );
}
