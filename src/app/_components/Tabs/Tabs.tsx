import React, { useState, ReactNode, ReactElement } from 'react';

interface TabsProps {
    children: ReactElement<TabProps>[];
}

interface TabProps {
    isActive?: boolean;
    onClick?: () => void;
    children: ReactNode;
    label: string;
}

const Tabs: React.FC<TabsProps> = ({ children }) => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <div>
            <div className="flex justify-between">
                {React.Children.map(children, (child, index) => {
                    if (React.isValidElement(child)) {
                        return React.cloneElement(child, {
                            isActive: activeTab === index,
                            onClick: () => handleTabClick(index),
                        } as Partial<TabProps>);
                    }
                    return null;
                })}
            </div>
            <div>
                {React.Children.map(children, (child, index) => {
                    if (React.isValidElement(child) && activeTab === index) {
                        return child.props.children;
                    }
                    return null;
                })}
            </div>
        </div>
    );
};

export default Tabs;
