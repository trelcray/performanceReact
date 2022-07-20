import { memo } from "react";

type IitemProps = {
    title: string;
    onAddToWishList: (item: string) => void;
    countItemsWithOne: {
        count: number;
    };
}

function ItemComponent(props: IitemProps) {
    return (
    <li>{props.title} - {props.countItemsWithOne.count}
    <button onClick={() => props.onAddToWishList(props.title)}>
        Add to wishlist
    </button></li>)
}
export const Item = memo(ItemComponent);