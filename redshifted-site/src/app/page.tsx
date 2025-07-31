"use client"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import InitiativeCard from '@/components/InitiativeCard'
import EventsList from '@/components/EventsList'
import FAQSection from '@/components/FAQSection'
import ContactSection from '@/components/ContactSection'
import AboutUsSection from '@/components/AboutUs'
import { Button } from '@/components/ui/button'

export default function HomePage() {
  const events = [
    {
      id: '1',
      title: 'Hardware Workshop - from Zero to Hero: TBD @ Beaverbrook Library',
      date: 'mm/dd, 2025',
      location: 'Beaverbrook Library'
    },
    {
      id: '2',
      title: 'Catalyst Pre-Registration - Opens August 1',
      date: 'August 1, 2025',
      location: 'Online'
    }
  ]

  const faqs = [
    {
      id: '1',
      question: 'Who can participate in Redshifted programs?',
      answer: 'Our programs are designed for high school students in the Ottawa area. Whether you\'re a complete beginner or have some experience with technology, we welcome all skill levels!'
    },
    {
      id: '2',
      question: 'Do I need to bring my own equipment?',
      answer: 'No! We provide all the necessary hardware and tools for our workshops. Just bring your curiosity and enthusiasm to learn.'
    },
    {
      id: '3',
      question: 'How much do workshops and events cost?',
      answer: 'We aim to make all our programs as accessible as possible, however some programs have a fee due to the high operating costs. We believe that STEM education should be accessible to everyone, regardless of financial background, which is why we offer need-based waivers. If you need a waiver, please reach out to us at hello@redshifted.ca.'
    },
    {
      id: '4',
      question: "What if I've never coded or worked with hardware before?",
      answer: "That's perfect! Our programs are specifically designed for beginners. We'll teach you everything from the ground up in a supportive, no-pressure environment."
    },
    {
      id: '5',
      question: 'How do I sign up for upcoming events?',
      answer: 'You can reach out to us via email at hello@redshifted.ca or follow us on Instagram @redshifted for the latest updates and registration links.'
    },
    {
      id: '6',
      question: 'Can I volunteer or help organize events?',
      answer: "We aren't currently looking for volunteers, but if you are looking to join the team, sign up for our mailing list where we share updates and you'll be the first to know when applications open!"
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
              Empowering Ottawa&apos;s youth through hands-on STEM experiences, fostering innovation, and building the next generation of creators and problem-solvers.
            </p>
            
            {/* Founder's Note */}
            <div className="bg-white rounded-lg p-6 mb-8 shadow-sm border border-gray-200">
              <p className="text-gray-700 italic">
                &quot;We believe every student deserves the opportunity to explore, create, and innovate. Redshifted is more than just workshops and hackathons—it&apos;s a community where curiosity meets opportunity.&quot;
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
                buttonText="Subscribe to our Newsletter to Learn More"
                buttonHref="https://forms.gle/YFrg5NvHttR1Qek36"
              />
              
              <InitiativeCard
                title="Catalyst Hackathon"
                description="Catalyst is Ottawa's first hardware hackathon — made for total beginners."
                buttonText="Get Involved"
                buttonHref="https://catalyst.redshifted.ca"
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
        {/*About Us Section*/}
        <AboutUsSection  />
        {/* FAQ Section */}
        <FAQSection faqs={faqs} />

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}