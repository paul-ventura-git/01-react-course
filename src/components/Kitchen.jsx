import React from 'react'

function Kitchen(props) {
    const cookware = props.cookware;
    return (
        <div>
            <h3>Kitchen</h3>
            {
                cookware.length > 0 &&
                <h4>
                    You Have { cookware.length } utensils in your kitchen.
                </h4>
            }
        </div>
    )
}

export default Kitchen