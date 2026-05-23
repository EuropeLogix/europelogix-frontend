'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: 'https://app.europelogix.com/dashboard',
      },
    });

    if (error) {
      alert(error.message);
    } else {
      alert('Magic link enviado al email');
    }

    setLoading(false);
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-md p-8 border border-zinc-800 rounded-2xl">
        <h1 className="text-3xl font-bold mb-6">
          EuropeLogix OS Login
        </h1>

        <input
          type="email"
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg bg-zinc-900 border border-zinc-700 mb-4"
        />

        <button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-white text-black p-3 rounded-lg font-semibold"
        >
          {loading ? 'Loading...' : 'Send Magic Link'}
        </button>
      </div>
    </main>
  );
}
