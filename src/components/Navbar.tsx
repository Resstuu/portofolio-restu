import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
// Using lucide-react which is standard for shadcn, but mapping to the look of the prompt's material symbols where possible or just using lucide equivalents
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');
    const [isScrolled, setIsScrolled] = useState(false);

    // Initialize theme from localStorage or system preference
    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
            if (storedTheme) {
                setTheme(storedTheme);
                if (storedTheme === 'dark') {
                    document.documentElement.classList.add('dark');
                } else {
                    document.documentElement.classList.remove('dark');
                }
            } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
                setTheme('dark');
                document.documentElement.classList.add('dark');
            }

            const handleScroll = () => {
                setIsScrolled(window.scrollY > 20);
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        if (newTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    };

    return (
        <nav className={`sticky top-0 z-50 w-full transition-all duration-300 ${isScrolled ? 'border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-[#0F172A]/80 backdrop-blur-md' : 'bg-transparent border-transparent'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        <a href="#home" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">About</a>
                        <a href="#work" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">Project</a>
                        <a href="#contact" className="text-sm font-medium text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary transition-colors">Contact</a>

                        <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary">
                            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                        </Button>


                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center gap-4">
                        <Button variant="ghost" size="icon" onClick={toggleTheme} className="text-slate-600 dark:text-slate-300 hover:text-primary dark:hover:text-primary">
                            {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
                        </Button>
                        <button onClick={() => setIsOpen(!isOpen)} className="text-slate-500 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white p-2">
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-[#0F172A] border-b border-slate-200 dark:border-slate-800 shadow-xl">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 flex flex-col items-center">
                        <a href="#home" className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary" onClick={() => setIsOpen(false)}>About</a>
                        <a href="#work" className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary" onClick={() => setIsOpen(false)}>Project</a>
                        <a href="#contact" className="block px-3 py-2 text-base font-medium text-slate-700 dark:text-slate-200 hover:text-primary dark:hover:text-primary" onClick={() => setIsOpen(false)}>Contact</a>

                    </div>
                </div>
            )}
        </nav>
    );
}
