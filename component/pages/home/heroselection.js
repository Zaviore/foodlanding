import Image from "next/image";
import React from "react";
import Banner from "../../../public/salad.svg";
const macbookIphone = require("../../../public/backdrop.png");

function Heroselection() {
  return (
    <div>
      <div>
        <div className='content_bg'></div>
        <div className='max-w-7xl mx-auto px-4 md:grid grid-cols-2 md:min-h-[600px] gap-4 items-center sm:px-6'>
          <div className=''>
            <p className='text-cs-green text-7xl font-bold'>
              Good Food Us Good Mood
            </p>
            <p className='md:mr-56'>
              I would think that conserving our natural resources should be a
              conservative position: Not to waste food, and not to throw away a
              lot of the food that we buy.
            </p>

            <a
              href='#'
              className='mt-10 mr-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-cs-green hover:bg-cs-green-light'
            >
              Daftar Sekarang
            </a>
            <a
              href='#'
              className='whitespace-nowrap text-base font-medium text-black bg-gray-200 hover:bg-gray-200 px-4 py-2 rounded-full hover:text-cs-green'
            >
              About Us
            </a>
          </div>
          <div className='p-10 max-w-fit rounded-full rounded-full bg-cs-gray-light'>
            <Image src={Banner} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Heroselection;
