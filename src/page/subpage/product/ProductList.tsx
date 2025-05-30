import React from 'react';

const ProductList:React.FC<{ tab: string }>  = ({tab}) => {
    return (
        <div>
            {tab}
        </div>
    );
};

export default ProductList;