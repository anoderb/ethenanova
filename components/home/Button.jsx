import Link from 'next/link';
import React from 'react';

const Button = () => (
  <Link href={'/explore'} type="button" className="bg-primary text-white hidden lg:flex px-6 py-2 rounded-full">
    Get Started
  </Link>
);

export default Button;
