"use client";

import { FC, useEffect, useState } from "react";
import UserProfile from "@components/UserProfile/UserProfile";
import { Controller, RegisterOptions, useForm } from "react-hook-form";
import TextInput from "@components/TextInput/TextInput";
import Button from "@components/Button/Button";
import {
  getRestaurantProfileReq,
  updateRestaurantProfileReq,
} from "@api/services/restaurantService";

type Inputs = {
  firstName: string;
  lastName: string;
  restaurantName: string;
  phoneNumber: string;
  address: string;
};

type TFieldType = {
  name: keyof Inputs;
  label: string;
  rules?: RegisterOptions<Inputs, keyof Inputs>;
  minLength?: number;
  maxLength?: number;
  onChange?: (val?: string, onChange?: (val?: string) => void) => void;
};

const fields: TFieldType[] = [
  {
    name: "firstName",
    label: "نام",
    rules: {
      required: "نام الزامی است.",
    },
  },
  {
    name: "lastName",
    label: "نام‌خانوادگی",
    rules: {
      required: "نام‌خانوادگی الزامی است.",
    },
  },
  {
    name: "restaurantName",
    label: "نام رستوران",
  },
  {
    name: "phoneNumber",
    label: "شماره تماس",
    rules: {
      validate: (value: string) => {
        if (!value.match(/^09[0-9]{9}$/)) {
          return "شماره تماس باید با ۰۹ شروع شود و ۱۱ رقم باشد.";
        }
      },
    },
  },
  {
    name: "address",
    label: "نشانی",
    rules: {
      required: "آدرس الزامی است.",
      maxLength: {
        value: 255,
        message: "آدرس باید حداکثر ۲۵۵ کاراکتر باشد.",
      },
    },
  },
];

const RestaurantProfile: FC = () => {
  const [user, setUser] = useState<Inputs>({
    firstName: "",
    lastName: "",
    restaurantName: "",
    phoneNumber: "",
    address: "",
  });
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    setValue,
  } = useForm<Inputs>({
    mode: "onChange",
    defaultValues: {
      firstName: "",
      lastName: "",
      restaurantName: "",
      phoneNumber: "",
      address: "",
    },
  });

  const fetchProfile = async () => {
    const res = await getRestaurantProfileReq();
    if (res.isSuccess) {
      const { first_name, last_name, restaurant_name, phone_number, address } =
        res.data;
      setValue("firstName", first_name);
      setValue("lastName", last_name);
      setValue("restaurantName", restaurant_name || "");
      setValue("phoneNumber", phone_number);
      setValue("address", address || "");
      setUser({
        firstName: first_name,
        lastName: last_name,
        restaurantName: restaurant_name || "",
        phoneNumber: phone_number,
        address: address || "",
      });
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [setValue]);

  const submit = async (data: Inputs) => {
    const res = await updateRestaurantProfileReq({
      first_name: data.firstName,
      last_name: data.lastName,
      restaurant_name: data.restaurantName,
      phone_number: data.phoneNumber,
      address: data.address,
    });
    if (res.isSuccess) {
      console.log("Profile updated successfully", res.data);
      await fetchProfile();
    }
  };

  return (
    <div className="flex flex-col w-full">
      <UserProfile user={user} className="mt-6" />
      <form className="mt-12" onSubmit={handleSubmit(submit)}>
        {fields.map((field) => (
          <Controller
            key={field.name}
            control={control}
            name={field.name}
            rules={field.rules}
            render={({ field: { value, onChange, onBlur, name } }) => (
              <TextInput
                className="mb-6"
                type="text"
                fullWidth
                label={field.label}
                id={field.name}
                error={`${errors[field.name]?.message || ""}`}
                isOptional={!field.rules?.required}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
                autoComplete="off"
              />
            )}
          />
        ))}
      </form>
      <div className="flex flex-col justify-end h-full pb-6">
        <Button
          className="mt-2 w-full"
          disabled={!isValid || isSubmitting}
          onClick={handleSubmit(submit)}
        >
          ثبت تغییرات
        </Button>
      </div>
    </div>
  );
};

export default RestaurantProfile;
