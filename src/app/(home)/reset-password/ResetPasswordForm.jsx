'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { sendPasswordResetToken } from '@/lib/passReset';
import toast from 'react-hot-toast';

export default function ResetPasswordForm({ token }) {
  const router = useRouter();
  // console.log(token);

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!password || !confirmPassword) {
      setError('Please fill in all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const result = await sendPasswordResetToken(token, password);
    setMessage(result.message);
    if (result.message === 'Password updated successfully') {
      router.push('/login');
      toast.success('Password updated successfully. Please log in with your new password.');
    }
  };

  return (
    <div className='p-4 flex justify-center items-center h-screen bg-gray-100'>
      <div className="bg-white w-10/12 md:w-8/12 lg:w-4/12 mx-auto py-16 rounded-lg">
        <h1 className='text-2xl md:text-2xl lg:text-3xl font-bold text-center'>Change password</h1>
        <div className='w-full p-10 mx-auto'>
          <fieldset className="fieldset mt-8 mb-3">
            <label>New Password</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
              placeholder="Enter New Password *"
            />
          </fieldset>

          <fieldset className="fieldset mb-3">
            <label>Re-Enter New Password</label>
            <input
              type="password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="input w-full focus:outline-none focus:border-[#03b00b] bg-transparent rounded-[2px]"
              placeholder="Confirm Password *"
            />
          </fieldset>

          {error && <p className='text-red-500 text-sm'>{error}</p>}

          <fieldset className="fieldset mb-3">
            <input
              onClick={handleSubmit}
              type="submit"
              value={'Change Password'}
              className='bg-[#00B22C] text-white px-5 py-2 text-sm rounded active:scale-[0.95] transition-all duration-300 cursor-pointer w-full uppercase'
            />
          </fieldset>

          {message && <p className='text-green-500 text-sm'>{message}</p>}
        </div>
      </div>
    </div>
  );
}
