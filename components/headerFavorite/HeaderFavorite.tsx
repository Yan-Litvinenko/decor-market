'use client';

import Link from 'next/link';
import useActiveLink from '@/hooks/useActiveLink';
import { useAppSelector } from '@/hooks/useAppRedux';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import type { RootState } from '@/redux/store';
import type { AllProducts } from '@/types/client/product.interface';

export default function HeaderFavorite(): React.JSX.Element {
    const isActiveLink = useActiveLink();
    const favoriteList = useAppSelector((state: RootState) => state.favorite.favoriteList) as AllProducts[];

    return (
        <div className="header__favorite">
            <div className="header__favorite-count" data-count={favoriteList.length} />
            {isActiveLink('/favorite') ? (
                <HeartFilled className="header__favorite-icon" />
            ) : (
                <HeartOutlined className="header__favorite-icon" />
            )}
            <Link className="header__favorite-link" href="/favorite" aria-label="Перейти в избранное" />
        </div>
    );
}
