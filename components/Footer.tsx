import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">TEDxMREC</h3>
            <p className="text-gray-400">Seeds of Social Chain: Uniting Ideas for Change</p>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-400 hover:text-white transition duration-300">About</Link></li>
              <li><Link href="/speakers" className="text-gray-400 hover:text-white transition duration-300">Speakers</Link></li>
              <li><Link href="/schedule" className="text-gray-400 hover:text-white transition duration-300">Schedule</Link></li>
              <li><Link href="/partners" className="text-gray-400 hover:text-white transition duration-300">Partners</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-semibold mb-4">Contact Us</h4>
            <p className="text-gray-400">Email: tedx@mrec.ac.in</p>
            <p className="text-gray-400">Follow us on social media: #TEDxMREC</p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p className="mb-4">This independent TEDx event is operated under license from TED.</p>
          <p>&copy; 2023 TEDxMREC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

