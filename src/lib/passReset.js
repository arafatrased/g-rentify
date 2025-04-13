import axios from "axios";

export const sendPasswordResetToken = async (token, password) => {
  console.log(token, password);
  try {
    const res = await axios.post('/api/auth/reset-password', { token, password });
    return res.data;
  } catch (error) {
    return {
      success: false,
      message: error?.response?.data?.message || 'Something went wrong.',
    };
  }
};