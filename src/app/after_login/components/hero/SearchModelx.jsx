'use client'

import DateFunctionx from './DateFunctionx'
import HoursFunctionx from './HoursFunctionx'
import LocationFunctionx from './LocationFunctionx'

export default function SearchModelx() {
  return ( 
  <div className='xl:hidden font-medium'>
    <div className='container mx-auto'>
        <div className='flex flex-col gap-y-4'>
            <LocationFunctionx />
            <DateFunctionx />
            <HoursFunctionx />
        
            <div className='flex items-center px-6'>
                <button className='btn-secondary-sm w-[164px] mx-auto'> search </button>
            </div>
        </div>
    </div>
  </div>
  )
}
