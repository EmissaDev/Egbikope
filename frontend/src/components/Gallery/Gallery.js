import Card from "../Card/Card";


function Gallery(props) {
  const imageAlt = (title, index) => { return `${title}-${index}`}

  return(
    <div className='content__gallery'>
      <ul className='content__gallery_element'>
        {props.album.map((item, index) =>
          <Card key={index} alt={imageAlt(props.name, index)} src={item} card={item} />
        )}
      </ul>
    </div>
  )
}

export default Gallery;