'use client'

import {ReactNode} from "react";
import Header from "@modules/MainHeader/Header";
import BottomNavigation from "@modules/BottomNavigation/BottomNavigation";
import {usePathname} from "next/navigation";
import {UserType} from "@utils/types";
import classJoin from "@utils/classJoin";

function PanelLayout({children}: { children: ReactNode }) {
    const pathname = usePathname();
    const currentUserType = pathname.split('/')[1] as UserType;

    return (
        <div className="mainLayout layoutMinHeight bg-white mx-auto">
            <Header userType={currentUserType}/>
            <div className={classJoin([
                "mx-auto container flex flex-1 w-full pt-[56px] pb-[77px]",
                currentUserType == "customer" ? "" : "px-8"
            ])}>
                {children}
            </div>
            <BottomNavigation userType={currentUserType}/>
        </div>
    )
}

export default PanelLayout