
import { AddIconComponent } from "./ApprovedImages"
import {ImageAdd} from "@styled-icons/boxicons-solid/ImageAdd"
import styled from "styled-components"
import { useGetRandomImage } from "./custom-hooks/useGetRandomImage"
import { useDispatch, } from "react-redux"
import { updateRandomImageUrl } from "../../store/reduxActions"
import { LoadingSpinner } from "../LoadingSpinner"
import { useCallback, useState } from "react"
import { ErrorMessage } from "../Error"


const BigImageContainer = styled(AddIconComponent)`
    width: 90%;
    height: 200px;
    margin: 2em auto;
    border-bottom: 2px solid #D1D1D1;
    cursor: ${({isClickable}) => isClickable } ;
`
const AddImage = styled(ImageAdd)`
    width:70px;
    height:70px;
    color: #f4f4f4;
`
const Image = styled.img`
    height: 100%;
    width:100%;
`
export const ImageBox = ({randomImageData,isLoading, setLoader})=>{
    const [isError, setIsError] = useState(false)
    const dispatch = useDispatch()
    const {fetchRandomImage} = useGetRandomImage(setLoader)

    const onClickHandler = useCallback(async()=>{
        try{
        setLoader(true)
      const randomImageResponse = await fetchRandomImage()
      if(randomImageResponse.imageId){
          dispatch(updateRandomImageUrl(randomImageResponse))
      }
      setLoader(false)
    }catch(error){
        setIsError(true)
    }
    },[dispatch, fetchRandomImage, setLoader])

    return (
        <>
        {isLoading && <LoadingSpinner/> }
       {!isLoading && <BigImageContainer onClick={!randomImageData.imageId ? onClickHandler : null} isClickable = {!randomImageData.imageId ? 'pointer' : 'none'} >
            {!randomImageData.imageId ? <AddImage/> : <Image src={randomImageData.imageUrl}  />}
           
        </BigImageContainer>}
        {isError && <ErrorMessage/>}
        </>
    )
}