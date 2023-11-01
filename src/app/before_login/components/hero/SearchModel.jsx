'use client'

import DateFunction from './DateFunction'

import HoursFunction from './HoursFunction'

import LocationFunction from './LocationFunction'

export default function SearchModel() {
  return ( 
  <div className='xl:hidden font-medium'>
    <div className='container mx-auto'>
        <div className='flex flex-col gap-y-4'>
            <LocationFunction />
            <DateFunction />
            <HoursFunction />
        
            <div className='flex items-center px-6'>
                <button className='btn-secondary-sm w-[164px] mx-auto'> search </button>
            </div>
        </div>
    </div>
  </div>
  )
}
