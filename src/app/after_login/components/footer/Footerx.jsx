'use client'
import Image from "next/image"

export default function Footerx() {
  return (
  <footer className="bg-dark-green-1 h-fit" id='footerx'>
    <div className="max-w-screen space-y-8 pt-8 lg:space-y-12">
      <div className="flex flex-col lg:flex-row gap-x-8 space-y-6 lg:space-y-0 grid-cols-2 lg:grid-cols-4 lg:pt-0 px-8 lg:px-32">
        <div className="w-full flex justify-start lg:justify-center items-center">
          <ul className="mt-6 space-y-4 text-md lg:text-xl">

            <p className="font-bold text-xl lg:text-2xl mb-4 lg:mb-8 text-white">Rental Bahari</p>
            
            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                About Us
              </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                Blog
              </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                Press Releases
              </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                Career
              </a>
            </li>

          </ul>
        </div>

        <div className="w-full flex justify-start lg:justify-center items-center">
          <ul className="mt-6 space-y-4 ttext-md lg:text-xl">

            <p className="font-bold text-xl lg:text-2xl mb-4 lg:mb-8 text-white">Support</p>
            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                Contact Us
              </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                Terms & Conditions
              </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="text-white transition hover:opacity-75">
                FAQ
              </a>
            </li>
            
          </ul>
        </div>

    </div>

    <div className="bg-dark-green-2 px-8 lg:px-28 h-[80px] flex items-center gap-x-8 justify-start">
    
      <div className="w-full flex items-center lg:justify-center">
        <ul className="flex gap-4 lg:gap-6 sm:mt-0">
          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:opacity-75"
            >
              <span className="sr-only">Facebook</span>
              <div className="h-8 w-8">
              <Image
                src={'/assets/facebook.svg'}
                 width={32}
                 height={32}
                alt=""  
              >
              </Image>
              </div>
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:opacity-75"
            >
              <span className="sr-only">Twitter</span>
              <div className="h-8 w-8">
              <Image
                src={'/assets/X.svg'}
                 width={32}
                 height={32}
                alt=""  
              >
              </Image>
              </div>
            </a>
          </li>

          <li>
            <a
              href="/"
              rel="noreferrer"
              target="_blank"
              className="text-white transition hover:opacity-75"
            >
              <span className="sr-only">Instagram</span>
              <div className="h-8 w-8">
              <Image
                src={'/assets/ig.svg'}
                 width={32}
                 height={32}
                alt=""  
              >
              </Image>
              </div>
            </a>
          </li>

        </ul>
      </div>
    
      <div className="w-full flex justify-center items-center">
        <p className="text-xs text-gray-500"></p>
      </div>

    </div>
    
  </div>
</footer>
  )
}
