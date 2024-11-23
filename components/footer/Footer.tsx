import FooterContacts from '@/components/footerContacts/FooterContacts';
import FooterDisclaimer from '@/components/footerDisclaimer/FooterDisclaimer';
import FooterInformation from '@/components/footerInformation/FooterInformation';

export default function Footer(): React.JSX.Element {
    return (
        <footer className="footer" aria-label="Подвал сайта">
            <div className="container">
                <div className="footer__inner">
                    <FooterContacts />
                    <FooterDisclaimer />
                    <FooterInformation />
                </div>
            </div>
        </footer>
    );
}
