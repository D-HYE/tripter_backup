import React from 'react';
import MyFeelter from './MyFeelter';
import PlanMaker from './PlanMaker';

const TripRoute:React.FC<{ tab: string }> = ({tab}) => {
    
    return (
        <div>
            {tab === 'myFeelter' ? <MyFeelter/> : <PlanMaker/>}
            
        </div>
    );
};

export default TripRoute;