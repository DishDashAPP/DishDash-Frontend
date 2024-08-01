import {sendRequest} from "@api/axiosInstance";
import {AUTH} from "@api/urls";
import {UserType} from "@utils/types";

type TLoginRes = {
    token: string
    role: UserType
}

export async function signupReq(username:string, password: string, role: UserType) {
    return sendRequest(AUTH.REGISTER, "POST", { username, password, role });
}

export async function loginReq(username: string, password: string) {
    return sendRequest<TLoginRes>(AUTH.LOGIN, "POST", { username, password });
}