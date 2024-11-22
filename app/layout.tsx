import '@/styles/index.scss';

export const metadata = {
    title: 'Next.js',
    description: 'Generated by Next.js',
};

export default function RootLayout({ children }: { children: React.ReactNode }): React.JSX.Element {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
