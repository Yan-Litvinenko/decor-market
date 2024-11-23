import InStockSign from '../inStockSign/InStockSign';
import { HeartOutlined } from '@ant-design/icons';

type ProductControlsProps = {
    isInStock: boolean;
};

export default function ProductControls({ isInStock }: ProductControlsProps): React.JSX.Element {
    return (
        <div className="product-controls">
            <InStockSign isInStock={isInStock} />
            <HeartOutlined className="product-controls__heart" />
        </div>
    );
}
