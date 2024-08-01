import { MenuItem } from "@utils/types";
import { FC, useState } from "react";
import Image from "next/image";
import DELETE from "@public/delete.svg";
import FAST_FOOD from "@public/fastfood.svg";
import Badge from "@components/Badge/Badge";
import Button from "@components/Button/Button";
import EDIT from "@public/edit.svg";
import BottomSheet from "@components/BottomSheet/BottomSheet";
import NewFoodItem from "@modules/Restaurant/Menu/NewFoodItem";

const MenuCard: FC<MenuItem> = (props) => {
  const { id, title, description, price, isAvailable, category } = props;

  const [isBottomSheetOpen, setBottomSheetOpen] = useState(false);

  return (
    <div className="flex flex-col border border-gray-border rounded-lg p-4">
      <div className="flex items-start justify-between">
        <div className="flex items-start">
          <div className="flex items-center justify-center min-w-[90px] min-h-[90px] rounded bg-gray-card_border">
            <Image src={FAST_FOOD} alt="fast food" />
          </div>
          <div className="flex flex-col justify-start mr-4 ml-2">
            <span className="text-sm font-medium">{title}</span>
            <p className="text-xs mt-2">{description}</p>
          </div>
        </div>
        <div>
          <Image
            src={DELETE}
            alt="delete"
            width={24}
            height={24}
            className="min-w-[24px] min-h-[24px]"
          />
        </div>
      </div>
      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center">
          <span className="text-sm font-medium">{price}</span>
          <span className="text-xs mr-1">تومان</span>
        </div>
        <Badge text="موجود" color="green" />
      </div>
      <Button
        variant="secondary"
        className="py-3 text-base mt-4"
        onClick={() => setBottomSheetOpen(true)}
      >
        <div className="flex items-center justify-center">
          <Image src={EDIT} alt="edit" className="ml-1" />
          ویرایش محصول
        </div>
      </Button>
      <BottomSheet
        isOpen={isBottomSheetOpen}
        onClose={() => setBottomSheetOpen(false)}
      >
        <NewFoodItem mode="edit" />
      </BottomSheet>
    </div>
  );
};

export default MenuCard;
