import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { CheckCircle, ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-slate-50 pt-32 pb-20 lg:pt-40 lg:pb-32">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-8">
              <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
              Now Taking Reservations
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
              Exquisite Culinary Experiences
            </h1>
            
            <p className="text-xl text-slate-600 mb-10 leading-relaxed">
              Elevate your dining with our artisanal cuisine, premium beverages, and impeccable service that transforms every meal into an unforgettable experience.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link 
                href="#contact" 
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Reserve Your Table
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                href="#menu" 
                className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-lg font-semibold hover:bg-slate-50 transition-colors flex items-center justify-center"
              >
                View Menu
              </Link>
            </div>
            
            <div className="flex items-center gap-6 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Michelin-Trained Chefs</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span>Farm-to-Table Fresh</span>
              </div>
            </div>
          </div>
          
          {/* Image Card */}
          <div className="lg:w-1/2 w-full">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl transform rotate-2 opacity-70"></div>
              <div className="relative rounded-xl shadow-2xl w-full aspect-[4/3] overflow-hidden border border-white/50">
                <Image 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=1200" 
                  alt="Elegant dining experience at Maison Élégante" 
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-slate-100 max-w-xs hidden md:block">
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900">4.9/5.0 Rating</p>
                    <p className="text-xs text-slate-500">500+ Happy Diners</p>
                  </div>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 w-[98%] h-full rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
