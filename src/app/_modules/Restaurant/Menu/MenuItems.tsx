import {MenuItem} from "@utils/types";
import {FC} from "react";
import MenuCard from "@modules/Restaurant/Menu/MenuCard";

type MenuItemsProps = {
    menuItems: MenuItem[]
}

const MenuItems: FC<MenuItemsProps> = ({menuItems}) => {
    return (
       <div className="flex flex-col gap-y-4 pb-4">
              {menuItems.map((item) => (
                <MenuCard key={item.id} {...item}/>
              ))}
       </div>
    )
}

export default MenuItems;