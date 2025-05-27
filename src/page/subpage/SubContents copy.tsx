import React, {useEffect, useState } from 'react';
import SubLayout from '../../layout/sub/SubLayout';


interface SubContentsProps {
  activeTab: string;
  setActiveTab: (activeTab: string) => void;
}

const TripRoute: React.FC<{ id: string }>= ({id}) => {
  

    const [activeTab, setActiveTab] = useState<string>(id);

    const state: SubContentsProps = {
      activeTab: activeTab,
      setActiveTab: (newValue: string) => setActiveTab(newValue),
    };

    useEffect(() => {
      state.setActiveTab(id);
    }, [id]);
  
    return (
      <SubLayout id={id}>
        <section id={id}>
          {activeTab}
        </section>
      </SubLayout>
    );
  };

export default TripRoute;
