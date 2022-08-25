import React from 'react';
import { BeakerIcon } from '@heroicons/react/24/outline'
//// import { Disclosure } from '@headlessui/react'
function App() {
  return (
      <div className='h-screen p-3 bg-zinc-300 dark:bg-zinc-800'>
        <div className='px-5 transition duration-200 shadow-sm dura py-11 bg-zinc-200 dark:bg-zinc-700 rounded-xl hover:shadow-lg'>
        <h1 className='flex text-3xl font-albertsans'><BeakerIcon className='w-6 mr-3'/> Novagon Labs</h1>
        <p className=''>A new way to test Novagon Products</p>
        </div>
        <div className='py-2'>
        <p className='text-sm transition-all duration-200 darkModeText selection:bg-zinc-50'>Secrecy is not the option. so we offer to <b>anyone</b> to use a beta version of our products.</p>
        <p>Coming Soon</p>
        </div>
      </div>
  );
}

export default App;
