import React, {useEffect} from 'react';
import SubLayout from '../../layout/sub/SubLayout';
import TripRoute from './tripRoute/TripRoute';
import TripTalk from './tripTalk/TripTalk';
import TripterEvent from './tripEvent/TripterEvent';
import List from './bbs/List';
import Service from './service/Service';
import { useParams } from 'react-router-dom';



const SubContents: React.FC<{ id: string }>= ({id}) => {
    const { tab = "" } = useParams<{ tab?: string }>();

    const tabToTransIdMap: Record<string, string> = {
      findFriend: "tripTalk",
      findPlan: "tripTalk",
      ask: "service",
    };
    
    const transId = tabToTransIdMap[tab] ?? id;

    const ComponentMap: Record<string, JSX.Element> = {
      tripRoute: <TripRoute tab={tab}/>,
      tripTalk: <TripTalk />,
      service: <Service />,
      bbs: <List />,
      event: <TripterEvent />
    };
    
    useEffect(() => {
      console.log(`SubContents mounted with id: ${id}`);
    }, [id]);
  
    return (
      <SubLayout id={transId} tab={tab}>
        <section id={id}>
          {ComponentMap[id] ?? <TripRoute tab={tab}/>}
        </section>
      </SubLayout>
    );
  };

export default SubContents;
