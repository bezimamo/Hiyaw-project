import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  EnvelopeClosedIcon,
} from "@radix-ui/react-icons";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Project", href: "/project" },
  { name: "Training", href: "/training" },
  { name: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export function Footer() {
  return (
    <footer className="bg-[#1B1B1B] text-white border-t border-gray-700">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Socials */}
          <div className="space-y-4">
            <Link href="/assets/images/logo.png" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-[#F05A28] rounded-full" />
              <span className="font-bold text-xl text-white">Hiyaw</span>
            </Link>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.instagram.com/hiyaw_animation/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramLogoIcon className="w-5 h-5 text-white hover:text-[#F05A28]" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link
                  href="https://www.linkedin.com/company/hiyaw-animation/posts/?feedView=all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInLogoIcon className="w-5 h-5 text-white hover:text-[#F05A28]" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link href="mailto:hiyawanimation@gmail.com">
                  <EnvelopeClosedIcon className="w-5 h-5 text-white hover:text-[#F05A28]" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#F05A28] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-white">Legal</h3>
            <ul className="space-y-2">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-[#F05A28] transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
         {/* Newsletter */}
         <div className="md:col-span-2 lg:col-span-1">
          <h3 className="font-semibold text-lg mb-4 text-white">
            Join  Hiyaw Animation
          </h3>
          <p className="text-gray-400 mb-4">
            Get updates on new animations and creative content.        
          </p>
        <form className="flex space-x-2">
         <input
           type="email"
           placeholder="Enter your email"
           className="flex-grow px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F05A28]"
        />
       <Button type="submit" className="bg-[#F05A28] hover:bg-[#F8B133]">
         Subscribe
      </Button>
     </form>
    </div>
        </div>
        <Separator className="my-8 bg-gray-600" />
        <div className="text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Hiyaw. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
