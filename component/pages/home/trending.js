import React from "react";
import { trending } from "../../dummy/dummy";
import { SupportIcon } from "@heroicons/react/solid";

function TrendingComponent() {
  console.log(trending);
  return (
    <div className='max-w-7xl mx-auto px-4 md:min-h-[400px] items-center sm:px-'>
      <p className='text-3xl font-bold'>Browser Our Trending</p>
      <p className='text-3xl text-cs-green font-bold'>Receipt</p>
      <div class='grid md:grid-cols-4 gap-4 min-h-[400px] min-w-[200px] mt-5'>
        {trending.map((itm) => (
          <div
            style={{ backgroundColor: itm.color }}
            className='pl-5 pt-5 w-full h-full'
          >
            <div>{itm.icon}</div>
            <div className='font-bold'>{itm.full}</div>
            <div>{itm.nama}</div>
            <div className='flex'>
              <SupportIcon width='20px' /> <SupportIcon width='20px' />{" "}
              <SupportIcon width='20px' /> <SupportIcon width='20px' />
            </div>
          </div>
        ))}{" "}
      </div>
      <div className='flex justify-center'>
        <button className='text-white rounded-full m-4 px-4 py-2 bg-cs-green'>
          All Recipt
        </button>
      </div>
    </div>
  );
}

export default TrendingComponent;
