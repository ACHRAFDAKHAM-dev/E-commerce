// src/components/OtpInput.tsx
import React, { useRef } from 'react';

type Props = { length?: number; onChange: (value: string) => void; };

export default function OtpInput({ length = 6, onChange }: Props) {
  const refs = useRef<Array<HTMLInputElement | null>>([]);

  const handle = (i: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value.replace(/\D/g, '').slice(0,1);
    e.target.value = v;
    onChange(refs.current.map(r => r?.value ?? '').join(''));
    if (v && i < length - 1) refs.current[i+1]?.focus();
  };

  const onKeyDown = (i: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !refs.current[i]?.value && i > 0) {
      refs.current[i-1]?.focus();
    }
  };

  return (
    <div style={{ display: 'flex', gap: 8 }}>
      {Array.from({ length }).map((_, i) => (
        <input
          key={i}
          ref={(el) => (refs.current[i] = el)}
          inputMode="numeric"
          maxLength={1}
          onChange={(e) => handle(i, e)}
          onKeyDown={(e) => onKeyDown(i, e)}
          style={{ width: 40, height: 48, fontSize: 24, textAlign: 'center' }}
        />
      ))}
    </div>
  );
}
