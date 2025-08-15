import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Sprout, 
  Users, 
  Lightbulb, 
  BarChart3, 
  Calendar, 
  Search,
  Heart,
  Mail,
  ArrowRight,
  Globe,
  Target,
  Handshake,
  BookOpen
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Sprout className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">PioneerVenture</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium">About</a>
              <a href="#stories" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium">Stories</a>
              <a href="#initiatives" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium">Initiatives</a>
              <a href="#join" className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors duration-200 font-medium">Subscribe</a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-700 hover:text-emerald-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium">About</a>
                <a href="#stories" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium">Stories</a>
                <a href="#initiatives" className="text-gray-700 hover:text-emerald-600 transition-colors duration-200 font-medium">Initiatives</a>
                <a href="#join" className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors duration-200 font-medium text-center">Subscribe</a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-50 to-teal-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Globe className="h-4 w-4" />
              <span>Empowering Change-Makers & Building Sustainable Futures</span>
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Your monthly guide to
              <span className="text-emerald-600 block">social innovation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Discover inspiring stories, powerful ideas, and actionable opportunities to create lasting change. 
              Join grassroots movements and pioneering ventures building a better world.
            </p>
            <a href="#join" className="inline-flex items-center bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              <Mail className="h-5 w-5 mr-2" />
              Join the Movement
              <ArrowRight className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Focus */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Newsletter Focus</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Curated content that matters to change-makers and social innovators worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <Users className="h-12 w-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Stories</h3>
              <p className="text-gray-600">Stories of communities creating meaningful change and grassroots movements making a difference.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <Target className="h-12 w-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Sustainable Development</h3>
              <p className="text-gray-600">Climate action updates and sustainable development initiatives making real impact.</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <Lightbulb className="h-12 w-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Social Entrepreneurship</h3>
              <p className="text-gray-600">Success stories from social entrepreneurs and NGOs creating sustainable solutions.</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <BarChart3 className="h-12 w-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Fundraising Strategies</h3>
              <p className="text-gray-600">Grant opportunities and effective fundraising strategies for social impact projects.</p>
            </div>

            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <Search className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Technology for Good</h3>
              <p className="text-gray-600">Innovative technology solutions addressing social and environmental challenges.</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl hover:shadow-lg transition-shadow duration-300">
              <Heart className="h-12 w-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Volunteer Spotlights</h3>
              <p className="text-gray-600">Field experiences and monthly calls-to-action to get actively involved in change-making.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">About PioneerVenture</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At PioneerVenture, we believe that every step toward progress starts with a pioneering spirit. 
                Our newsletter brings you inspiring stories, powerful ideas, and actionable opportunities to create lasting change.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you're a volunteer, a donor, or an innovator, our updates will help you connect, 
                contribute, and create meaningful impact in communities worldwide.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Globe className="h-5 w-5 text-emerald-600" />
                  <span className="text-gray-700 font-medium">Global Impact</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Users className="h-5 w-5 text-blue-600" />
                  <span className="text-gray-700 font-medium">Community Focus</span>
                </div>
                <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full shadow-sm">
                  <Heart className="h-5 w-5 text-red-600" />
                  <span className="text-gray-700 font-medium">Purpose Driven</span>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:mt-0">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">What You'll Find Inside</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Sprout className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Impact Stories</h4>
                      <p className="text-gray-600">From local villages to global movements</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Lightbulb className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Innovator Spotlights</h4>
                      <p className="text-gray-600">Meet the people building tomorrow</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BarChart3 className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Project Updates</h4>
                      <p className="text-gray-600">Transparent progress reports and outcomes</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Calendar className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Upcoming Initiatives</h4>
                      <p className="text-gray-600">Events, campaigns, and volunteering drives</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <BookOpen className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">How-To Guides</h4>
                      <p className="text-gray-600">For starting your own social impact projects</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section id="stories" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Who We Serve</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our community spans across different sectors, united by a common goal of creating positive change
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center group hover:transform hover:scale-105 transition-transform duration-200">
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors duration-200">
                <Users className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Leaders</h3>
              <p className="text-gray-600">Volunteers and grassroots organizers driving local change</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-transform duration-200">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors duration-200">
                <Lightbulb className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Social Entrepreneurs</h3>
              <p className="text-gray-600">Innovators creating sustainable business solutions for social good</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-transform duration-200">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-purple-200 transition-colors duration-200">
                <Handshake className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">NGOs & Non-profits</h3>
              <p className="text-gray-600">Organizations working on humanitarian and environmental causes</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-transform duration-200">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-orange-200 transition-colors duration-200">
                <BookOpen className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Students & Youth</h3>
              <p className="text-gray-600">Young activists and students passionate about social justice</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-transform duration-200">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-teal-200 transition-colors duration-200">
                <Heart className="h-8 w-8 text-teal-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Donors & Philanthropists</h3>
              <p className="text-gray-600">Impact investors and donors seeking meaningful giving opportunities</p>
            </div>

            <div className="text-center group hover:transform hover:scale-105 transition-transform duration-200">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-green-200 transition-colors duration-200">
                <Globe className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Change-Makers</h3>
              <p className="text-gray-600">Anyone committed to building a more sustainable and equitable world</p>
            </div>
          </div>
        </div>
      </section>

      {/* Join Section */}
      <section id="join" className="py-16 bg-gradient-to-br from-emerald-600 to-teal-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Join the Movement</h2>
          <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
            Be part of a growing network of pioneers making a difference. Receive inspiring stories, 
            action guides, and exclusive opportunities to contribute to meaningful causes — right in your inbox.
          </p>
          
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full px-6 py-4 text-lg rounded-full border border-gray-200 focus:outline-none focus:ring-4 focus:ring-emerald-200 focus:border-emerald-300 transition-all duration-200"
                  required
                />
              </div>
              <button
                type="submit"
                className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl flex items-center justify-center space-x-2"
              >
                <span>Join With Us</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </form>

          <div className="mt-8 flex flex-wrap justify-center gap-6 text-emerald-100">
            <div className="flex items-center space-x-2">
              <Mail className="h-5 w-5" />
              <span>Monthly Updates</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-5 w-5" />
              <span>Inspiring Stories</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="h-5 w-5" />
              <span>Action Opportunities</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="bg-emerald-600 p-2 rounded-lg">
                <Sprout className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">PioneerVenture</span>
            </div>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Empowering change-makers and building sustainable futures through inspiring stories, 
              innovative solutions, and meaningful action opportunities.
            </p>
            <div className="flex justify-center space-x-6">
              <a href="#about" className="text-gray-400 hover:text-white transition-colors duration-200">About</a>
              <a href="#stories" className="text-gray-400 hover:text-white transition-colors duration-200">Stories</a>
              <a href="#initiatives" className="text-gray-400 hover:text-white transition-colors duration-200">Initiatives</a>
              <a href="#join" className="text-gray-400 hover:text-white transition-colors duration-200">Subscribe</a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-gray-400">
              <p>&copy; 2025 PioneerVenture.co. All rights reserved. Building a better world together.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;