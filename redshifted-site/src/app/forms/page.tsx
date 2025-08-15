"use client"

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import ContactSection from '@/components/ContactSection'
import PromoBanner from '@/components/promo';

export default function HomePage() {

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <PromoBanner/>
      <main>
        {/* Landing Page Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Our <span className="text-red-600">Form</span>
            </h1>
            
            {/* Mission Statement */}
            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Use this form to contact us for any questions!
            </p>
            <div className="max-w-3xl mx-auto bg-white rounded-lg p-8 shadow-sm border border-gray-200">
                <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdN4D4pCHcMQobFY_wMQiusSnUT5RC3ZauwtbtqoPKsD4R_ng/viewform?embedded=true"
                width="640"
                height="846"
                frameBorder={0}  // Numeric value instead of string "0"
                title="Google Form"
                >
                Loading…
                </iframe>
          </div>
          </div>
        </section>

        {/* Contact Section */}
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}