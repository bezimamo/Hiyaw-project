import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
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
      <div className="container mx-auto px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand & Socials */}
          <div className="space-y-4">
            <Link href="/" className="inline-flex items-center space-x-2">
              <Image src="/logo.png" alt="Company Logo" width={60} height={60} />
            </Link>
            <div className="flex space-x-3">
              <Link
                href="https://www.instagram.com/hiyaw_animation/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <InstagramLogoIcon className="w-5 h-5 text-white hover:text-[#F05A28]" />
                  <span className="sr-only">Instagram</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/company/hiyaw-animation/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon">
                  <LinkedInLogoIcon className="w-5 h-5 text-white hover:text-[#F05A28]" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:hiyawanimation@gmail.com">
                <Button variant="ghost" size="icon">
                  <EnvelopeClosedIcon className="w-5 h-5 text-white hover:text-[#F05A28]" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
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

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
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

          {/* Subscribe Section */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Join Hiyaw Animation</h3>
            <p className="text-gray-400 mb-4">
              Get updates on new animations and creative content.
            </p>
            <form className="w-full max-w-sm mx-auto sm:mx-0 flex flex-col sm:flex-row sm:items-center sm:space-x-2 space-y-2 sm:space-y-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 bg-gray-800 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#F05A28]"
              />
              <Button
                type="submit"
                className="w-full sm:w-auto bg-[#F05A28] hover:bg-[#F8B133]"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <Separator className="my-10 bg-gray-600" />

        <div className="text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Hiyaw Animation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
