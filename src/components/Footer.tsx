"use client";
import {
  Mail,
  MapPin,
  PhoneIcon,
  ShieldIcon,
  UserIcon
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const EMAIL = process.env.NEXT_PUBLIC_EMAIL;

const Footer = () => {
  const [render, setRender] = useState(false);

  const currentYear = new Date().getFullYear();
  useEffect(() => {
    if (!render) setRender(true);
  }, [render]);

  if (!render) return;

  return (
    <footer className="bg-gradient-to-br from-stone-800 to-stone-800/90 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🌲</div>
        <div className="absolute top-32 right-20 text-4xl">⭐</div>
        <div className="absolute bottom-20 left-1/4 text-5xl">🏕️</div>
        <div className="absolute bottom-10 right-10 text-3xl">🌙</div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            {/* <h4 className="text-3xl font-playfair font-bold mb-4">Pawna Camps</h4> */}
            <div className="w-[100px] h-[100px] overflow-hidden">
              <img
                src="/images/pawna-lake-campingw-bg-croped.webp"
                alt="pawna-logo"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-white/80 mb-6 font-poppins leading-relaxed text-lg">
              Where adventure meets comfort, creating unforgettable experiences
              in nature&apos;s embrace. Escape ordinary, sleep under stars, wake
              up to wilderness.
            </p>
            <div className="flex items-center space-x-3 text-white/80 mb-4">
              <MapPin className="w-5 h-5 text-coral self-start" />
              <span className="font-poppins">
                Thakursai Pavananagar Road Near Vaishnavi Hotel,
                <br /> Swami Samarth Road Pawna Lake Camping, <br />{" "}
                Maharashtra, Pune- 410 406
              </span>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 text-white">
                <UserIcon className="w-4 sm:w-5 h-4 sm:h-5 text-blue-300 fill-blue-400" />
                <span className="font-medium text-xs sm:text-sm">
                  5,000+ Happy Campers
                </span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 text-white">
                <ShieldIcon className="w-4 sm:w-5 h-4 sm:h-5 text-green-300 fill-green-400" />
                <span className="font-medium text-xs sm:text-sm">
                  Safe & Secure Campsite
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div id="footer">
            <h5 className="font-bold mb-6 text-xl font-playfair">
              Quick Links
            </h5>
            <ul className="space-y-3 text-white/80">
              <li>
                <a
                  href="#accommodations"
                  className="hover:text-coral transition-colors font-poppins hover:underline"
                >
                  Accommodations
                </a>
              </li>
              <li>
                <a
                  href="#experiences"
                  className="hover:text-coral transition-colors font-poppins hover:underline"
                >
                  Adventures
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  className="hover:text-coral transition-colors font-poppins hover:underline"
                >
                  Your Day
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-coral transition-colors font-poppins hover:underline"
                >
                  Gallery
                </a>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="hover:text-coral transition-colors font-poppins hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="hover:text-coral transition-colors font-poppins hover:underline"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/safety-guidelines"
                  className="hover:text-coral transition-colors font-poppins hover:underline"
                >
                  Safety Guidelines
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h5 className="font-bold mb-6 text-xl font-playfair">
              Connect With Us
            </h5>

            <div className="space-y-6 text-white/80">
              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-moss" />
                <div>
                  <p className="font-semibold font-poppins">Email Us</p>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="font-poppins hover:text-coral transition-colors duration-300"
                  >
                    {EMAIL}
                  </a>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-center space-x-3">
                <PhoneIcon className="w-5 h-5 text-moss" />
                <div>
                  <p className="font-semibold font-poppins">Call us</p>
                  <Link href="tel:+919373526309">
                    <p className="font-poppins hover:text-coral transition-colors duration-300">
                      +91 93735 26309
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm font-poppins">
              © {currentYear} Pawna Lake Camping. All rights reserved. | Crafted
              by Krrish
            </p>
            <div className="flex space-x-6 text-sm text-white/60"></div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
