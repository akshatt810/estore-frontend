import { loginFailure, loginStart, loginSuccess } from "./userRedux";
import { publicRequest } from "../requestMethods";
import axios from "axios";

export const login = async (dispatch, user) => {
    dispatch(loginStart());
    try {
        const res = await publicRequest.post("/auth/login", user);
        dispatch(loginSuccess(res.data));
        //  localstroge.setItem(user, res.data);
        // axios.get("products/").then(
        //     res => {
        //         console.log(res.data);
        //     }
        // )
    } catch (err) {
        dispatch(loginFailure());
    }
};