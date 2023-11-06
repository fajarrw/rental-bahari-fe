'use client'

import React, { useState, useEffect, useContext} from 'react'
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'

import { BiChevronDownCircle, BiChevronRightCircle, BiChevronUpCircle } from 'react-icons/bi'
import { BsPersonCircle } from 'react-icons/bs'

import Sign from './Sign'
import { Link } from "@nextui-org/react"

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Person() {

  const [isOpen, setIsOpen ] = useState(false)

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button 
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex w-full justify-center items-center gap-x-3 rounded-md bg-transparent px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
          <BsPersonCircle className='text-2xl' />

          {
            isOpen ? (
              <BiChevronUpCircle className=" h-5 w-5 text-gray-400" aria-hidden="true" />
            ) : (
              <BiChevronDownCircle className=" h-5 w-5 text-gray-400" aria-hidden="true" />
            )
          }

        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            
            <Menu.Item>
              {({ active }) => (
                <Link
                  href="/profile"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'flex items-center justify-between px-4 py-2 text-sm'
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
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'flex items-center justify-between px-4 py-2 text-sm'
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
