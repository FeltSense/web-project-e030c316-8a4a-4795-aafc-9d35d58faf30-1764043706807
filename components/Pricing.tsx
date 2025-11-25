"use client";

import React from 'react';
import { Check, Crown, Shield, Zap, Sparkles, ArrowRight } from 'lucide-react';

const Pricing = () => {
  const features = [
    { icon: Crown, text: 'Luxury responsive design tailored to your brand' },
    { icon: Sparkles, text: 'Premium animations and interactions' },
    { icon: Shield, text: 'Fast, secure, and SEO-optimized' },
    { icon: Zap, text: 'Mobile-first approach for all devices' },
    { icon: Check, text: 'Professional copywriting included' },
    { icon: Check, text: 'Ready to launch in 7 days' },
  ];

  const handleCheckout = () => {
    window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00';
  };

  return (
    <section className="py-24 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-50 to-amber-50 px-4 py-2 rounded-full border border-yellow-200 mb-6">
            <Sparkles className="w-4 h-4 text-yellow-600" />
            <span className="text-sm font-semibold text-yellow-900">Limited Time Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Élégance at an Accessible Price
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your business with a stunning website that captures the essence of luxury
          </p>
        </div>
        
        {/* Pricing Card - Hero Style */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Decorative Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-100 via-amber-50 to-orange-100 rounded-3xl blur-2xl opacity-30 transform scale-95"></div>
            
            {/* Main Card */}
            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
              {/* Premium Badge */}
              <div className="absolute top-8 right-8 bg-gradient-to-r from-yellow-500 to-amber-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg transform rotate-3">
                BEST VALUE
              </div>
              
              {/* Content */}
              <div className="p-12 md:p-16">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-gray-900 mb-3">
                    Complete Website Package
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 max-w-xl mx-auto">
                    Everything you need for a professional online presence
                  </p>
                  
                  {/* Price - Large and Prominent */}
                  <div className="mb-8">
                    <div className="flex items-start justify-center gap-2 mb-2">
                      <span className="text-3xl font-bold text-gray-900 mt-4">$</span>
                      <span className="text-7xl md:text-8xl font-bold bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 bg-clip-text text-transparent">
                        29
                      </span>
                    </div>
                    <p className="text-gray-600 text-lg">One-time payment • No hidden fees</p>
                  </div>
                </div>
                
                {/* Features Grid */}
                <div className="grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto">
                  {features.map((feature, index) => {
                    const Icon = feature.icon;
                    return (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl flex items-center justify-center flex-shrink-0 border border-yellow-200">
                          <Icon className="w-5 h-5 text-yellow-700" />
                        </div>
                        <span className="text-gray-700 font-medium pt-2">{feature.text}</span>
                      </div>
                    );
                  })}
                </div>
                
                {/* CTA Button */}
                <div className="text-center">
                  <button
                    onClick={handleCheckout}
                    className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-gray-900 to-gray-800 hover:from-gray-800 hover:to-gray-700 text-white font-bold px-12 py-5 rounded-xl transition-all transform hover:scale-105 shadow-2xl text-lg group"
                  >
                    Get Your Luxury Website - $29
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                  </button>
                  
                  <p className="text-center text-sm text-gray-500 mt-6 flex items-center justify-center gap-2">
                    <Shield className="w-4 h-4" />
                    Secure payment powered by Stripe • 100% satisfaction guaranteed
                  </p>
                </div>
              </div>
              
              {/* Bottom Accent */}
              <div className="h-2 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500"></div>
            </div>
          </div>
        </div>
        
        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500 text-sm">
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>7-Day Delivery</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Professional Quality</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>Responsive Design</span>
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-5 h-5 text-green-600" />
              <span>SEO Optimized</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
