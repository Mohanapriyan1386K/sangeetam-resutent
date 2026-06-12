'use client';

import { useState } from 'react';

export default function Home() {
  const [reviewIndex, setReviewIndex] = useState(0);

  const reviews = [
    {
      author: "Ramesh Kumar",
      rating: 5,
      text: "Best authentic South Indian food in the city! The dosa is crispy and the sambar is perfect. Highly recommended!"
    },
    {
      author: "Priya Sharma",
      rating: 5,
      text: "Family-friendly atmosphere with excellent service. Fresh ingredients and traditional recipes. Will definitely visit again!"
    },
    {
      author: "Arjun Reddy",
      rating: 5,
      text: "The paneer butter masala is outstanding! Quick service and spacious dining area. A must-visit for South Indian cuisine lovers."
    }
  ];

  const dishes = [
    {
      name: "Mini Tiffin",
      description: "Assorted South Indian breakfast items"
    },
    {
      name: "Dosa Varieties",
      description: "Masala, Ghee, Paneer, and special dosas"
    },
    {
      name: "Paneer Butter Masala",
      description: "Creamy and delicious cottage cheese curry"
    },
    {
      name: "South Indian Meals",
      description: "Complete vegetarian meal with sambar and rasam"
    },
    {
      name: "Chilly Gobi",
      description: "Crispy cauliflower with spicy seasoning"
    },
    {
      name: "Fresh Juices",
      description: "Orange, pomegranate, and mixed fruit juices"
    }
  ];

  const features = [
    { icon: "🍳", title: "Freshly Prepared Food", desc: "Made to order with quality ingredients" },
    { icon: "👨‍👩‍👧‍👦", title: "Family Dining", desc: "Comfortable and welcoming atmosphere" },
    { icon: "⭐", title: "Quality Ingredients", desc: "Premium vegetables and authentic spices" },
    { icon: "⚡", title: "Fast Service", desc: "Quick preparation without compromise" },
    { icon: "🅿️", title: "Spacious Parking", desc: "Ample parking space available" },
    { icon: "❄️", title: "Air Conditioned", desc: "Comfortable climate-controlled dining" }
  ];

  return (
    <main className="w-full overflow-hidden bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-600 flex items-center justify-center">
              <span className="text-white font-bold text-lg">🍽️</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">Sree Sangeetham</h1>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#menu" className="text-gray-700 hover:text-orange-600 transition">Menu</a>
            <a href="#about" className="text-gray-700 hover:text-orange-600 transition">About</a>
            <a href="#contact" className="text-gray-700 hover:text-orange-600 transition">Contact</a>
          </div>
          <button className="bg-orange-600 text-white px-6 py-2 rounded-lg hover:bg-orange-700 transition">
            Reserve Table
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section pt-20 pb-16 md:pb-24 bg-gradient-to-b from-orange-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="hero-title text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Taste the Tradition, Served Fresh
              </h2>
              <p className="hero-subtitle text-lg text-gray-600">
                Experience authentic South Indian flavors in a family-friendly atmosphere. Fresh ingredients, traditional recipes, memorable dining.
              </p>
              <div className="flex gap-4 flex-wrap">
                <button className="hero-btn-primary bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-700 transition font-semibold">
                  View Menu
                </button>
                <button className="hero-btn-secondary border-2 border-orange-600 text-orange-600 px-8 py-3 rounded-lg hover:bg-orange-50 transition font-semibold">
                  Reserve Table
                </button>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-orange-300 to-red-500">
              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center space-y-4">
                  <span className="text-6xl">🍜</span>
                  <p className="text-2xl font-semibold">South Indian Cuisine</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section id="about" className="about-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            About Hotel Sree Sangeetham
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="about-content space-y-4 text-gray-700">
              <p className="text-lg leading-relaxed">
                Welcome to Hotel Sree Sangeetham, your destination for authentic South Indian cuisine. We pride ourselves on delivering the best dining experience with our family-friendly atmosphere and hygienic kitchen standards.
              </p>
              <p className="text-lg leading-relaxed">
                Our commitment to quality ingredients and traditional recipes ensures every meal is a memorable experience. Whether you're craving classic dosas, paneer butter masala, or our special South Indian meals, we serve authentic vegetarian cuisine prepared with care.
              </p>
              <ul className="space-y-3 mt-6">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  <span>Family-friendly restaurant atmosphere</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  <span>Hygienic kitchen and food preparation</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  <span>Authentic vegetarian cuisine</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-2xl">✓</span>
                  <span>Comfortable dining experience</span>
                </li>
              </ul>
            </div>
            <div className="about-image relative h-80 rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-green-400 to-blue-500">
              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center space-y-4">
                  <span className="text-6xl">🍲</span>
                  <p className="text-xl font-semibold">Authentic Recipes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section id="menu" className="menu-section py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4">
            Popular Dishes
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Discover our most loved South Indian delicacies
          </p>
          <div className="menu-grid grid md:grid-cols-3 gap-8">
            {dishes.map((dish, idx) => (
              <div key={idx} className="menu-card bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition border border-gray-100">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-300 to-red-500 flex items-center justify-center mb-4 text-3xl">
                  🍽️
                </div>
                <h3 className="menu-name text-xl font-semibold text-gray-900 mb-2">{dish.name}</h3>
                <p className="menu-description text-gray-600">{dish.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features-section py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us
          </h2>
          <div className="features-grid grid md:grid-cols-3 gap-8">
            {features.map((feature, idx) => (
              <div key={idx} className="feature-card bg-gradient-to-br from-white to-orange-50 rounded-xl p-8 border border-orange-100 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="feature-title text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="feature-desc text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Food Gallery */}
      <section className="gallery-section py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Food Gallery
          </h2>
          <div className="gallery-grid grid md:grid-cols-4 gap-6">
            {[...Array(8)].map((_, idx) => (
              <div key={idx} className="gallery-item relative h-64 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition cursor-pointer group">
                <div className="w-full h-full bg-gradient-to-br from-orange-300 to-red-500 flex items-center justify-center text-white text-5xl group-hover:scale-110 transition">
                  🍜
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="reviews-section py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Customer Reviews
          </h2>
          <div className="reviews-carousel bg-gradient-to-br from-orange-50 to-white rounded-2xl p-8 border border-orange-100">
            <div className="space-y-4">
              <div className="flex gap-1">
                {[...Array(reviews[reviewIndex].rating)].map((_, i) => (
                  <span key={i} className="text-2xl">⭐</span>
                ))}
              </div>
              <p className="text-gray-700 text-lg">{reviews[reviewIndex].text}</p>
              <p className="text-gray-900 font-semibold">{reviews[reviewIndex].author}</p>
            </div>
            <div className="flex justify-center gap-4 mt-8">
              <button 
                onClick={() => setReviewIndex((prev) => (prev - 1 + reviews.length) % reviews.length)}
                className="review-btn-prev px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
              >
                ← Previous
              </button>
              <button 
                onClick={() => setReviewIndex((prev) => (prev + 1) % reviews.length)}
                className="review-btn-next px-6 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 transition"
              >
                Next →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section py-20 bg-gradient-to-b from-orange-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="section-title text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Contact Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="contact-info space-y-8">
              <div className="contact-item flex items-start gap-4">
                <span className="text-4xl">📍</span>
                <div>
                  <h3 className="contact-label font-semibold text-gray-900 mb-1">Address</h3>
                  <p className="text-gray-600">Sathy Road, Kovilpalayam<br/>Tamil Nadu, India</p>
                </div>
              </div>
              <div className="contact-item flex items-start gap-4">
                <span className="text-4xl">📞</span>
                <div>
                  <h3 className="contact-label font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-600">+91-XXX-XXX-XXXX</p>
                </div>
              </div>
              <div className="contact-item flex items-start gap-4">
                <span className="text-4xl">🕐</span>
                <div>
                  <h3 className="contact-label font-semibold text-gray-900 mb-1">Opening Hours</h3>
                  <p className="text-gray-600">Mon - Sun: 10:00 AM - 10:00 PM<br/>Closed on every 2nd Monday</p>
                </div>
              </div>
            </div>
            <div className="contact-map relative h-96 rounded-2xl overflow-hidden shadow-lg bg-gradient-to-br from-blue-300 to-blue-600">
              <div className="w-full h-full flex items-center justify-center text-white">
                <div className="text-center space-y-4">
                  <span className="text-6xl">🗺️</span>
                  <p className="text-xl font-semibold">Google Maps Integration</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="footer-title font-semibold mb-4">About</h4>
              <p className="text-gray-400 text-sm">Premium South Indian restaurant offering authentic cuisine and family dining experience.</p>
            </div>
            <div>
              <h4 className="footer-title font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><a href="#menu" className="hover:text-white transition">Menu</a></li>
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="footer-title font-semibold mb-4">Follow Us</h4>
              <div className="social-links flex gap-4">
                <a href="#" className="text-gray-400 hover:text-orange-600 transition text-2xl">f</a>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition text-2xl">𝕏</a>
                <a href="#" className="text-gray-400 hover:text-orange-600 transition text-2xl">📷</a>
              </div>
            </div>
            <div>
              <h4 className="footer-title font-semibold mb-4">Hours</h4>
              <p className="text-gray-400 text-sm">Monday - Sunday<br/>10:00 AM - 10:00 PM</p>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-400 text-sm">© 2024 Hotel Sree Sangeetham. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
