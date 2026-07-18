"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const experiences = [
  {
    title: "Bonfire Nights",
    description: "Relax around the campfire and share stories under the stars",
    icon: "🔥",
    duration: "Until 11:30 PM",
    category: "Relaxation",
    price: "Included",
    color: "from-red-400 to-orange-500",
  },
  {
    title: "Lake Kayaking",
    description:
      "Paddle through the serene waters of Pawana Lake and explore hidden coves",
    icon: "🚣‍♂️",
    duration: "Daytime Activity",
    category: "Adventure",
    price: "On-site pay",
    color: "from-blue-500 to-sky-500",
  },
  {
    title: "Stargazing",
    description: "Marvel at the brilliant night sky away from city lights",
    icon: "✨",
    duration: "Night Activity",
    category: "Relaxation",
    price: "Included",
    color: "from-indigo-500 to-purple-600",
  },
  {
    title: "BBQ & DJ Music",
    description:
      "Savor delicious BBQ while enjoying the sound system and lake views",
    icon: "🍖",
    duration: "Until 9:30 PM",
    category: "Entertainment",
    price: "Included",
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Outdoor Games",
    description:
      "Enjoy badminton, carrom, cricket, and more fun activities at the campsite",
    icon: "🎯",
    duration: "Afternoon Activity",
    category: "Fun",
    price: "Included",
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Nature Hiking",
    description:
      "Discover scenic trails and breathtaking viewpoints around Pawana Lake",
    icon: "🥾",
    duration: "2-3 hours",
    category: "Adventure",
    price: "Included",
    color: "from-green-500 to-emerald-600",
  },
];

const categories = ["All", "Relaxation", "Adventure", "Entertainment", "Fun"];

