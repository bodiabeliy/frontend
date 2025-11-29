import axios from 'axios';

const apiClient = axios.create({
  baseURL: process.env.AZAMAZA_API,
  responseType: 'json',
});

export interface SignupRequest {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone?: string;
  nationality?: string;
  user_type: 'USER' | 'ADMIN';
}

export interface SignupResponse {
  success: boolean;
  message: string;
  data: {
    user: {
      id: string;
      first_name: string;
      last_name: string;
      email: string;
      phone: string;
      nationality: string;
      is_active: boolean;
      created_at: string;
      updated_at: string;
    };
    token: string;
    refresh_token: string;
  };
}

export interface ForgotPasswordRequest {
  email_or_phone: string;
}

export interface ForgotPasswordResponse {
  success: boolean;
  message: string;
  data: null;
}

export interface VerifyResetCodeRequest {
  email_or_phone: string;
  code: string;
}

export interface VerifyResetCodeResponse {
  success: boolean;
  message: string;
  data: null;
}

export interface ResetPasswordRequest {
  email_or_phone: string;
  new_password: string;
  confirm_password: string;
}

export interface ResetPasswordResponse {
  success: boolean;
  message: string;
  data: null;
}

export const authService = {
  signup: async (data: SignupRequest): Promise<SignupResponse> => {
    const response = await apiClient.post<SignupResponse>('/api/auth/signup', data);
    return response.data;
  },
  
  forgotPassword: async (data: ForgotPasswordRequest): Promise<ForgotPasswordResponse> => {
    const response = await apiClient.post<ForgotPasswordResponse>('/api/auth/forgot-password', data);
    return response.data;
  },
  
  verifyResetCode: async (data: VerifyResetCodeRequest): Promise<VerifyResetCodeResponse> => {
    const response = await apiClient.post<VerifyResetCodeResponse>('/api/auth/verify-reset-code', data);
    return response.data;
  },
  
  resetPassword: async (data: ResetPasswordRequest): Promise<ResetPasswordResponse> => {
    const response = await apiClient.post<ResetPasswordResponse>('/api/auth/reset-password', data);
    return response.data;
  },
};

export default apiClient;