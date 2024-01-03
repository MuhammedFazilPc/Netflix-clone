import React,{useState,useEffect} from 'react'
import './RowPost.css'
import axios from '../../axios';
import { API_KEY, imageUrl } from '../../constants/constants';
// import { response } from 'express';
function RowPost() {
    const [movie, setmovie] = useState([]);
    useEffect(() => {
     axios.get( `discover/tv?api_key=${API_KEY}&with_networks=213`).then((response)=>{
          setmovie(response.data)
     })
    }, []);
    return (
        <div className='row'>
            <h2>{movie?movie.title:""}</h2>
            <div className='posters'>
               {
                movie.map((mv)=>
                    <img className='poster' alt='poster' src={`${imageUrl+mv.backdrop_path}`} />
                )
                
                }
            </div>
        </div>
    )
}

export default RowPost
