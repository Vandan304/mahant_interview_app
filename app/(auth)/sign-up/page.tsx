import React from 'react';
import AuthForm from '@/components/AuthForm';

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <AuthForm type="sign-up" />
    </div>
  );
};

export default Page;
