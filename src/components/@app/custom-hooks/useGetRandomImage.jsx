import axios from "axios"
import {useCallback} from 'react'
import { API_KEY, API_ROOT } from "../../../consts"

export const useGetRandomImage = (setLoader)=>{
    // this part could have also be done with redux middleware "thunk", 
    //I felt using axios would be easier way to do it for this small feature with just one GET call
    const fetchRandomImage = useCallback(async()=>{
       try{
        let imageResponse ={}
        const randomImageResponse = await  axios.get(`${API_ROOT}photos/random`,{
            params:{
                client_id: API_KEY,
                sig: Math.floor(Math.random() * 100),
            }
          })
          
          if(randomImageResponse.status === 200){
              imageResponse ={
                  imageId: randomImageResponse.data.id,
                  imageUrl : randomImageResponse.data.urls.thumb,
                  blurHash: randomImageResponse.data.blur_hash
              }
          }
        
          return imageResponse

      }catch(error){
          setLoader(false)
        console.log(typeof error)
        // we can show an error snackbar, or popup here.
    }  
    },[setLoader])  
    return {fetchRandomImage}

}