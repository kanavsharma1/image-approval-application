import styled from "styled-components"
import { BoxHeading } from "./Box"
import {ImageAdd} from "@styled-icons/boxicons-solid/ImageAdd"

export const ApprovedImagesContainer = styled.div`
    display:flex;
    width: 100%;
    overflow-x: auto;
    padding-bottom: 3px;
    position: relative;
    &::-webkit-scrollbar{
        height: 15px;
       
        border: 1px solid black;
    }
    &::-webkit-scrollbar-thumb{
        border-radius: 20px;
        background-color: #D1D1D1;
    }
    &::-webkit-scrollbar-track{
        background-color: #EEEEEE;
    }
    `
export const AddIconComponent = styled.div`
    display: flex;
    width: 100px;
    height: 60px;
    margin: 0px 8px;
    border-radius: 4px;
    justify-content: center;
    align-items: center;
    background-color: lightgray;
`
export const AddImageIcon = styled(ImageAdd)`
color:#f4f4f4;
height: 50px;
width: 50px;
box-sizing: border-box;
`
const ApprovedImage = styled.img`
    width: 100%;
    height:100%;
`
const ApprovedBoxContainer = styled.div`
        display:flex;
        flex-wrap: nowrap;
    `
export const ApprovedImages = ({approvedImages})=> (
 <BoxHeading>
        <h3>
            Approved Images({approvedImages.length})
        </h3>
        <ApprovedImagesContainer>
    <ApprovedBoxContainer >
    { approvedImages.length ? approvedImages.map(image=>
        <AddIconComponent key={image.imageId + image.blurHash}>
              <ApprovedImage src={image.imageUrl}/>
        </AddIconComponent>) :
        <AddIconComponent>
            <AddImageIcon/>
        </AddIconComponent>   }
    </ApprovedBoxContainer>
 </ApprovedImagesContainer>
 </BoxHeading>
    )
