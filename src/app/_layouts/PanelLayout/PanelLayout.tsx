'use client'

import {ReactNode} from "react";
import Header from "@modules/MainHeader/Header";
import BottomNavigation from "@modules/BottomNavigation/BottomNavigation";
import {usePathname} from "next/navigation";

function PanelLayout({children}: { children: ReactNode }) {
    const pathname = usePathname();
    const currentUserType = pathname.split('/')[1];

    return (
        <div className="mainLayout layoutMinHeight bg-white mx-auto">
            <Header userType={currentUserType}/>
            <div className="mx-auto px-8 container flex flex-1 w-full pt-[56px] pb-[77px]">
                {children}
            </div>
            <BottomNavigation userType={currentUserType}/>
        </div>
    )
}

export default PanelLayout