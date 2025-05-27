import React from 'react';
import Section1 from "./Section1"
import Section2 from "./Section2"

const Index: React.FC<{ id: string }>  = ({id}) => {
    return (
        <main id={id} className='md:pt-[5rem]'>
            <Section1/>
            <Section2/>
        </main>
    );
};

export default Index;