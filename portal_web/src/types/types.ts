export interface AuthResponse {
  body: {
    user: User;
    accesToken: string;
    refreshToken: string;
  };
}

export interface AuthResponseError {
  body: {
    error: string;
  };
}

export interface User {
  id: string;
  nombre: string;
  username: String;
}
