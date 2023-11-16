import React, { useState } from 'react';

const Tabs = ({ children }) => {
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleClick = (e, newActiveTab) => {
    e.preventDefault();
    setActiveTab(newActiveTab);
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {children.map((child) => (
        <button
          key={child.props.label}
          className={`${
            activeTab === child.props.label
              ? 'bg-rb-green text-white'
              : 'bg-white text-gray-700'
          } py-2 px-4 rounded-lg`}
          onClick={(e) => handleClick(e, child.props.label)}
        >
          {child.props.label}
        </button>
      ))}
    </div>
  );
};

const Tab = ({ label, children }) => {
  return <div label={label}>{children}</div>;
};

const TabComponent = () => {
    return (
      <Tabs>
        <Tab label="All">All content goes here</Tab>
        <Tab label="Active">Active content goes here</Tab>
        <Tab label="Completed">Completed content goes here</Tab>
        <Tab label="Cancelled">Cancelled content goes here</Tab>
      </Tabs>
    );
  };

export default TabComponent;
