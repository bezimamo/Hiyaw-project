import Link from 'next/link';
import { ModeToggle } from './mode-toggle';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from 'lucide-react';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Project', href: '/project' },
  { name: 'Training', href: '/training' },
];

export function Navbar() {
  return (
   <nav className="fixed top-4 left-10 right-5 z-50 bg-white shadow-lg rounded-lg border-b px-2 py-2">
  <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo with Animated Text */}
        <Link href="/" className="flex flex-col items-start">
  <div className="flex items-center space-x-2">
    <img 
      src="/assets/MASTER LOGO Y.O.png" 
      alt="Hiyaw Logo" 
      className="w-10 h-10"  // Removed rounded-full to keep it as a square
    />
    <span className="font-bold text-2xl text-[#41423A]">Hiyaw</span>
  </div>
  <span className="text-sm text-[#41423A] animate-pulse">Creative Excellence</span>
</Link>


        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="relative text-sm font-medium text-[#41423A] hover:text-[#F05A28] transition-colors"
            >
              {item.name}
              <span className="absolute left-1/2 -bottom-2 w-2 h-2 bg-[#F05A28] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 transform -translate-x-1/2"></span>
            </Link>
          ))}
        </div>

        {/* Mode Toggle & Contact Button */}
        <div className="hidden md:flex items-center space-x-4">
          <ModeToggle />
          <Button asChild className="bg-[#F8B133] text-white hover:bg-[#F05A28]">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5 text-[#41423A]" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="bg-white shadow-lg">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative text-sm font-medium text-[#41423A] hover:text-[#F05A28] transition-colors"
                >
                  {item.name}
                  <span className="absolute left-1/2 -bottom-2 w-2 h-2 bg-[#F05A28] rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 transform -translate-x-1/2"></span>
                </Link>
              ))}
              <div className="flex items-center space-x-4">
                <ModeToggle />
              </div>
              <Button asChild className="bg-[#F8B133] text-white hover:bg-[#F05A28]">
                <Link href="/contact">Contact</Link>
              </Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
