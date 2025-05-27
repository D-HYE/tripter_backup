import React from 'react';
import SubLayout from '../../layout/sub/SubLayout';

const TripRoute: React.FC<{ id: string }>= ({id}) => {
    return (
        <SubLayout id={id}>
            <section id={id}>
                {id}
            </section>
        </SubLayout>
    );
};

export default TripRoute;