const Experiences = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredExperiences =
    activeCategory === "All"
      ? experiences
      : experiences.filter((exp) => exp.category === activeCategory);

  return (
    <section
      id="experiences"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-skyblue/10 to-beige"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-4xl  lg:text-6xl font-playfair font-bold text-stone mb-4 sm:mb-6">
            Adventures That Awaken Your Soul
          </h2>
          <p className="text-lg sm:text-xl text-stone/80 max-w-3xl mx-auto font-poppins">
            Immerse yourself in curated experiences that connect you with
            nature, challenge your spirit, and create lasting memories.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeCategory === category
                  ? "bg-moss hover:bg-moss/50 text-white shadow-lg scale-105"
                  : "bg-white text-stone hover:bg-moss/10 border border-moss/20"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredExperiences.map((experience, index) => (
            <Card
              key={index}
              className="group rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift bg-white overflow-hidden p-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Header with gradient */}
                <div
                  className={`p-6 sm:p-8 bg-gradient-to-r ${experience.color} text-white relative overflow-hidden`}
                >
                  <div className="absolute top-2 right-2 text-4xl sm:text-6xl opacity-20">
                    {experience.icon}
                  </div>
                  <div className="relative z-10">
                    <div className="text-3xl sm:text-5xl mb-3 sm:mb-4">
                      {experience.icon}
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                      <h3 className="text-xl sm:text-2xl font-playfair font-bold mb-2 sm:mb-0">
                        {experience.title}
                      </h3>
                      <div className="text-right">
                        <div className="text-lg sm:text-xl font-bold">
                          {experience.price}
                        </div>
                        <div className="text-xs sm:text-sm opacity-90">
                          {experience.duration}
                        </div>
                      </div>
                    </div>
                    <span className="inline-block bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      {experience.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <p className="text-stone/80 font-poppins leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {experience.description}
                  </p>
                  <Button
                    className="w-full bg-moss hover:bg-moss/90 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base py-2 sm:py-3 cursor-pointer"
                    onClick={() =>
                      document
                        .getElementById("bookings")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Book Experience
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Nearby Attractions */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-stone-800 to-stone-800/90 rounded-3xl p-6 sm:p-8 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-playfair font-bold mb-3 sm:mb-4">
            Explore Beyond the Camp
          </h3>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto font-poppins opacity-90">
            Pawna Camps is perfectly surrounded by scenic hills, historic forts
            like Lohagad and Tikona, and close to nearby adventure and trekking
            hotspots.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 text-center">
            {/* Tiger Point */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-coral mb-2">
                20 min
              </div>
              <div className="font-poppins text-sm sm:text-base">
                Tiger Point (Sunset View)
              </div>
            </div>

            {/* Lohagad Fort */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-coral mb-2">
                25 min
              </div>
              <div className="font-poppins text-sm sm:text-base">
                Lohagad Fort Trek
              </div>
            </div>

            {/* Bhushi Dam */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-coral mb-2">
                30 min
              </div>
              <div className="font-poppins text-sm sm:text-base">
                Bhushi Dam & Waterfalls
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;

// const timelineEvents = [
//   {
//     time: "4:00 PM",
//     title: "Check-in",
//     description:
//       "Arrive at the campsite and begin your getaway with a smooth and effortless check-in. Settle into your accommodation and soak in the natural surroundings.",
//     icon: Sun,
//     image: "/images/new_images/image-5.webp",
//     color: "bg-gradient-to-r from-green-400 to-green-600",
//   },
//   {
//     time: "5:00 PM",
//     title: "Tea & Pakora",
//     description:
//       "Enjoy freshly prepared tea and crispy pakoras as you unwind into the evening. A perfect warm-up for a relaxing lakeside experience.",
//     icon: Coffee,
//     image:
//       "https://images.unsplash.com/photo-1604945516204-526aa4fd6425?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     color: "bg-gradient-to-r from-yellow-400 to-amber-500",
//   },
//   {
//     time: "5:30 PM",
//     title: "Outdoor Games & Activities",
//     description:
//       "Have fun with a variety of engaging activities like badminton, cricket, carrom, and more—perfect for families, friends, and adventure lovers.",
//     icon: Drum,
//     image: "/images/new_images/image-18.webp",
//     color: "bg-gradient-to-r from-orange-400 to-orange-600",
//   },
//   {
//     time: "7:30 PM",
//     title: "BBQ & DJ Music",
//     description:
//       "Relish freshly grilled BBQ snacks while enjoying lively DJ music. The perfect mix of great food and great vibes until 9:30 PM.",
//     icon: Flame,
//     image: "/images/new_images/image-16.webp",
//     color: "bg-gradient-to-r from-red-500 to-red-700",
//   },
//   {
//     time: "9:30 PM",
//     title: "Dinner",
//     description:
//       "Savor a wholesome dinner featuring local dishes prepared with authentic flavors. A comforting meal to end your adventure-filled evening.",
//     icon: UtensilsCrossed,
//     image: "https://images.unsplash.com/photo-1742281257707-0c7f7e5ca9c6?q=80",
//     color: "bg-gradient-to-r from-blue-400 to-blue-600",
//   },
//   {
//     time: "10:00 PM",
//     title: "Campfire",
//     description:
//       "Relax around the warm campfire, listen to nature’s sounds, and enjoy meaningful conversations under the night sky.",
//     icon: Flame,
//     image:
//       "https://images.unsplash.com/photo-1533243367503-0b7337004671?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     color: "bg-gradient-to-r from-orange-300 to-orange-600",
//   },
//   {
//     time: "8:30 AM",
//     title: "Breakfast",
//     description:
//       "Start your morning with a hearty breakfast featuring fresh and local flavors—fueling you for the day’s adventures.",
//     icon: Sunrise,
//     image: "https://images.unsplash.com/photo-1673530598977-ee0eda88f0a2?q=80",
//     color: "bg-gradient-to-r from-yellow-300 to-amber-500",
//   },
//   {
//     time: "11:00 AM",
//     title: "Check-out",
//     description:
//       "Wrap up your stay with an easy check-out process and leave with unforgettable lakeside memories.",
//     icon: Sun,
//     image: "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?q=80",
//     color: "bg-gradient-to-r from-green-400 to-green-700",
//   },
// ];
