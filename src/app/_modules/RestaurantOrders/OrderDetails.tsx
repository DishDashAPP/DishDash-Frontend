import {FC} from "react";
import Button from "@components/Button/Button";

const mockOrder = {
    id: 1,
    totalPrice: 15000,
    status: 'preparing',
    createdAt: '1400/01/01',
    courier: {
        name: 'محمدمهدی میرزایی',
    },
    user: {
        name: 'محمدامین لطفی',
        address: 'شهرآرا، بزرگراه جلال آل احمد، خیابان امام منتظر، کوچه سی‌وسوم، پلاک 18، طبقه اول',
    },
    foodItems: [
        {
            id: 1,
            name: 'پاستا پنه آلفردو',
            price: 15000,
            count: 1
        },
        {
            id: 2,
            name: 'پیتزا بیکن (ایتالیایی)',
            price: 30000,
            count: 2
        },
        {
            id: 3,
            name: 'نوشابه قوطی کوکاکولا',
            price: 5000,
            count: 3

        },
        {
            id: 4,
            name: 'سیب زمینی',
            price: 15000,
            count: 1
        },
        {
            id: 5,
            name: 'پیتزا پپرونی (ایتالیایی)',
            price: 30000,
            count: 2
        },
        {
            id: 6,
            name: 'نوشابه قوطی زیرو',
            price: 5000,
            count: 3
        }
    ]
}

type orderDetailsProps = {
    orderId: number
}

const OrderDetails: FC<orderDetailsProps> = ({orderId}) => {
    return (
        <div>
            <div className="flex flex-col gap-y-4">
                {mockOrder.foodItems.map((foodItem, index) => (
                    <div key={index} className="flex justify-between items-center">
                        <span className="text-sm">{foodItem.name}</span>
                        <div className="flex items-center">
                            <span className="ml-4">x{foodItem.count}</span>
                            <span>{foodItem.price} تومان</span>
                        </div>
                    </div>
                ))}
            </div>
            <hr className="border-gray-border my-4"/>
            <div className="flex justify-between items-center">
                <span className="text-sm font-bold">جمع کل</span>
                <span>
                    <span className="font-bold">{mockOrder.totalPrice}</span>
                    <span> تومان</span>
                </span>
            </div>

            <div className="flex flex-col items-start text-sm mt-8">
                <span className="font-bold">نام مشتری:</span>
                <span className="mt-2">{mockOrder.user.name}</span>
            </div>
            <div className="flex flex-col items-start text-sm mt-4">
                <span className="font-bold">نشانی:</span>
                <span className="mt-2">{mockOrder.user.address}</span>
            </div>
            <div className="flex flex-col items-start text-sm mt-4">
                <span className="font-bold">نام پیک:</span>
                <span className="mt-2">{mockOrder.courier.name}</span>
            </div>
            <Button className="mt-8 w-full">
                ارسال سفارش توسط پیک
            </Button>
        </div>
    )
}

export default OrderDetails;

