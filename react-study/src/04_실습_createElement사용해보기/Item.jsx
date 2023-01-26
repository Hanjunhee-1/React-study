import React from "react";

function Item(props) {
    return (
        React.createElement(
            "div",
            null,
            [
                React.createElement(
                    "h1",
                    null,
                    `이 상품의 이름은 ${props.name} 입니다.`
                ),
                React.createElement(
                    "h2",
                    null,
                    `가격은 ${props.price}원 입니다.`
                )
            ]
        )
    )
}

export default Item;