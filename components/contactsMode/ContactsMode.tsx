import { CONTACTS } from '@/constants/contacts';

export default function ContactsMode(): React.JSX.Element {
    const { time, dayOff } = CONTACTS.mode;

    return (
        <div className="contacts-mode">
            <time aria-label={time}>{time}</time>
            <span aria-label={dayOff}> ({dayOff})</span>
        </div>
    );
}
