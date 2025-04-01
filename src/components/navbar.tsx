import Link from 'next/link'
import { ModeToggle } from './mode-toggle'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Image from 'next/image';

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Trainings', href: '/trainings' },
]

export function Navbar() {

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b pl-5 pr-5">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center space-x-2 ml-6">
        <Image src="/logo.png" alt="Company Logo" width={65} height={65} />
          {/* <span className="font-bold text-xl">Company Logo</span> */}
        </Link>
        <div className="hidden md:flex items-center space-x-8 ml-auto">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4 ml-4" >
          <ModeToggle />
         
        </div>
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex items-center space-x-4">
                <ModeToggle />
              </div>
              
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}