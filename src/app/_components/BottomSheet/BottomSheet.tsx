// components/BottomSheet.tsx

import React, { ReactNode } from 'react';
import { Drawer } from 'vaul';

interface BottomSheetProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    children: ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({ open, onOpenChange, children }) => {
    return (
        <Drawer.Root open={open} onOpenChange={onOpenChange}>
            <Drawer.Trigger asChild>
                <button style={{ display: 'none' }}>Open Drawer</button>
            </Drawer.Trigger>
            <Drawer.Portal>
                <Drawer.Content className="bg-white p-4 rounded-t-lg shadow-lg fixed bottom-0 left-0 right-0 z-50 transition-transform transform translate-y-0">
                    <Drawer.Handle className="bg-gray-border w-full" />
                    <div className="p-2">
                        {children}
                    </div>
                </Drawer.Content>
            </Drawer.Portal>
        </Drawer.Root>
    );
};

export default BottomSheet;
