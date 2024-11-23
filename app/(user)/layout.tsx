import Header from '@/components/header/Header';
import Footer from '@/components/footer/Footer';

export default function UserLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer />
        </>
    );
}
