import { MenuItem } from "@utils/types";
import { FC } from "react";
import MenuCard from "@modules/Restaurant/Menu/MenuCard";

type MenuItemsProps = {
  menuItems: MenuItem[];
  onDelete: (id: number) => void;
};

const MenuItems: FC<MenuItemsProps> = ({ menuItems, onDelete }) => {
  return (
    <div className="flex flex-col gap-y-4 pb-4 w-full">
      {menuItems.map((item) => (
        <MenuCard key={item.id} {...item} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default MenuItems;
