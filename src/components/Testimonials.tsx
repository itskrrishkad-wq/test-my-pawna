"use client"
import { Card, CardContent } from "@/components/ui/card";
import {
  Star,
  Heart,
  Camera,
  ChevronLeft,
  ChevronRight,
  X,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    name: "Arjun & Priya",
    location: "Mumbai",
    text: "Pawna Camps exceeded every expectation! The sunrise yoga, Comfy tent comfort, and stargazing experience created the most romantic weekend of our lives. Can't wait to return!",
    rating: 5,
    image:
      "/images/testimonials/pawna-lake-camping-testimonials-1.webp",
    category: "Couple",
  },
  {
    name: "The Sharma Family",
    location: "Pune",
    text: "Our kids are still talking about the night forest walk and campfire stories. The perfect blend of adventure and comfort for families. Every detail was thoughtfully planned!",
    rating: 5,
    image:
      "/images/testimonials/pawna-lake-camping-testimonials-2.webp",
    category: "Family",
  },
  {
    name: "Maya, Solo Traveler",
    location: "Pune",
    text: "As a solo female traveler, I felt completely safe and welcomed. The guided waterfall trek was incredible, and I made lifelong friends around the campfire!",
    rating: 5,
    image:
       "/images/testimonials/pawna-lake-camping-testimonials-3.webp",
    category: "Solo",
  },
];

export const images = [
  { src: "/images/new_images/image-1.webp", alt: "Image 1" },
  { src: "/images/new_images/image-2.webp", alt: "Image 2" },
  { src: "/images/new_images/image-3.webp", alt: "Image 3" },
  { src: "/images/new_images/image-4.webp", alt: "Image 4" },
  { src: "/images/new_images/image-5.webp", alt: "Image 5" },
  { src: "/images/new_images/image-6.webp", alt: "Image 6" },
  { src: "/images/new_images/image-7.webp", alt: "Image 7" },
  { src: "/images/new_images/image-8.webp", alt: "Image 8" },
  { src: "/images/new_images/image-9.webp", alt: "Image 9" },
  { src: "/images/new_images/image-10.webp", alt: "Image 10" },
  { src: "/images/new_images/image-11.webp", alt: "Image 11" },
  { src: "/images/new_images/image-12.webp", alt: "Image 12" },
  { src: "/images/new_images/image-13.webp", alt: "Image 13" },
  { src: "/images/new_images/image-14.webp", alt: "Image 14" },
  { src: "/images/new_images/image-15.webp", alt: "Image 15" },
  { src: "/images/new_images/image-16.webp", alt: "Image 16" },
  { src: "/images/new_images/image-17.webp", alt: "Image 17" },
  { src: "/images/new_images/image-18.webp", alt: "Image 18" },
  { src: "/images/new_images/image-19.webp", alt: "Image 19" },
  { src: "/images/new_images/image-20.webp", alt: "Image 20" },
  { src: "/images/new_images/image-21.webp", alt: "Image 21" },
  { src: "/images/new_images/image-22.webp", alt: "Image 22" },
  { src: "/images/new_images/image-23.webp", alt: "Image 23" },
  { src: "/images/new_images/image-24.webp", alt: "Image 24" },
  { src: "/images/new_images/image-25.webp", alt: "Image 25" },
  { src: "/images/new_images/image-26.webp", alt: "Image 26" },
  { src: "/images/new_images/image-27.webp", alt: "Image 27" },
  { src: "/images/new_images/image-28.webp", alt: "Image 28" },
  { src: "/images/new_images/image-29.webp", alt: "Image 29" },
  { src: "/images/new_images/image-30.webp", alt: "Image 30" },
  { src: "/images/new_images/image-31.webp", alt: "Image 31" },
  { src: "/images/new_images/image-32.webp", alt: "Image 32" },
  { src: "/images/new_images/image-33.webp", alt: "Image 33" },
  { src: "/images/new_images/image-34.webp", alt: "Image 34" },
  { src: "/images/new_images/image-35.webp", alt: "Image 35" },
  { src: "/images/new_images/image-36.webp", alt: "Image 36" },
  { src: "/images/new_images/image-37.webp", alt: "Image 37" },
  { src: "/images/new_images/image-38.webp", alt: "Image 38" },
  { src: "/images/new_images/image-39.webp", alt: "Image 39" },
  { src: "/images/new_images/image-40.webp", alt: "Image 40" },
  { src: "/images/new_images/image-41.webp", alt: "Image 41" },
  { src: "/images/new_images/image-42.webp", alt: "Image 42" },
  { src: "/images/new_images/image-43.webp", alt: "Image 43" },
  { src: "/images/new_images/image-44.webp", alt: "Image 44" },
  { src: "/images/new_images/image-45.webp", alt: "Image 45" },
  { src: "/images/new_images/image-46.webp", alt: "Image 46" },
  { src: "/images/new_images/image-47.webp", alt: "Image 47" },
  { src: "/images/new_images/image-48.webp", alt: "Image 48" },
  { src: "/images/new_images/image-49.webp", alt: "Image 49" },
  { src: "/images/new_images/image-50.webp", alt: "Image 50" },
];

