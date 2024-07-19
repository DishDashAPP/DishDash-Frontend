import {ReactNode} from "react";
import Header from "@modules/MainHeader/Header";
import BottomNavigation from "@modules/BottomNavigation/BottomNavigation";

function PanelLayout({children}: { children: ReactNode }) {
    return (
        <div className="mainLayout layoutMinHeight bg-white mx-auto">
            <Header userType="restaurant"/>
            <div className="mx-auto px-8 container flex flex-1 w-full pt-[56px] pb-[77px]">
                {children}
            </div>
            <BottomNavigation userType="restaurant"/>
        </div>
    )
}

export default PanelLayout