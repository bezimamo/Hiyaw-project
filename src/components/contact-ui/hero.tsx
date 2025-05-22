import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

export default function ContactHero() {
  return (
    <div className="relative bg-white dark:bg-[#41423A] text-[#41423A] dark:text-white min-h-screen">
      {/* Vertical Sidebar for Social Icons */}
      <aside className="hidden lg:flex fixed top-1/3 left-4 flex-col gap-4 z-50">
        <a href="https://www.instagram.com/hiyaw_animation/" target="_blank" rel="noopener noreferrer">
          <FaInstagram className="text-[#F05A28] hover:scale-110 transition text-2xl" />
        </a>
        <a href="https://www.linkedin.com/company/hiyaw-animation/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-[#F05A28] hover:scale-110 transition text-2xl" />
        </a>
        <a href="https://www.tiktok.com/@hiyaw.animation?lang=en" target="_blank" rel="noopener noreferrer">
          <FaTiktok className="text-[#F05A28] hover:scale-110 transition text-2xl" />
        </a>
      </aside>

      {/* Tagline */}
      <section className="text-center px-6 md:px-16 py-8 mt-12">
        <h2 className="text-3xl font-bold mb-2 text-[#F05A28]">Get in Touch</h2>
        <p className="text-lg mt-4">We&#39;d love to hear from you. Please fill out the form below or contact us directly.</p>
      </section>

      {/* Contact Form and Info */}
      <section className="flex justify-center px-6 md:px-16 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
          {/* Form Card */}
          <Card className="shadow-lg border-none bg-white dark:bg-[#41423A]">
            <CardContent className="space-y-4 p-6 h-full">
              <Input
                placeholder="Your Name"
                className="bg-white dark:bg-[#555547] text-[#41423A] dark:text-white border border-gray-300 dark:border-gray-600"
              />
              <Input
                placeholder="Email Address"
                className="bg-white dark:bg-[#555547] text-[#41423A] dark:text-white border border-gray-300 dark:border-gray-600"
              />
              <Textarea
                placeholder="Your Message"
                rows={5}
                className="bg-white dark:bg-[#555547] text-[#41423A] dark:text-white border border-gray-300 dark:border-gray-600"
              />
              <Button className="bg-[#F05A28] hover:bg-[#F8B133] text-white w-full">
                Send Message
              </Button>
            </CardContent>
          </Card>

          {/* Contact Info */}
          <Card className="shadow-lg border-none bg-white dark:bg-[#41423A] h-full">
            <CardContent className="p-6 flex flex-col justify-center space-y-6 h-full text-[#41423A] dark:text-white">
              <div className="flex items-start gap-4">
                <Phone className="text-[#F8B133] mt-1" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <p>+251 911 234 567</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-[#F8B133] mt-1" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <p>hiyawanimation@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <MapPin className="text-[#F8B133] mt-1" />
                <div>
                  <h4 className="font-semibold">Location</h4>
                  <p>Addis Ababa, Ethiopia</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Map */}
      <section className="px-6 md:px-16 pb-16">
        <iframe
          src="https://maps.google.com/maps?q=Addis%20Ababa&t=&z=13&ie=UTF8&iwloc=&output=embed"
          className="w-full h-64 rounded-lg border-none"
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}
