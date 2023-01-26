import React from "react";
import Item from "./Item";

function Market(props) {
    return (
        React.createElement(
            "div",
            null,
            [
                React.createElement(
                    "h1",
                    null,
                    "이 아래로는 createElement() 로 생성한 element 입니다."
                ),
                React.createElement(
                    Item,
                    {
                        name: "Galaxy Buds Pro",
                        price: 230000
                    },
                    null
                ),
                React.createElement(
                    Item,
                    {
                        name: "Lenovo 노트북",
                        price: 1000000
                    },
                    null
                )
            ]
        )
    )
}

export default Market;