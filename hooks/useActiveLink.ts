import { usePathname } from 'next/navigation';
import type { RootPage } from '@/types/client/index.interface';

type UseActiveLink = (href: RootPage) => boolean;

export default function useActiveLink(): UseActiveLink {
    const pathname: string = usePathname();

    const isActiveLink = (href: RootPage): boolean => {
        if (href === '/') return pathname === href;
        return pathname.startsWith(href);
    };

    return isActiveLink;
}
