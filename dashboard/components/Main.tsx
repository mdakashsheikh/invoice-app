import React from 'react'
import iPhone from '../public/iPhone-12-Mockup.png'
import googleWeb from '../public/Google-Logo.webp'
import shopifyLogo from '../public/Shopify-Logo.svg'
import cloudflare from '../public/Cloudflare-Logo.svg'
import paypalLogo from '../public/PayPal-Logo.png'
import webLogo from '../public/weebDeev.webp'
import Image from 'next/image'

const Main = () => {
  return (
    <section className="text-gray-600 body-font">
        <div className="max-w-7xl mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 md:ml-24 pt-6 flex flex-col md:items-start md:text-left mb-40 items-center text-center">
            <h1 className="mb-5 md:text-6xl text-2xl font-semibold items-center Avenir xl:w-2/2 text-gray-800">
            We are making Stunning Websites
            </h1>
            <p className="mb-4 xl:w-3/4 text-gray-600 text-lg">
            nine4 is a free to use website template for websites made with
            Next.js and styled with Tailwind CSS
            </p>
            <div className="flex justify-center">
            <a
                className="bg-black text-white inline-flex items-center px-5 py-3 mt-2 font-medium transition duration-500 ease-in-out transform border rounded-lg"
                href="https://my-portfolio-iota-two-84.vercel.app"
            >
                <span className="justify-center">Portfolio</span>
            </a>
            </div>
        </div>
        <div className="xl:mr-44 sm:mr-0 sm:mb-28 mb-0 lg:mb-0 mr-48 md:pl-10">
            <Image className="w-80 md:ml-1 ml-24" src={iPhone} alt='oPhone'/>
        </div>
        </div>
        <section className="mx-auto">
        <div className="container px-5 mx-auto lg:px-24 ">
            <div className="flex flex-col w-full mb-4 text-left lg:text-center">
            <h1 className="mb-8 text-base md:text-2xl Avenir font-semibold text-black">
                Trusted by top-tier product companies
            </h1>
            </div>
            <div className="grid grid-cols-2 gap-16 mb-16 text-center lg:grid-cols-4">
            <div className="flex items-center justify-center">
                <Image className="block object-contain h-16 greyC" src={googleWeb} alt='google'/>
            </div>
            <div className="flex items-center justify-center">
                <Image className='block object-contain h-16 greyC' src={shopifyLogo} alt=''/>
            </div>
            <div className="flex items-center justify-center">
                <Image className='block object-contain h-16 greyC' src={cloudflare} alt=''/>
            </div>
            <div className="flex items-center justify-center">
                <Image className='block object-contain h-16 greyC' src={paypalLogo} alt=''/>
            </div>
            </div>
        </div>
        </section>
        <div className="grr max-w-7xl pt-20 mx-auto text-center">
        <h1 className="mb-8 text-2xl md:text-6xl Avenir font-semibold text-gray-800">
            Less code, less effort.
        </h1>
        <h1 className="mb-8 text-base md:text-2xl Avenir font-semibold text-gray-500 text-center">
            Minify your CSS with Tailwind's built in PostCSS support.
        </h1>
        <div className="container flex flex-col items-center justify-center mx-auto rounded-lg ">
            <Image src={webLogo} alt=''/>
        </div>
        </div>
        <section className="relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">
            <div className="py-24 md:py-36">
            <h1 className="mb-5 text-2xl md:text-6xl Avenir font-semibold text-gray-800">
                Subscribe to our newsletter
            </h1>
            <h1 className="mb-9 text-base md:text-2xl font-semibold text-gray-600">
                Enter your email address and get our newsletters straight away.
            </h1>
            <input
                placeholder="jack@example.com"
                name="email"
                type="email"
                autoComplete="email"
                className="border border-gray-600 w-1/4 pr-2 pl-2 py-3 mt-2 rounded-md text-gray-800 font-semibold hover:border-gray-900"
            ></input>{" "}
            <a
                className="bg-black text-white inline-flex items-center px-14 py-3 mt-2 ml-2 font-medium transition duration-500 ease-in-out transform border rounded-lg"
                href="/"
            >
                <span className="justify-center">Subscribe</span>
            </a>
            </div>
        </div>
        </section>
    </section>
  )
}

export default Main