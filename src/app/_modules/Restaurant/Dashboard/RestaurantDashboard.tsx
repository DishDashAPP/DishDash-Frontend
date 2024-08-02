"use client";

import { FC } from "react";
import Button from "@components/Button/Button";
import Image, { StaticImageData } from "next/image";
import MENU from "@public/menu-book.svg";
import SKILLET from "@public/skillet.svg";
import LOGOUT from "@public/logout.svg";
import COOKING from "@public/cooking.svg";
import { useRouter } from "next/navigation";
import useAuthStore from "@store/authStore";
import { LOGIN, RESTAURANT_MENU, RESTAURANT_ORDERS } from "@utils/links";
import { logoutReq } from "@api/services/authService";

type dashboardButton = {
  title: string;
  icon: StaticImageData;
  link: string;
};

const dashboardButtons: dashboardButton[] = [
  {
    title: "سفارش‌گیری",
    icon: MENU,
    link: RESTAURANT_ORDERS("active"),
  },
  {
    title: "ویرایش منو",
    icon: SKILLET,
    link: RESTAURANT_MENU,
  },
];

const RestaurantDashboard: FC = () => {
  const { logout } = useAuthStore();
  const router = useRouter();

  const handleLink = (link: string) => () => {
    router.push(link);
  };

  const handleLogout = async () => {
    const res = await logoutReq();
    if (res.isSuccess) {
      logout();
      router.push(LOGIN);
    }
  };

  return (
    <div className="flex flex-col items-center w-full">
      <h1 className="text-xl text-center font-medium mt-6 mb-10">داشبورد</h1>
      <div className="flex flex-col w-full">
        {dashboardButtons.map((button, index) => (
          <Button
            key={index}
            variant="secondary"
            className="mb-6"
            onClick={handleLink(button.link)}
          >
            <div className="flex items-center justify-center">
              <Image src={button.icon} alt={button.title} className="ml-1" />
              {button.title}
            </div>
          </Button>
        ))}
        <Button variant="outline" onClick={handleLogout}>
          <div className="flex items-center justify-center">
            <Image src={LOGOUT} alt="logout" className="ml-1" />
            خروج
          </div>
        </Button>
      </div>
      <Image src={COOKING} alt="cooking" className="mt-6" />
    </div>
  );
};

export default RestaurantDashboard;
