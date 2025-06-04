import React from 'react';
import { Link } from 'react-router-dom';
import yujin from "../scss/yujin.quick.module.scss"


interface QuickProps {
    id: string;
}

const Quick: React.FC<QuickProps> = ({ id }) => {
    return (
        <ul id={id} className={yujin.quick}>
            <li><Link to="#none"><span>MY</span>FEEL:TER</Link></li>
            <li><Link to="#none">큐알이미지</Link></li>
            <li><Link to="#none">TOP</Link></li>
        </ul>
    );
};
export default Quick;