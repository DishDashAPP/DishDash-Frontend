import {ReactNode} from "react";
import Header from "@modules/MainHeader/Header";
import BottomNavigation from "@modules/BottomNavigation/BottomNavigation";

function PanelLayout2({children}: { children: ReactNode }) {
    return (
        <div className="mainLayout layoutMinHeight bg-white mx-auto">
            <Header userType="customer"/>
            <div className="mx-auto container flex flex-1 w-full pt-[56px] pb-[77px]">
                {children}
            </div>
            <BottomNavigation userType="customer"/>
        </div>
    )
}

export default PanelLayout2