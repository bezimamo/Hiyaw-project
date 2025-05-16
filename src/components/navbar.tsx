'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ModeToggle } from './mode-toggle'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Image from 'next/image'

const navItems = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Project', href: '/project' },
  { name: 'Training', href: '/training' },
  { name: 'Contact', href: '/contact' },
]

export function Navbar() {
  const pathname = usePathname()

  return (
    <nav className="fixed top-0 w-full z-50 bg-white dark:bg-[#41423A] backdrop-blur-sm border-b border-white/20 dark:border-white/10 pl-5 pr-5 transition-colors duration-300">
      <div className="container flex items-center justify-between py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 ml-6">
          <Image src="/logo.png" alt="Company Logo" width={65} height={65} />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 ml-auto">
          {navItems.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#F05A28]'
                    : 'text-[#41423A] dark:text-white hover:text-[#F05A28]'
                }`}
              >
                {item.name}
              </Link>
            )
          })}
        </div>

        {/* Theme Toggle (Desktop) */}
        <div className="hidden md:flex items-center space-x-4 ml-4">
          <ModeToggle />
        </div>

        {/* Mobile Nav */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5 text-[#41423A] dark:text-white" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="bg-white dark:bg-[#41423A]">
            <nav className="flex flex-col space-y-4 pt-6">
              {navItems.map((item) => {
                const isActive = pathname === item.href
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium transition-colors ${
                      isActive
                        ? 'text-[#F05A28]'
                        : 'text-[#41423A] dark:text-white hover:text-[#F05A28]'
                    }`}
                  >
                    {item.name}
                  </Link>
                )
              })}
              <div className="pt-4">
                <ModeToggle />
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  )
}
