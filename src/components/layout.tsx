import type { PropsWithChildren } from "react";
import { Header } from "./header";
import { useTheme } from "@/context/theme-provider";

export function Layout({ children }: PropsWithChildren) {
  const { theme } = useTheme();

  return (
    <div className=" bg-gradient-to-br from-background to-muted">
      <Header />
      <main className="min-h-screen container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="border-t backdrop-blur supports-[backdrop-filter]:bg-background/60 py-12">
        <div className="container mx-auto px-4 text-center text-gray-200">
          <p
            style={{
              color: theme === 'dark' ? '#23CE6B' : 'black'
            }}
          >
            © 2025 AeroCast. All rights reserved.
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a 
              href="mailto:r.commandur@gmail.com" 
              className="px-4 py-2 rounded transition-colors duration-300"
              style={{
                backgroundColor: theme === 'dark' ? '#272D2D' : '#2A2B2E',
                color: theme === 'dark' ? '#23CE6B' : 'white'
              }}
            >
              Email
            </a>
            <a 
              href="https://linkedin.com/in/raghavcommandur" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded transition-colors duration-300"
              style={{
                backgroundColor: theme === 'dark' ? '#272D2D' : '#2A2B2E',
                color: theme === 'dark' ? '#23CE6B' : 'white'
              }}
            >
              LinkedIn
            </a>
            <a 
              href="https://github.com/rxghavc" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-4 py-2 rounded transition-colors duration-300"
              style={{
                backgroundColor: theme === 'dark' ? '#272D2D' : '#2A2B2E',
                color: theme === 'dark' ? '#23CE6B' : 'white'
              }}
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}