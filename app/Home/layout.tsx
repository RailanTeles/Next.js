import { ReactNode } from 'react';

export default function HomeLayout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full bg-blue-700 min-h-screen flex flex-col">
      {children}
    </div>
  );
}
