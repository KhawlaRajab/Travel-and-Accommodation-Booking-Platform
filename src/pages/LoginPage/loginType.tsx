export interface loginPayload {
  userName: string;
  password: string;
}

export interface loginResponse {
  authentication: string;
  userType: string;
}

export interface authContextType {
  token: string;
  setToken: React.Dispatch<React.SetStateAction<string>>;
}
