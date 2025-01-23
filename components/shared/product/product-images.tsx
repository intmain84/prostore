'use client';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

const ProductImages = ({
  name,
  images,
}: {
  name: string;
  images: string[];
}) => {
  const [currentImage, setCurrentImage] = useState<number>(0);

  return (
    <>
      <Image
        width={800}
        height={800}
        src={images[currentImage]}
        alt=''
        className='min-h-[300] object-cover object-center'
      />
      <div className='flex gap-1'>
        {images.map((image: string, i: number) => {
          return (
            <div
              key={i}
              onClick={() => setCurrentImage(i)}
              className={cn(
                'cursor-pointer border hover:border-orange-600',
                currentImage === i && 'border-orange-500',
              )}
            >
              <Image
                width={100}
                height={100}
                src={image}
                alt={`${name} ${i}`}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductImages;
