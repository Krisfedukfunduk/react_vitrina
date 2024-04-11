import {GoodsItem} from "./GoodsItem";

function GoodsList(props) {
    const { goods = [], addToBasket = Function.prototype} = props;

    if (!goods.length) {
        return <h3>Sorry! We can't found something according to your request </h3>;
    }

    return (
        <div className="goods">
            {goods.map((item) => (
                <GoodsItem key={item.imdbID}{...item} addToBasket={addToBasket} />
            ))}
        </div>
    );
}

export { GoodsList };