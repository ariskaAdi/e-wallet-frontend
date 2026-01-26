export type FormLoginData = {
  email: string;
  password: string;
};

export type MyWalletResponse = {
  HttpCode: number;
  success: boolean;
  message: string;
  payload: {
    user_public_id: string;
    wallet_public_id: string;
    name: string;
    balance: number;
    created_at: string;
    updated_at: string;
  };
};
