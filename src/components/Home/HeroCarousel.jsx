import { Mail } from "lucide-react" // Assuming lucide-react is installed
import fashinon from "../../assets/images/fashion.png"
const HeroCarousel = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#e6f7f2] to-[#fde8e8] overflow-hidden">
      <main className="container mx-auto px-4 py-8 md:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2 space-y-6 z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              <span className="block">Classical</span>
              <span className="block text-[#3ECFBA] border-b-4 border-[#3ECFBA] inline-block pb-1">Education</span>
              <span className="block">For The Future</span>
            </h1>
            <p className="text-gray-600 text-lg">
              It is long established fact that reader distracted by the readable content.
            </p>

            {/* Email Subscription Form */}
            <div className="flex flex-col sm:flex-row gap-3 mt-8 max-w-md">
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="pl-10 h-12 w-full bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3ECFBA] focus:border-transparent"
                />
              </div>
              <button className="h-12 px-6 bg-[#FF7E84] hover:bg-[#ff6971] text-white rounded-md transition-colors">
                Get Started Now
              </button>
            </div>
          </div>

          {/* Right Column - Image and Badges */}
          <div className="w-full lg:w-1/2 relative">
            {/* Course Count Badge */}
            <div className="absolute top-16 left-0 md:left-10 z-10 bg-white rounded-lg shadow-lg p-4 flex flex-col items-center">
              <span className="text-[#3ECFBA] text-xl font-bold">2829+</span>
              <span className="text-gray-500 text-sm">Total Courses</span>
            </div>

            {/* Certification Badge */}
            <div className="absolute top-1/4 right-0 md:right-10 z-10">
              <div className="rounded-full bg-gradient-to-r from-[#FFB6B6] to-[#FFC8A2] p-1 w-24 h-24 md:w-28 md:h-28 flex items-center justify-center">
                <div className="rounded-full bg-white p-1 w-[90%] h-[90%] flex flex-col items-center justify-center text-center">
                  <span className="text-[10px] md:text-xs font-semibold text-gray-800">100% CERTIFICATION</span>
                  <span className="text-[10px] md:text-xs font-semibold text-gray-800">QUALITY</span>
                </div>
              </div>
            </div>

            {/* Main Image */}
            <div className="relative h-[400px] md:h-[500px] lg:h-[550px] w-full">
              <img
                src={fashinon} 
                alt="My Local Photo"
                className="object-contain w-full h-full"
              />
              {/* <Carousel/> */}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default HeroCarousel
