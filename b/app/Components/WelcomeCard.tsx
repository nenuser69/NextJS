import React from 'react';
type WelcomeCardProps = {
  name: string;
};

export default function WelcomeCard({ name }: WelcomeCardProps) {
  return (
    <div className="bg-blue-100 p-4 rounded shadow text-center">
      <h2 className="text-xl font-bold text-black">Welcome, {name}!</h2>
      <p className="text-sm text-gray-700">Glad to have you here!</p>
    </div>
  );
}
