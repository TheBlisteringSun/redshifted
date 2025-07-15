export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          Get in Touch
        </h2>
        
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
          <p className="text-lg text-gray-600 mb-6">
            Ready to join the Redshifted community? We&apos;d love to hear from you!
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a 
                href="mailto:hello@redshifted.org" 
                className="text-red-600 hover:text-red-700 transition-colors"
              >
                hello@redshifted.org
              </a>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Follow Us</h3>
              <a 
                href="https://instagram.com/redshifted" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700 transition-colors"
              >
                @redshifted on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 