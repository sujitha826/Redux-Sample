import React from 'react';
import { useHistory } from "react-router-dom";

function Header() {
    const history = useHistory();

    function goto(path) {
        history.push(path);                       // Navigate to the path given with user-history saved to History stack as the new instance.
    }

    return (
        <div className='header-base'>
            <button onClick={() => goto("/")}>Product</button>
            <button onClick={() => goto("/mycart")}> My Cart</button>
        </div >
    )
}

export default Header;