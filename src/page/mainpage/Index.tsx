import React from 'react';
import Section1 from "./Section1"
import Section2 from "./Section2"
import Section3 from "./Section3"
import Section4 from "./Section4"
import Section5 from "./Section5"
import Section6 from "./Section6"

import {AllData} from '../../types/common'

interface IndexProps {
    id: string;
    allData: AllData;
}

const Index: React.FC<IndexProps>  = ({id,  allData}) => {
    return (
        <main id={id} className='md:pt-[5rem]'>
            <Section1/>
            <Section2/>
            <Section3 tabData = {allData.mainTabMenu}/>
            <Section4/>
            <Section5/>
            <Section6/>
        </main>
    );
};

export default Index;