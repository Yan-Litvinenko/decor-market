import { Circles } from 'react-loader-spinner';

export default function Loader(): React.JSX.Element {
    return (
        <div className="loader">
            <Circles
                visible={true}
                height="100"
                width="100"
                color="#4fa94d"
                ariaLabel="rings-loading"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
}
