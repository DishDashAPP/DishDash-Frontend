import { FC } from "react";
import classJoin from "@utils/classJoin";
import ProfileImage from "@components/ProfileImage/ProfileImage";
import LOGOUT from "@public/logout.svg";
import Image from "next/image";

export type UserProfileProps = {
  user: {
    firstName: string;
    lastName: string;
    restaurantName: string;
    phoneNumber: string;
    address: string;
  };
  className?: string;
};

const UserProfile: FC<UserProfileProps> = ({ user, className }) => {
  return (
    <div
      className={classJoin(["flex items-center justify-between", className])}
    >
      <div className="flex items-stretch">
        <ProfileImage name={user.firstName} />
        <div className="flex flex-col justify-between mr-2 py-2">
          <h1 className="text-base font-medium">
            {user.firstName} {user.lastName}
          </h1>
        </div>
      </div>
      <div>
        <Image src={LOGOUT} width={32} height={32} alt="logput" />
      </div>
    </div>
  );
};

export default UserProfile;
