import React from 'react';

import classNames from 'classnames';

function ButtonCart({ className, children }) {
    return (
        <button className={classNames('button', className)}>
            {children}
        </button>
    );
}

export default ButtonCart;