// src/pages/LoginOtp.tsx
import React, { useState } from 'react';
import { requestOtp, verifyOtp } from './auth';
import OtpInput from './OtpInput';

export default function LoginOtp() {
  const [email, setEmail] = useState('');
  const [stage, setStage] = useState<'request'|'verify'>('request');
  const [code, setCode] = useState('');
  const [error, setError] = useState<string|undefined>();
  const [loading, setLoading] = useState(false);

  const send = async () => {
    setError(undefined); setLoading(true);
    try { await requestOtp(email); setStage('verify'); }
    catch (e:any) { setError(e.message ?? 'Failed'); }
    finally { setLoading(false); }
  };

  const verify = async () => {
    setError(undefined); setLoading(true);
    try {
      const { token } = await verifyOtp(email, code);
      localStorage.setItem('jwt', token);
      // redirect or show success
      alert('Logged in!');
    } catch (e:any) {
      setError(e.message ?? 'Invalid code');
    } finally { setLoading(false); }
  };

  return (
    <div style={{ maxWidth: 420, margin: '80px auto', fontFamily: 'Open Sans, sans-serif' }}>
      <h2>Sign in with OTP</h2>
      {stage === 'request' && (
        <>
          <label>Email</label>
          <input
            value={email}
            onChange={e=>setEmail(e.target.value)}
            type="email"
            placeholder="you@example.com"
            style={{ width:'100%', padding:10, margin:'8px 0' }}
          />
          <button onClick={send} disabled={loading || !email}>Send Code</button>
        </>
      )}
      {stage === 'verify' && (
        <>
          <p>We sent a 6-digit code to <b>{email}</b></p>
          <OtpInput onChange={setCode} />
          <button onClick={verify} disabled={loading || code.length!==6} style={{ marginTop: 12 }}>
            Verify & Sign In
          </button>
          <button onClick={()=>setStage('request')} style={{ marginLeft: 8 }}>Change email</button>
        </>
      )}
      {error && <p style={{ color:'crimson' }}>{error}</p>}
    </div>
  );
}
