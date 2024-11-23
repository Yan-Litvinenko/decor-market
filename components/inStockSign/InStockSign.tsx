type InStockSignProps = {
    isInStock: boolean;
};

export default function InStockSign({ isInStock }: InStockSignProps) {
    return isInStock ? (
        <div className="in-stock-sign in-stock-sign--in-stock">В наличии</div>
    ) : (
        <div className="in-stock-sign in-stock-sign--not-in-stock">Нет в наличии</div>
    );
}
