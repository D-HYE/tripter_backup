import React from 'react';
import Section1 from "./Section1"

const Index: React.FC<{ id: string }>  = ({id}) => {
    return (
        <main id={id}>
            <Section1/>
        </main>
    );
};

export default Index;