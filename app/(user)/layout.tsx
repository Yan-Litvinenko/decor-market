import React from 'react';
import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export default function UserLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
    return (
        <>
            <Header />
            <main>
                <h1 className="visually-hidden">Сайт для заказа рольштор, плинтуса, порогов, карнизов</h1>
                {children}
            </main>
            <Footer />
        </>
    );
}
