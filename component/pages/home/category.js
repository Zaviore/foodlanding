import React, { useRef, useState } from "react";
import { category } from "../../dummy/dummy";
function Category() {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);
    Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth;
  };
  return (
    <div className='max-w-7xl mx-auto px-4 md:min-h-[400px] items-center sm:px-'>
      <p className='text-3xl font-bold'>Browser Our Category</p>
      <p className='text-3xl text-cs-green font-bold'>Receipt</p>
      <div className='container overflow-x-auto flex flex-rows' ref={scrl}>
        {category.map((itm) => (
          <div
            className={`container py-2 md:px-3 min-w-[200px] text-center mr-4 mt-5 `}
            style={{ backgroundColor: itm.color }}
          >
            <div className=''>{itm.icon}</div>
            <div>{itm.nama}</div>
            <div>
              <p>{itm.item} items</p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-row-reverse'>
        <button
          onClick={() => slide(50)}
          className='p-3 rounded-full m-2 text-white bg-cs-green'
        >
          RIGHT
        </button>

        <button
          onClick={() => slide(-50)}
          className='p-3 rounded-full m-2 text-white bg-cs-green'
        >
          LEFT
        </button>
      </div>
    </div>
  );
}

export default Category;
