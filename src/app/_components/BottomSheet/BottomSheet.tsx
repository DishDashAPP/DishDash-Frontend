import React, { ReactNode } from "react";
import { Drawer } from "vaul";

interface BottomSheetProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const BottomSheet: React.FC<BottomSheetProps> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Drawer.Root
      open={isOpen}
      onOpenChange={(open) => {
        if (!open) {
          onClose();
        }
      }}
    >
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 z-[10000] bg-black/70" />
        <Drawer.Content className="bg-white p-4 rounded-t-lg fixed inset-x-0 bottom-0 z-[10000]">
          <Drawer.Handle className="bg-gray-border w-full" />
          <Drawer.Title></Drawer.Title>
          <div className="p-2">{children}</div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
};

export default BottomSheet;
