'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';

interface OAuthButtonProps {
  provider: 'google'
}

export function OAuthButton({ provider }: OAuthButtonProps) {
  const providerConfig = {
    google: {
      name: 'Google',
      icon: '/static/google-icon.svg',
      bgColor: 'bg-white',
      textColor: 'text-gray-700',
      borderColor: 'border-gray-300',
    }
    // facebook: {
    //   name: 'Facebook',
    //   icon: '/static/facebook-icon.svg',
    //   bgColor: 'bg-[#1877F2]',
    //   textColor: 'text-white',
    //   borderColor: 'border-[#1877F2]',
    // },
    // apple: {
    //   name: 'Apple',
    //   icon: '/static/apple-icon.svg',
    //   bgColor: 'bg-black',
    //   textColor: 'text-white',
    //   borderColor: 'border-black',
    // },
  };

  const config = providerConfig[provider];

  const handleClick = () => {
    signIn(provider, { callbackUrl: '/' });
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      className={`py-3 px-4 border-2 ${config.borderColor} ${config.bgColor} ${config.textColor} rounded-full font-semibold flex items-center justify-center gap-3 hover:opacity-90 transition-all`}
    >
      <Image
        src={config.icon}
        alt={`${config.name} logo`}
        width={20}
        height={20}
      />
      {/* {config.name} */}
    </button>
  );
}

export function OAuthButtons() {
  return (
    <div className="space-y-3">
      <OAuthButton provider="google" />
      {/* <OAuthButton provider="facebook" />
      <OAuthButton provider="apple" /> */}
    </div>
  );
}
