import React, {useEffect} from 'react';
import SubLayout from '../../layout/sub/SubLayout';
import TripRoute from './TripRoute';
import TripTalk from './TripTalk';
import TripterEvent from './TripterEvent';



const SubContents: React.FC<{ id: string }>= ({id}) => {
    useEffect(() => {
      
    }, [id]);
  
    return (
      <SubLayout id={id}>
        <section id={id}>
            {
            id === 'tripRoute' ? <TripRoute /> : id === 'tripTalk' ? <TripTalk /> : <TripterEvent />
            }
        </section>
      </SubLayout>
    );
  };

export default SubContents;
