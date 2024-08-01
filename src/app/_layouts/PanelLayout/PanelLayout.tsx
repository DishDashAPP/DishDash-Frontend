'use client'

import {ReactNode} from "react";
import Header from "@modules/MainHeader/Header";
import BottomNavigation from "@modules/BottomNavigation/BottomNavigation";
import {usePathname} from "next/navigation";
import {UserType} from "@utils/types";
import classJoin from "@utils/classJoin";

interface PanelLayoutProps {
    children: ReactNode;
}

const PanelLayout = ({children}: PanelLayoutProps) => {
    const pathname = usePathname();
    const currentUserType = pathname.split('/')[1].toUpperCase();

    const userType: UserType = (() => {
        switch (currentUserType) {
            case "CUSTOMER":
                return 'CUSTOMER';
            case "RESTAURANT":
                return 'RESTAURANT_OWNER';
            case "COURIER":
                return 'DELIVERY_PERSON';
            default:
                return '' as UserType;
        }
    })();

    return (
        <div className="mainLayout layoutMinHeight bg-white mx-auto">
            <Header userType={userType}/>
            <div className={classJoin([
                "mx-auto container flex flex-1 w-full pt-[56px] pb-[77px]",
                userType === "CUSTOMER" ? "" : "px-8"
            ])}>
                {children}
            </div>
            <BottomNavigation userType={userType}/>
        </div>
    );
}

export default PanelLayout;
