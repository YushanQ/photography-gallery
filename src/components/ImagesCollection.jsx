import React from 'react'
import { ImageCard } from './ImageCard';

export const ImagesCollection = () => {
    const imgList = [...new Array(8)].map((key, index) => `/images/image-${index+2}.jpeg`);
  return (
    <>
    <ul className='images-collection-container'>
        {
        imgList.map((imgUrl, index) => {
            return (
                <li key={index} className={index % 2 === 0 ? 'item short' : "item tall"}>
                    <figure>
                        <ImageCard imgUrl = {imgUrl}/>
                    </figure>
                </li>
            )
        })
        }
    </ul>
    <div className='d-flex mb-2'>
        <a href="/" className='mx-auto fs-3'>View More</a>
    </div>
    </>
  )
}
