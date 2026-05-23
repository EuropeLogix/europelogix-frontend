'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState('jdelgado@valorus.pro');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    router.push('/dashboard');
  };

  const signUp = async () => {
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert(error.message);
      return;
    }

    alert('Usuario creado. Ahora puedes entrar.');
  };

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-md p-8 border border-zinc-800 rounded-2xl bg-zinc-950">
        <p className="text-xs tracking-[0.35em] text-zinc-500 mb-3">
          EUROPELOGIX OS
        </p>

        <h1 className="text-3xl font-bold mb-2">
          Sign in
        </h1>

        <p className="text-zinc-400 mb-8">
          Access your logistics control tower.
        </p>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 rounded-lg bg-black border border-zinc-700 mb-4"
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 rounded-lg bg-black border border-zinc-700 mb-6"
        />

        <button
          onClick={signIn}
          disabled={loading}
          className="w-full bg-white text-black p-3 rounded-lg font-semibold mb-3"
        >
          {loading ? 'Working...' : 'Enter platform'}
        </button>

        <button
          onClick={signUp}
          disabled={loading}
          className="w-full border border-zinc-700 text-white p-3 rounded-lg font-semibold"
        >
          Create account
        </button>
      </div>
    </main>
  );
}
