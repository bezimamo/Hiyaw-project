'use client';

import Image from 'next/image';
import { useState } from 'react';
import { FaInstagram, FaLinkedin, FaTiktok } from 'react-icons/fa';

export default function ContactHero() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const res = await fetch('/api/contact', {
      method: 'POST',
      body: JSON.stringify(form),
      headers: { 'Content-Type': 'application/json' },
    });

    setLoading(false);
    if (res.ok) {
      setSuccess(true);
      setForm({ name: '', email: '', message: '' });
    } else {
      alert('Failed to send message. Please try again later.');
    }
  };

  return (
    <main className="bg-white dark:bg-[#1A1A1A] text-[#41423A] dark:text-white font-['Poppins']">
      {/* Hero Section */}
      <section className="text-center py-12 px-6 md:px-16 container mx-auto">
        <h1 className="text-4xl font-bold mb-6">Meet Our Team</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map(i => (
            <div key={i} className="relative w-full h-64 md:h-80">
              <Image
                src={`/assets/team/group${i}.jpg`}
                alt={`Group ${i}`}
                fill
                className="rounded-lg object-cover shadow-md"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="px-6 md:px-16 py-14 bg-white dark:bg-[#41423A]">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto space-y-6 p-8 rounded-xl shadow-lg border dark:border-none"
        >
          <h2 className="text-2xl font-semibold text-center mb-4">Send us a message</h2>

          <div>
            <label className="block text-sm font-medium">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              type="text"
              className="w-full p-3 mt-2 rounded-md border border-gray-300 dark:bg-gray-800 dark:border-gray-700"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              type="email"
              className="w-full p-3 mt-2 rounded-md border border-gray-300 dark:bg-gray-800 dark:border-gray-700"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="w-full p-3 mt-2 rounded-md border border-gray-300 dark:bg-gray-800 dark:border-gray-700 h-32"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-[#F05A28] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#d94d1f] transition"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>

          {success && <p className="text-green-600 text-center">Message sent successfully!</p>}
        </form>
      </section>

      {/* Social Media Links */}
      <section className="px-6 md:px-16 py-12 text-center">
        <h3 className="text-xl font-semibold mb-4">Connect with us</h3>
        <div className="flex justify-center space-x-6 text-2xl text-[#F05A28]">
          <a href="https://www.instagram.com/hiyaw_animation/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/company/hiyaw-animation/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.tiktok.com/@hiyaw.animation?lang=en" target="_blank" rel="noopener noreferrer">
            <FaTiktok />
          </a>
        </div>
      </section>
    </main>
  );
}
