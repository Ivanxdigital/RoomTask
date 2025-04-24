import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardCheck, CheckCircle, Home, LayoutGrid, Settings, ArrowRight } from 'lucide-react';
import { scrollToSection } from '../utils/scroll';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <ClipboardCheck className="h-6 w-6 mr-2" />
          <span className="font-bold text-xl">RoomTask</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            href="#features" 
            onClick={scrollToSection('features')} 
            className="text-gray-600 hover:text-black transition-colors"
          >
            Features
          </a>
          <a 
            href="#how-it-works" 
            onClick={scrollToSection('how-it-works')} 
            className="text-gray-600 hover:text-black transition-colors"
          >
            How It Works
          </a>
          <a 
            href="#testimonials" 
            onClick={scrollToSection('testimonials')} 
            className="text-gray-600 hover:text-black transition-colors"
          >
            Testimonials
          </a>
        </nav>
        
        <Link
          to="/app"
          className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800 transition-colors"
        >
          Get Started
        </Link>
      </div>
    </header>
  );
};

const Hero: React.FC = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Room-Based Task Management for Housekeepers
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Organize your housekeeping tasks by room, set priorities, and never miss a detail again.
          </p>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <Link
              to="/app"
              className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-800 transition-colors text-center"
            >
              Try it Free
            </Link>
            <a
              href="#how-it-works"
              onClick={scrollToSection('how-it-works')}
              className="px-6 py-3 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors text-center"
            >
              Learn More
            </a>
          </div>
        </div>
        
        <div className="md:w-1/2 md:pl-10">
          <div className="bg-white p-4 rounded-lg shadow-lg border border-gray-200">
            <div className="bg-gray-100 p-4 rounded-md mb-4">
              <div className="flex items-center mb-3">
                <Home size={18} className="mr-2" />
                <h3 className="font-medium">Master Bedroom</h3>
              </div>
              <div className="space-y-3">
                <div className="flex items-center bg-white p-2 rounded shadow-sm">
                  <div className="w-4 h-4 rounded-full border border-gray-400 mr-2"></div>
                  <span>Change bed linens</span>
                  <span className="ml-auto bg-black text-white text-xs px-2 py-1 rounded">High</span>
                </div>
                <div className="flex items-center bg-white p-2 rounded shadow-sm">
                  <div className="w-4 h-4 rounded-full border border-gray-400 mr-2 flex items-center justify-center bg-black">
                    <CheckCircle size={12} className="text-white" />
                  </div>
                  <span className="line-through text-gray-500">Vacuum floor</span>
                  <span className="ml-auto bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">Low</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <LayoutGrid size={24} />,
      title: 'Room Organization',
      description: 'Organize tasks by room to streamline your housekeeping workflow.'
    },
    {
      icon: <Settings size={24} />,
      title: 'Priority Levels',
      description: 'Set low, medium, or high priority for each task to stay focused.'
    },
    {
      icon: <CheckCircle size={24} />,
      title: 'Task Completion',
      description: 'Mark tasks as complete and track your progress throughout the day.'
    },
    {
      icon: <Home size={24} />,
      title: 'Default Categories',
      description: 'Start with a General category and create custom rooms as needed.'
    }
  ];

  return (
    <section id="features" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 transition-transform duration-200 hover:-translate-y-1">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Create Rooms',
      description: 'Start by setting up rooms that match your housekeeping areas.'
    },
    {
      number: '02',
      title: 'Add Tasks',
      description: 'Create tasks for each room with appropriate priority levels.'
    },
    {
      number: '03',
      title: 'Manage Workflow',
      description: 'Work through tasks room by room, marking them complete as you go.'
    },
    {
      number: '04',
      title: 'Track Progress',
      description: 'Monitor completed and pending tasks to ensure nothing is missed.'
    }
  ];

  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="text-4xl font-bold text-gray-100 mb-4">{step.number}</div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 right-0 transform translate-x-1/2">
                  <ArrowRight size={24} className="text-gray-300" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "RoomTask has completely transformed how I organize my housekeeping duties. I never miss a task anymore.",
      author: "Sarah Johnson",
      role: "Hotel Housekeeping Manager"
    },
    {
      quote: "The room-based organization is perfect for our bed and breakfast. We can track what's done and what needs attention.",
      author: "Michael Chen",
      role: "B&B Owner"
    }
  ];

  return (
    <section id="testimonials" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <p className="text-lg mb-4 italic">"{testimonial.quote}"</p>
              <div>
                <p className="font-semibold">{testimonial.author}</p>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="bg-black text-white rounded-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to streamline your housekeeping?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Start organizing your tasks by room and boost your productivity today.
          </p>
          <Link
            to="/app"
            className="inline-block px-6 py-3 bg-white text-black rounded-md hover:bg-gray-100 transition-colors"
          >
            Get Started Now
          </Link>
        </div>
      </div>
    </section>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <ClipboardCheck className="h-5 w-5 mr-2" />
            <span className="font-bold">RoomTask</span>
          </div>
          
          <div className="text-sm text-gray-600">
            © {new Date().getFullYear()} RoomTask. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};