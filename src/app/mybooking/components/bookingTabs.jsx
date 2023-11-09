import React, { useState } from 'react';

const TabComponent = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    
    console.log(`Clicked tab: ${tab}`);
  };

  return (
    <div className='m-5'>
        <div className="grid grid-cols-4 bg-slate-100 rounded-md p-2 justify-items-center">
            <div
            className="border"
            onClick={() => handleTabClick('tab1')}
            >
            <h1>All</h1>
            </div>
            <div
            className="border"
            onClick={() => handleTabClick('tab2')}
            >
            <h1>Active</h1>
            </div>
            <div
            className="border"
            onClick={() => handleTabClick('tab3')}
            >
            <h1>Completed</h1>
            </div>
            <div
            className="border"
            onClick={() => handleTabClick('tab4')}
            >
            <h1>Cancelled</h1>
            </div>
        </div>
      {activeTab === 'tab1' && <div>Content for Tab 1</div>}
      {activeTab === 'tab2' && <div>Content for Tab 2</div>}
    </div>
  );
};

export default TabComponent;
