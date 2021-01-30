import axios, { AxiosResponse } from "axios";
import { AUTH } from "../config";
import {
  SignupValues,
  LoginValues,
  SessionResponse,
  UserResponse,
} from "./auth-types";
export type { SignupValues, LoginValues, SessionResponse } from "./auth-types";

export const signup = (
  values: SignupValues
): Promise<AxiosResponse<UserResponse>> =>
  axios.post<UserResponse>(`${AUTH}/signup`, values, {
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

export const login = (
  values: LoginValues
): Promise<AxiosResponse<UserResponse>> =>
  axios.post<UserResponse>(`${AUTH}/login`, values, {
    withCredentials: true,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  });

export const validateSession = (): Promise<AxiosResponse<SessionResponse>> =>
  axios.get(`${AUTH}/session`, { withCredentials: true });

export const logout = (): Promise<AxiosResponse> =>
  axios.get(`${AUTH}/logout`, { withCredentials: true });
