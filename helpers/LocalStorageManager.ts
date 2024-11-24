import IS_CLIENT from '@/constants/isClient';
import type { AllProducts } from '@/types/client/product.interface';

class LocalStorageManager {
    private static readonly FAVORITE_LIST_KEY: string = process.env.NEXT_PUBLIC_LOCAL_STORAGE_FAVORITE_KEY!;

    static getFavoriteList(): AllProducts[] {
        if (!IS_CLIENT) return [];

        try {
            return JSON.parse(localStorage.getItem(this.FAVORITE_LIST_KEY) || '[]');
        } catch (error) {
            throw new Error(`Error: ${error}. Failed to get favorite list from local storage`);
        }
    }

    static setFavoriteList(favoriteList: AllProducts[]): void {
        if (!IS_CLIENT) return;

        try {
            localStorage.setItem(this.FAVORITE_LIST_KEY, JSON.stringify(favoriteList));
        } catch (error) {
            throw new Error(`Error: ${error}. Failed to set favorite list to local storage`);
        }
    }
}

const localStorageManager: LocalStorageManager = new LocalStorageManager();

export { localStorageManager, LocalStorageManager };
