"use client"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import InitiativeCard from '@/components/InitiativeCard'
import EventsList from '@/components/EventsList'
import ContactSection from '@/components/ContactSection'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  const events = [
    {
      id: '1',
      title: 'Next workshop: July 15 @ Nepean Library',
      date: 'July 15, 2024',
      location: 'Nepean Library'
    },
    {
      id: '2',
      title: 'Catalyst pre-reg opens August 1',
      date: 'August 1, 2024'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main>
        {/* Landing Page Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Welcome to <span className="text-red-600">Redshifted</span>
            </h1>
            
            {/* Mission Statement */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Empowering Ottawa's youth through hands-on STEM experiences, fostering innovation, and building the next generation of creators and problem-solvers.
            </p>
            
            {/* Founder's Note */}
            <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border border-gray-200">
              <p className="text-gray-700 italic">
                "We believe every student deserves the opportunity to explore, create, and innovate. Redshifted is more than just workshops and hackathons—it's a community where curiosity meets opportunity."
              </p>
              <p className="text-sm text-gray-500 mt-2">— Redshifted Team</p>
            </div>
            
            {/* Call to Action */}
            <Button 
              asChild
              className="bg-red-600 hover:bg-red-700 text-white font-medium py-4 px-8 rounded-lg text-lg transition-colors shadow-lg"
            >
              <a href="#initiatives">
                Explore Our Work
              </a>
            </Button>
          </div>
        </section>

        {/* Initiatives Section */}
        <section id="initiatives" className="px-4 py-16 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
              Our Initiatives
            </h2>
            
            <div className="space-y-6 sm:space-y-8">
              <InitiativeCard
                title="Hardware Workshops"
                description="Beginner-friendly, in-person hardware workshops around Ottawa for high schoolers."
                buttonText="Learn More"
                buttonHref="#contact"
              />
              
              <InitiativeCard
                title="Catalyst Hackathon"
                description="Catalyst is Ottawa's first hardware hackathon — made for total beginners."
                buttonText="Get Involved"
                buttonHref="#contact"
              />
            </div>
          </div>
        </section>

        {/* Events Section */}
        <section id="events" className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <EventsList events={events} />
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}