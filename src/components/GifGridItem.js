import React from 'react'
import PropType from 'prop-types';
export const GifGridItem = ( { id, title, url } ) => {
  return (
    <div className="card animate__animated animate__fadeIn animate__delay-1s">
      <img src={ url } alt={ title } />
      <p> { title } </p>
    </div>
  )
};

GifGridItem.propTypes = {
  title: PropType.string.isRequired,
  url: PropType.string.isRequired,
}