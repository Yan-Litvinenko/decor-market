import { Hourglass } from 'react-loader-spinner';

export default function Loader(): React.JSX.Element {
    return (
        <div className="loader">
            <Hourglass
                visible
                height="100"
                width="100"
                colors={['#7030a0', '#ff99ff']}
                ariaLabel="rings-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
}
