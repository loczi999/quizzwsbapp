import React from 'react';
import { GraduationCap } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-100 font-sans text-slate-800">
      {/* App Bar */}
      <header className="bg-wsb-navy text-white shadow-md sticky top-0 z-50">
        <div className="max-w-3xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <GraduationCap className="h-8 w-8 text-wsb-orange" />
            <h1 className="text-xl font-bold tracking-tight">WSB Merito Gdańsk Quiz</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col max-w-3xl mx-auto w-full p-4">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-slate-200 py-4 text-center text-slate-500 text-sm">
        <p>&copy; {new Date().getFullYear()} WSB Merito Gdańsk Fan App</p>
      </footer>
    </div>
  );
};

export default Layout;
