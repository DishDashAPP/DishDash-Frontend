import React, { ReactNode } from 'react';
import classJoin from "@utils/classJoin";

interface TabProps {
    isActive?: boolean;
    onClick?: () => void;
    children: ReactNode;
    label: string;
}

const Tab: React.FC<TabProps> = ({ isActive, onClick, children, label }) => {
    return (
        <div
            onClick={onClick}
            className={classJoin([
                'cursor-pointer p-4 flex-1 text-center',
                isActive ? 'bg-white text-blue-500 rounded-t-lg' : 'text-gray-500'
            ])}
        >
            {label}
        </div>
    );
};

export default Tab;
