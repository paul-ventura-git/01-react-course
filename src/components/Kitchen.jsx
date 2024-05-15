import React from 'react'

function Kitchen(props) {
    const cookware = props.cookware;
    return (
        <div>
            <h1>Kitchen</h1>
            {
                cookware.length > 0 &&
                <h2>
                    You Have { cookware.length } utensils in your kitchen.
                </h2>
            }
        </div>
    )
}

export default Kitchen