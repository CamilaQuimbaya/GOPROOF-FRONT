export interface AuthResponse{
  ok: boolean;
  uid?: string;
  name?: string;
  email?: string;
  token?: string;
  msg?: string;
  profile?: string
}

export interface Usuario{

  name: string;
  email: string;
  profile: string
}