const Testimonials = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Additional lifestyle images (in a real app, these would be separate from main images)

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % images.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(
        selectedImage === 0 ? images.length - 1 : selectedImage - 1
      );
    }
  };
  return (
    <>
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Testimonials */}
          <div className="text-center mb-12 sm:mb-16 animate-slide-up">
            <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-stone mb-4 sm:mb-6">
              Stories from Fellow Adventurers
            </h2>
            <p className="text-lg sm:text-xl text-stone/80 max-w-3xl mx-auto font-poppins">
              Real experiences from couples, families, and solo travelers who
              found their perfect escape at Pawna Camps.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden p-0 gap-0"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Category Badge */}
                <div
                  className={`px-4 sm:px-6 py-3 sm:py-4 text-center font-bold text-white ${
                    testimonial.category === "Couple"
                      ? "bg-gradient-to-r from-[#ff6b6b] to-pink-500"
                      : testimonial.category === "Family"
                      ? "bg-gradient-to-r from-[#4caf50] to-green-600"
                      : "bg-gradient-to-r from-blue-400 to-blue-500"
                  }`}
                >
                  {testimonial.category === "Couple" && (
                    <Heart className="w-4 sm:w-5 h-4 sm:h-5 inline mr-2" />
                  )}
                  {testimonial.category === "Family" && (
                    <Star className="w-4 sm:w-5 h-4 sm:h-5 inline mr-2" />
                  )}
                  {testimonial.category === "Solo" && (
                    <Camera className="w-4 sm:w-5 h-4 sm:h-5 inline mr-2" />
                  )}
                  <span className="text-sm sm:text-base">
                    {testimonial.category} Adventure
                  </span>
                </div>

                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center mb-3 sm:mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 sm:w-5 h-4 sm:h-5 fill-yellow-600 text-yellow-600"
                      />
                    ))}
                  </div>
                  <p className="text-stone/80 mb-4 sm:mb-6 italic font-poppins leading-relaxed text-sm sm:text-base">
                    &quot;{testimonial.text}&quot;
                  </p>
                  <div className="flex items-center space-x-3 sm:space-x-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 sm:w-14 h-12 sm:h-14 rounded-full object-cover shadow-lg"
                    />
                    <div>
                      <div className="font-bold text-stone font-playfair text-base sm:text-lg">
                        {testimonial.name}
                      </div>
                      <div className="text-xs sm:text-sm text-stone/60 font-poppins">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Instagram Feed */}
          <div id="gallery" className="text-center mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-3xl md:text-4xl font-playfair font-bold text-stone mb-4 sm:mb-6">
              #MyPawnaLakeCamping
            </h3>
            <p className="text-base sm:text-lg text-stone/80 mb-6 sm:mb-8 font-poppins">
              Follow our journey and share your own magical moments with fellow
              nature lovers
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {images.map((post, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-square group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={post.src}
                  width={0}
                  height={0}
                  unoptimized
                  loading="lazy"
                  alt={`Instagram post ${index + 1}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />

                <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-3 sm:w-4 h-3 sm:h-4 text-stone" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8 sm:mt-12">
            <p className="text-stone/60 font-poppins mb-3 sm:mb-4 text-sm sm:text-base">
              Share your adventure moments and get featured!
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
              <span className="w-max bg-gradient-to-r from-[#4caf50] to-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
                #MyPawnaLakeCamping
              </span>
              {/* <span className="w-max bg-gradient-to-r from-[#ff6b6b] to-pink-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              @Pawna Camps_official
            </span> */}
            </div>
          </div>
        </div>
      </section>

      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#d69e2e] transition-colors"
          >
            <X className="w-8 h-8" />
          </button>

          <button
            onClick={prevImage}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-[#d69e2e] transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>

          <button
            onClick={nextImage}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-[#d69e2e] transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <img
            src={images[selectedImage].src}
            alt={`Experience ${selectedImage + 1}`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </>
  );
};

export default Testimonials;
