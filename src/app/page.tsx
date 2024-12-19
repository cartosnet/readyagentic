'use client'

import Image from 'next/image'
import Link from 'next/link'
import {
  CpuChipIcon,
  RocketLaunchIcon,
  BookOpenIcon,
  UserGroupIcon,
  LightBulbIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: <CpuChipIcon className="w-6 h-6" />,
    title: 'Comprendre l\'Agentic AI',
    description: "Apprenez les fondamentaux de cette révolution technologique pour ne pas rester à la traîne.",
  },
  {
    icon: <RocketLaunchIcon className="w-6 h-6" />,
    title: 'Petites Victoires',
    description: "Célébrez chaque étape avec des objectifs simples et atteignables.",
  },
  {
    icon: <UserGroupIcon className="w-6 h-6" />,
    title: 'Communauté Active',
    description: "Rejoignez un groupe d\'apprenants pour partager, échanger et grandir ensemble.",
  },
  {
    icon: <LightBulbIcon className="w-6 h-6" />,
    title: 'Recherche Guidée',
    description: "Accédez à des ressources structurées pour maximiser votre apprentissage.",
  },
  {
    icon: <SparklesIcon className="w-6 h-6" />,
    title: 'Exploration du Futur',
    description: "Anticipez les tendances et préparez-vous aux changements à venir.",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-sm border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-white">
                ReadyAgentic
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-sm text-white/70 hover:text-white">
                Découvrir
              </Link>
              <Link href="#community" className="text-sm text-white/70 hover:text-white">
                Communauté
              </Link>
              <Link href="#resources" className="text-sm text-white/70 hover:text-white">
                Ressources
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                href="/auth?view=sign-up"
                className="bg-[#FFBE1A] text-black text-sm px-4 py-2 rounded-lg hover:bg-[#FFBE1A]/90"
              >
                Rejoindre
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl sm:text-6xl font-bold text-white leading-[1.1] tracking-tight mb-6">
                Préparons-nous à l'ère<br />de l'Agentic AI
              </h1>
              <p className="text-lg text-white/70 mb-8 leading-relaxed">
                Une nouvelle ère commence : l'Agentic AI va transformer nos vies et nos métiers. Rejoignez une
                communauté dédiée à l\'apprentissage collaboratif et préparez-vous pour l'avenir.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#community"
                  className="inline-flex justify-center items-center px-6 py-3 rounded-lg bg-[#FFBE1A] text-black font-medium hover:bg-[#FFBE1A]/90 transition-colors"
                >
                  Rejoindre la Communauté
                </Link>
                <Link
                  href="#resources"
                  className="inline-flex justify-center items-center px-6 py-3 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 transition-colors"
                >
                  Explorer les Ressources
                </Link>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px]">
              <Image
                src="/Saas-Header.png"
                alt="Illustration Agentic AI"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            <div>
              <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-white/90 to-white/60 bg-clip-text text-transparent">
                Les Bases pour l'Ère Agentic
              </h2>
              <p className="text-lg text-white/60 max-w-3xl">
                Découvrez les piliers essentiels pour comprendre et tirer parti des opportunités offertes par
                l'Agentic AI.
              </p>
            </div>

            {/* Feature Icons */}
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-white/80 text-sm font-medium">{feature.title}</h3>
                  <p className="text-white/60 text-xs text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Rejoignez une Communauté Inspirante</h2>
          <p className="text-lg text-white/70 mb-8">
            Connectez-vous avec des apprenants et des professionnels passionnés pour partager des idées,
            échanger des expériences et progresser ensemble dans un environnement collaboratif.
          </p>
          <Link
            href="https://discord.com"
            className="bg-[#FFBE1A] text-black text-sm px-6 py-3 rounded-lg hover:bg-[#FFBE1A]/90 transition-colors"
          >
            Rejoindre le Discord
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-4 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <p className="text-white/60">© 2024 ReadyAgentic. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
