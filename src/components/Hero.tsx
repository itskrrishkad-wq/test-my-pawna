"use client";
import { Button } from "@/components/ui/button";
import { ShieldIcon, Star, UserIcon } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-svh flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-no-repeat bg-[65%_75%]"
        style={{
          backgroundImage: "url('/images/hero.webp')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/30 sm:via-transparent to-black/10 sm:to-black/50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto animate-fade-in">
        {/* Trust Indicators */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 mb-6 sm:mb-8">
          <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-3 sm:px-4 py-2 text-white">
            <Star className="w-4 sm:w-5 h-4 sm:h-5 fill-yellow-500 text-yellow-600" />
            <span className="font-medium text-xs sm:text-sm">4.8 Review</span>
          </div>
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

        <h1 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-playfair font-bold text-white mb-4 sm:mb-6 leading-tight">
          A Peaceful Escape for <br className="hidden" />
          <span className="text-yellow-300">Couples</span>
          <br />
        </h1>

        <p className="text-lg sm:text-xl md:text-2xl text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)] mb-8 sm:mb-10 max-w-3xl mx-auto font-poppins">
          Discover premium glamping at Pawna Lake comfy tents, calm waters,
          starry nights & unmatched privacy for couples.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center">
          <Button
            size="lg"
            className="bg-moss h-max hover:bg-moss/80 text-white px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-xl font-semibold w-full sm:w-auto cursor-pointer"
            onClick={() =>
              document
                .getElementById("bookings")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book Your Escape
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 h-max border-white text-white hoverbg-white hover:text-stone-800  bg-white/10 backdrop-blur-sm px-8 sm:px-10 py-3 sm:py-4 text-base sm:text-lg rounded-full font-semibold w-full sm:w-auto cursor-pointer"
            onClick={() =>
              document
                .getElementById("accommodations")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View Camps
          </Button>
        </div>

        {/* Scroll Indicator */}
        {/* <div className="absolute bottom-6 sm:-bottom-20 left-1/2 transform -translate-x-1/2 animate-bounce-gentle hidden sm:block">
          <div className="w-6 sm:w-8 h-10 sm:h-12 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 sm:h-4 bg-white rounded-full mt-2 sm:mt-3 animate-bounce"></div>
          </div>
        </div> */}
      </div>
    </section>
  );
  
};

export default Hero;
