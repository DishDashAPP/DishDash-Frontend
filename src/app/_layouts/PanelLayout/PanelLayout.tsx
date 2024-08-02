"use client";

import { FC, ReactNode, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Header from "@modules/MainHeader/Header";
import BottomNavigation from "@modules/BottomNavigation/BottomNavigation";
import { UserType } from "@utils/types";
import classJoin from "@utils/classJoin";
import useAuthStore from "@store/authStore";
import { LOGIN } from "@utils/links";

interface PanelLayoutProps {
  children: ReactNode;
}

const PanelLayout: FC<PanelLayoutProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const currentUserType = pathname.split("/")[1].toUpperCase();
  const { token, isLoggedIn } = useAuthStore();

  const userType: UserType = (() => {
    switch (currentUserType) {
      case "CUSTOMER":
        return "CUSTOMER";
      case "RESTAURANT":
        return "RESTAURANT_OWNER";
      case "COURIER":
        return "DELIVERY_PERSON";
      default:
        return "" as UserType;
    }
  })();

  useEffect(() => {
    if (!isLoggedIn) {
      router.push(LOGIN);
    }
  }, [isLoggedIn, router]);

  return (
    <div className="mainLayout layoutMinHeight bg-white mx-auto">
      <Header userType={userType} />
      <div
        className={classJoin([
          "mx-auto container flex flex-1 w-full pt-[56px] pb-[77px]",
          userType === "CUSTOMER" ? "" : "px-8",
        ])}
      >
        {children}
      </div>
      <BottomNavigation userType={userType} />
    </div>
  );
};

export default PanelLayout;
