export default function ContactSection() {
  return (
    <section id="contact" className="px-4 py-16 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8">
          Get in Touch
        </h2>
        
        <div className="bg-white rounded-lg p-8 shadow-sm border border-gray-200">
          <p className="text-lg text-gray-600 mb-6">
            Questions about our programs? Email us here!
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <a 
                href="mailto:programs@redshifted.ca" 
                className="text-red-600 hover:text-red-700 transition-colors"
              >
                programs@redshifted.ca
              </a>
            </div>
            
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Follow Us</h3>
              <a 
                href="https://instagram.com/redshifted.ottawa" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-red-600 hover:text-red-700 transition-colors"
              >
                @redshifted.ottawa on Instagram
              </a>
            </div>
          <p className="text-lg text-gray-600 mb-6">
            For sponsorship inquries, email <a href="mailto:andy.han@redshifted.ca" className="text-red-600 hover:text-red-700 transition-colors">andy.han2027@gmail.com</a>
          </p>
          <br></br>
           <p className="text-lg text-gray-600 mb-6">
            Want to contact us for other questions? Fill out this form here!
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">Form</h3>
              <a 
                href="https://forms.gle/wqgiuwzkiacNMm62A" 
                className="text-red-600 hover:text-red-700 transition-colors"
              >
                Contact Form
              </a>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 