'use client'

import {FC} from "react";
import Image from "next/image";
import LOGO from "@public/logo.svg";
import Tabs from "@components/Tabs/Tabs";
import Tab from "@components/Tabs/Tab";
import SignupForm from "@modules/AuthModules/SignupForm";
import {userType} from "@utils/types";

const tabs: {label: string, value: userType}[] = [
    {
        label: 'مشتری',
        value: 'customer',
    },
    {
        label: 'رستوران',
        value: 'restaurant',
    },
    {
        label: 'پیک',
        value: 'courier',
    }
]

const Signup: FC = (props) => {
    return(
        <div className="flex flex-col w-full mt-4">
            <div className="flex items-center justify-end mb-10">
                <Image src={LOGO} width={40} height={40} alt="logo"/>
            </div>
            <Tabs>
                {tabs.map((tab, index) => (
                    <Tab key={index} label={tab.label}>
                        <SignupForm type={tab.value}/>
                    </Tab>
                ))}

            </Tabs>
        </div>
    )
}

export default Signup;