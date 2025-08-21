export async function requestOtp(email: string) {
  const res = await fetch('http://localhost:8080/api/auth/otp/request', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email }),
  });
  if (!res.ok) throw new Error(await res.text());
}

export async function verifyOtp(email: string, code: string) {
  const res = await fetch('http://localhost:8080/api/auth/otp/verify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, code }),
  });
  if (!res.ok) throw new Error(await res.text());
  return (await res.json()) as { token: string };
}
