import React from "react";
import Logo from "../../public/logo.png";
import Image from "next/image";

function Footer() {
  return (
    <div className='max-w-8xl mx-auto px-4 sm:px-6 '>
      <div className='bg-cs-green-soft sm:p-10 md:p-20 rounded-md md:m-3'>
        <div className='grid md:grid-cols-5'>
          <div className='md:col-span-2'>
            <Image src={Logo} width='150px' height='45px' />
            <p className='md:mr-32 mt-4'>
              jl. jend sudirman kav 76-78 sudirman plaza.gedung marein 12910
              jakarta selatan
            </p>
          </div>
          <div className=''>
            <p className='font-bold mb-3 '>Category</p>
            <div className='grid grid-cols-2'>
              <p className=''>Donat</p>
              <p className=''>Cupcake</p>
              <p className=''>Marsmellow</p>
              <p className=''>Onigiri</p>
              <p className=''>Kebab</p>
            </div>
          </div>
          <div>
            <p className='font-bold mb-3 '>About</p>
            <p className=''>Contact US</p>
            <p className=''>FAQ</p>
            <p className=''>Report Problem</p>
          </div>
          <div>
            <p>
              Get now free 50% discount for alll products on your first order
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
