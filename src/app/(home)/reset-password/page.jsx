'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import axios from 'axios';

export default function ResetPasswordPage() {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const router = useRouter();

  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post('/api/auth/reset-password', { token, password });
    setMessage(res.data.message);
    if (res.status === 200) router.push('/login');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 p-4">
      <input
        type="password"
        placeholder="New Password"
        className="border p-2 rounded w-full"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Reset Password
      </button>
      {message && <p>{message}</p>}
    </form>
  );
}
