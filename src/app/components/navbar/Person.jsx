'use client'

import React, { useState } from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

import { BiChevronDownCircle, BiChevronRightCircle, BiChevronUpCircle } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'

import Sign from './Sign'
import { Link } from "@nextui-org/react"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Person() {

  const [isOpen, setIsOpen ] = useState(false)

  return (
    <Menu as="div" className="relative h-[36px] inline-block text-left">
      
        <Menu.Button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row w-full gap-1 border-2 px-2 cursor-pointer hover:bg-dark-green-2 justify-center h-[36px] items-center bg-transparent text-white rounded-xl">
          
            <BsPerson className='mx-auto h-full w-full' />

            {
            isOpen ? (
              <BiChevronUpCircle className=" text-4xl text-white" aria-hidden="true" />
            ) : (
              <BiChevronDownCircle className=" text-4xl text-white" aria-hidden="true" />
            )
          }
          
        </Menu.Button>
      

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-50 mt-2 w-56 origin-top-right rounded-md bg-main-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/profile"
                  className={classNames(
                    active ? 'bg-gray-50 text-black' : 'text-black',
                    'flex items-center justify-between px-4 py-2 text-base md:text-lg'
                  )}
                >
                  Edit Profile

                  <BiChevronRightCircle className='text-[#045757]  text-[15px]'/>
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/mybooking"
                  className={classNames(
                    active ? 'bg-gray-50 text-black' : 'text-black',
                    'flex items-center justify-between px-4 py-2 text-base md:text-lg'
                  )}
                >
                  My Booking

                  <BiChevronRightCircle className='text-[#045757]  text-[15px]'/>
                </Link>
              )}
            </Menu.Item>
            
            <Menu.Item>
              <Sign />     
            </Menu.Item>
            
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
