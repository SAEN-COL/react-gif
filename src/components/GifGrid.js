
import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import { GifGridItem } from './GifGridItem';


export const GifGrid = ( { category }) => {
  
  const { data:images, loading } = useFetchGifs( category );

  return (
    <>
      <h3 className="animate__animated animate__fadeIn"> { category } </h3>
      
      {loading && <p className="animate__animated animate__flash">Loadding</p> }
      <div className="card-grid">
          { images.map(
            image =>  
              <GifGridItem 
                key={ image.id } 
                {...image} />   // Los tres puntos es para indicar 
                                // que los key del objeto se pasan
                                // como parametros o props del componente
          )}
      </div>
    </>
  )
}
