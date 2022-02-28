import {Tick} from "@styled-icons/typicons/Tick"
import {ImageAdd} from "@styled-icons/boxicons-solid/ImageAdd"
import {Cross} from "@styled-icons/entypo/Cross"
import styled from "styled-components"
import { useCallback, useState } from "react"
import { useGetRandomImage } from "./custom-hooks/useGetRandomImage"
import { useDispatch } from "react-redux"
import { updateApprovedImages, updateRandomImageUrl } from "../../store/reduxActions"
import { ErrorMessage } from "../Error"

const AcceptButton = styled(Tick)`
    width: 30px;
    height: 30px;
    padding: 10px 50px;
    border-radius: 6px;
    color:#fff;
    background-color: #5D8BF4;
    &:hover{
        cursor: pointer;
       opacity: 0.9;
    }
`
const RejectButton = styled(Cross)`
     width: 30px;
    height: 30px;
    padding: 10px 50px;
    border-radius: 6px;
    color:#fff;
    background-color:#423F3E ;
    &:hover{
        cursor: pointer;
       opacity: 0.9;
    }
`
const ActionContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`
const NoImageContainer = styled.div`
    margin-left: 5px;
    color: #041C32;
    font-size: 34;
`
const InlineImageAdd = styled(ImageAdd)`
    height:20px;
    width:20px;
`

export const NoImageSelected = ()=>(
        <NoImageContainer>
        <p>Click on <InlineImageAdd/> inorder to get image recomandations  </p>
        </NoImageContainer>)

export const BoxFooter = ({randomImageData, approvedImagesCount, setLoader})=>{
    const [isError, setIsError] = useState(false)
    const dispatch = useDispatch()
    const {fetchRandomImage} = useGetRandomImage()

    const handleRejectClick = useCallback(async()=>{
        try{
        setLoader(true)
        const randomImageResponse = await fetchRandomImage()
        dispatch(updateRandomImageUrl(randomImageResponse))
        setLoader(false)
    }catch(error){
        setIsError(true)
    }
    },[dispatch, fetchRandomImage,setLoader])

    const handleAcceptClick =useCallback(async()=>{
        try{
        setLoader(true)
        const randomImageResponse = await fetchRandomImage()
        dispatch(updateApprovedImages(randomImageData))
        dispatch(updateRandomImageUrl(randomImageResponse))
        setLoader(false)
    }catch(error){
        setIsError(true)
    }
    },[dispatch, fetchRandomImage, randomImageData,setLoader])

    return (
        <div>
         {isError && <ErrorMessage/>}   
        {!randomImageData.imageId? <NoImageSelected/>
            : <ActionContainer data-testid ="action-container">
            <RejectButton data-test="reject-btn" onClick={handleRejectClick}/>
           <AcceptButton data-test="accept-btn" onClick={handleAcceptClick}/>
      </ActionContainer> }
      </div>
       
    )
}