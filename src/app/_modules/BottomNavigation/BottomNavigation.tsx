'use client'

import {UserType} from "@utils/types";
import {FC} from "react";
import {usePathname} from "next/navigation";
import Image, {StaticImageData} from "next/image";
import PERSON from "@public/person.svg";
import LIST from "@public/list.svg";
import HOME from "@public/home.svg";
import Link from "next/link";
import classJoin from "@utils/classJoin";

type BottomNavigationProps = {
    userType: UserType
}

type TNavigationItem = {
    name: string;
    icon: StaticImageData;
    isActive?: boolean;
    route: {
        customer: string;
        restaurant: string;
        courier: string;
    }
}
const BottomNavigation: FC<BottomNavigationProps> = ({userType}) => {
    const pathname = usePathname();

    const isDashboard = pathname === {
        customer: '/customer',
        restaurant: '/restaurant',
        courier: '/courier',
    }[userType];

    const isProfile = pathname.includes('profile');

    const isOrders = pathname.includes('orders');

    const navigationItems: TNavigationItem[] = [
        {
            name: 'حساب من',
            icon: PERSON,
            isActive: isProfile,
            route: {
                customer: '/customer/profile',
                restaurant: '/restaurant/profile',
                courier: '/courier/profile',
            }
        },
        {
            name: 'خانه',
            icon: HOME,
            isActive: isDashboard,
            route: {
                customer: '/customer',
                restaurant: '/restaurant',
                courier: '/courier',
            }
        },
        {
            name: 'سفارش‌ها',
            icon: LIST,
            isActive: isOrders,
            route: {
                customer: '/customer/orders',
                restaurant: '/restaurant/orders?type=active',
                courier: '/courier/orders',
            }
        },
    ];

    return (
        <div
            className="p-4 border-t fixed inset-x-0 bottom-0 mx-auto border-gray-border w-full max-w-lg z-10 flex items-center justify-between bg-white-background">
            {navigationItems.map((item, index) => (
                <Link href={item.route[userType]} key={index} passHref className="flex-1">
                    <div key={index} className={classJoin([
                        'flex flex-col items-center',
                        item.isActive && 'text-primary',
                    ])}>
                        <Image
                            src={item.icon}
                            alt={item.name}
                            width={24}
                            height={24}
                            className="w-[24px] h-[24px]"
                        />
                        <span className="text-xs mt-1">{item.name}</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default BottomNavigation;