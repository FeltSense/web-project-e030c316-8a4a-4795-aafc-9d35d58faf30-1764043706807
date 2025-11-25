import React from 'react';
import Image from 'next/image';
import { Calendar, BookOpen, ChefHat, Sparkles } from 'lucide-react';

const Services = () => {
  return (
    <section className="py-24 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Expérience Culinaire Exceptionnelle
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez nos services exclusifs pour une expérience gastronomique inoubliable
          </p>
        </div>
        
        {/* Bento Grid Layout */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Large Featured Card 1 - Spans 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
            <div className="relative h-64">
              <Image 
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=80" 
                alt="Elegant restaurant interior"
                fill
                className="object-cover"
              />
              <div className="absolute top-6 left-6 bg-blue-600 p-3 rounded-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Réservation en Ligne
              </h3>
              <p className="text-gray-600 mb-4">
                Réservez votre table en quelques clics grâce à notre système intelligent. Sélectionnez votre date, heure et nombre de convives pour garantir votre place dans notre établissement.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                  Disponibilité en temps réel
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                  Confirmation instantanée
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                  Modification facile
                </li>
              </ul>
            </div>
          </div>

          {/* Small Icon Card 1 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
            <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
              <BookOpen className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Carte & Accords Mets-Vins
            </h3>
            <p className="text-gray-600">
              Explorez notre menu gastronomique avec des suggestions d'accords parfaits. Chaque plat est accompagné de recommandations de notre sommelier.
            </p>
          </div>

          {/* Small Icon Card 2 */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8">
            <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
              <ChefHat className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3">
              Notre Chef & Philosophie
            </h3>
            <p className="text-gray-600">
              Découvrez l'univers culinaire de notre Chef étoilé et sa vision de la gastronomie française contemporaine, alliant tradition et innovation.
            </p>
          </div>

          {/* Large Featured Card 2 - Spans 2 columns */}
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow overflow-hidden">
            <div className="relative h-64">
              <Image 
                src="https://images.unsplash.com/photo-1519167758481-83f29da8c43f?w=800&q=80" 
                alt="Private dining room"
                fill
                className="object-cover"
              />
              <div className="absolute top-6 left-6 bg-blue-600 p-3 rounded-lg">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                Salons Privés & Événements
              </h3>
              <p className="text-gray-600 mb-4">
                Organisez vos événements professionnels ou personnels dans nos salons privés luxueux. Menu personnalisé, service dédié et ambiance raffinée pour des moments exceptionnels.
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                  Capacité de 10 à 50 personnes
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                  Menu sur mesure avec notre Chef
                </li>
                <li className="flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                  Équipement audiovisuel disponible
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
