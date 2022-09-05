
import { useState, useEffect } from 'react';
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { getGifs } from '../helpers/getGifs';




export const GifGrid = ( {category} ) => {

    const { images, isLoading } = useFetchGifs( category );
  //esto lo convertimos en el HOOK useFetchGifs
    // const [images, setImages] = useState([]);

    // const getImages = async() => {
    //     const newImages = await getGifs( category );
    //     setImages(newImages);
    // }

    // useEffect( () => {
    //         // getGifs(category)
    //         //     .then( newImages => setImages(newImages) ); 
    //         getImages();
    //         },
    //         []
    //     );

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && (<h2> Cargando...</h2>)
            }
            <div className="card-grid">
                {/* {images.map( image =>(
                        <li key=  {image.id}>{image.title}</li>
                    ) )        
                } */}
                {/* {images.map( ({ id, title }) =>(
                       <GifItem key={ id }/>
                    ) )       
                } */}
                {images.map( image =>(
                        <GifItem 
                            key={image.id}
                            //  title={ image.title }
                            // url={ image.url}
                           { ...image }
                        />
                    ) )        
                }
           </div>
        </>
    )
}





