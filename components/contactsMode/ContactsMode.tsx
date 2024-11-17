export default function ContactsMode(): React.JSX.Element {
    return (
        <div className="contacts-mode">
            <time aria-label="Время работы с 9:00 до 15:00 (ПН выходной)">c 9:00 до 15:00</time>
            <span aria-label="ПН выходной"> (ПН выходной)</span>
        </div>
    );
}
