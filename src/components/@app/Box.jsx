import { useCallback, useState } from "react"
import { useSelector } from "react-redux"
import styled from "styled-components"
import { ApprovedImages } from "./ApprovedImages"
import { BoxFooter } from "./BoxFooter"
import { ImageBox } from "./ImageBox"

export const BoxHeading = styled.div`
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    color: #548CFF;
    border-bottom: 2px solid #D1D1D1;
    padding: 8px 5px;
`

const BoxContainer = styled.div`
    width: 46%;
    background-color: #fff;
    height: auto;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.3);
    border-radius: 1%;
    padding-bottom: 6px;
`

export const Box = ()=>{
    const [isLoading,setIsloading] = useState(false)
    const {unsplashImageData:{approvedImages,randomImage}} = useSelector(state=>state)

    const updateLoaderState = useCallback((value)=> setIsloading(value),[])
// Rather than drilling props down to the components we can also use context API for "isLoading", here
//we don't need that because, chain is not very big.
    return (
        <BoxContainer>
            <BoxHeading>
                <h2>IMAGE APPROVAL APPLICATION </h2>
            </BoxHeading>
            <ApprovedImages approvedImages = {approvedImages}/>
            <ImageBox randomImageData={randomImage} isLoading={isLoading}  setLoader = {updateLoaderState}/>
            <BoxHeading/>
            <BoxFooter randomImageData={randomImage} setLoader = {updateLoaderState} approvedImagesCount ={approvedImages.length}/>
        </BoxContainer>
    )
}