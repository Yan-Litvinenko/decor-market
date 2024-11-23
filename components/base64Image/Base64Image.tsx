type Base64ImageProps = {
    base64string: string;
    className: string;
    alt: string;
};

export default function Base64Image(props: Base64ImageProps): React.JSX.Element {
    const { base64string, alt, className } = props;
    const src: string = base64string.startsWith('data:image') ? base64string : `data:image/jpeg;base64,${base64string}`;

    return <img className={className} src={src} alt={alt} />;
}
