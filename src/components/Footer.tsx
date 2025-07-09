export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <div className="mb-4">
            <span className="text-xl font-bold text-red-600">Redshifted</span>
          </div>
          <p className="text-gray-600 mb-4 max-w-md mx-auto">
            Empowering Ottawa&apos;s youth through hands-on STEM experiences and innovative learning opportunities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-500">
            <a 
              href="mailto:programs@redshifted.ca" 
              className="hover:text-red-600 transition-colors"
            >
              programs@redshifted.ca
            </a>
            <a 
              href="https://instagram.com/redshifted.ottawa" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-red-600 transition-colors"
            >
              @redshifted.ottawa
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
} 