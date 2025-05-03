import React from "react";
import { FiChevronLeft } from 'react-icons/fi'
import { FiChevronRight } from 'react-icons/fi'
import { BsClipboardHeart } from "react-icons/bs";
import { PiBinocularsFill } from "react-icons/pi";
import { featuredData} from "../assets/data_files/featuredListData";

/* PHOTO CAROUSEL */

export default function FeaturedLists(props) {

  const [photos, setPhotos] = React.useState(featuredData)
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

console.log(photos)
  // Image change timing

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === photos.length - 1 ? 0 : prevIndex + 1
        ),
      4000
    );

    return () => {
      resetTimeout();
    };
  }, [index, photos.length]);


  function moveToNextImage() {
    setIndex((prevIndex) =>
      prevIndex === photos.length - 1 ? 0 : prevIndex + 1
    )
  }

  function moveToPreviousImage() {
    setIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : 0
    ) 
  }

  // Wrap images in link tags and connect to source url

  const slideShow = photos.map((photo, index) => {
    return (  
      <div className="featured-slide" key={photo.index} to="route" target="_blank" rel="noopener noreferrer" alt={photo.alt_description}>
        <div className="featured-photo-summary">
          <p className="featured-photo-city">{photo.cityName}, {photo.countryName}</p>
          <div className='featured-save-search-btn'>
            <PiBinocularsFill className="save-search-icon saved" />
            <p>Explore this location</p>
          </div> 
        </div>
        <a href={photo.imgPath} key={photo.index} className="featured-img-link" to="route" target="_blank" rel="noopener noreferrer">
          <img  src={photo.imgPath} alt={photo.alt_description} id={`img-${index}`}  className="featured-grid-img" />
        </a>  
      </div>
    )
  })


  const styles = {
    transform: `translate3d(${-index * 100}%, 0, 0)`
  }

  return (
    <div className="intro-content-container intro-2">
      <h1 className="featured-photo-header">Featured Checklists</h1>
      <div className="featured-photo-content featured-slideshow">
        <div className="featured-slideshowSlider" style={styles}>
          {slideShow}
        </div>
        <div className="featured-slideshow-arrows-container">
          <div className="featured-slide-arrow left" onClick={() => moveToPreviousImage()}><FiChevronLeft /></div>
          <div className="featured-slideshow-counter">{`${index + 1}/${photos.length}`}</div>
          <div className="featured-slide-arrow right" onClick={() => moveToNextImage()}><FiChevronRight /></div>
        </div>                    
      </div>
    </div>
  )
}