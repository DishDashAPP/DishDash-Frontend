'use client'

import {FC} from "react";
import Button from "@components/Button/Button";
import Image, {StaticImageData} from "next/image";
import MENU from "@public/menu-book.svg";
import SKILLET from "@public/skillet.svg";
import LOGOUT from "@public/logout.svg";
import COOKING from "@public/cooking.svg";
import {useRouter} from "next/navigation";

type dashboardButton = {
    title: string,
    icon: StaticImageData,
    link: string
}

const dashboardButtons: dashboardButton[] = [
    {
        title: 'سفارش‌گیری',
        icon: MENU,
        link: '/restaurant/orders?type=active'
    },
    {
        title: 'ویرایش منو',
        icon: SKILLET,
        link: '/restaurant/menu'
    }
]

const RestaurantDashboard: FC = () => {

    const router = useRouter()

    const handleLink = (link: string) => () => {
        router.push(link)
    }

    const handleLogout = () => {
        console.log('logout')
    }

    return (
        <div className="flex flex-col items-center w-full">
            <h1 className="text-xl text-center font-medium mt-6 mb-10">داشبورد</h1>
            <div className="flex flex-col w-full">
                {dashboardButtons.map((button, index) => (
                    <Button key={index} variant="secondary" className="mb-6" onClick={handleLink(button.link)}>
                        <div className="flex items-center justify-center">
                            <Image src={button.icon} alt={button.title} className="ml-1" />
                            {button.title}
                        </div>
                    </Button>
                ))}
                <Button variant="outline" onClick={handleLogout}>
                    <div className="flex items-center justify-center">
                        <Image src={LOGOUT} alt="logput" className="ml-1"/>
                        خروج
                    </div>
                </Button>
            </div>
            <Image src={COOKING} alt="cooking" className="mt-6" />
        </div>
    );
}

export default RestaurantDashboard;