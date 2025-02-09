import { jwtDecode } from "jwt-decode";

interface jwtPayload {
  user_id: string;
  given_name: string;
  family_name: string;
  userType: string;
  exp: number;
}

export const Token = (token: string): jwtPayload => {
  const decode = jwtDecode<jwtPayload>(token);
  const { user_id, given_name, family_name, userType, exp } = decode;
  return {
    user_id,
    given_name,
    family_name,
    userType,
    exp,
  };
};
