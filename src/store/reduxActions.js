import {createSlice} from "@reduxjs/toolkit"

export const fetchData = createSlice({
    name:'unsplashImageData',
    initialState:{
        randomImage:{
        imageId:null,
       imageUrl:'',
       blurHash:''
    },
    approvedImages:[],
},
    reducers:{
        updateRandomImageUrl: (state,action)=>{
            state.randomImage =
             {
                 imageId: action.payload.imageId,
                 imageUrl: action.payload.imageUrl,
                 blurHash:action.payload.blurHash
            }
        },
        updateApprovedImages : (state,action)=>{
            state.approvedImages = [...state.approvedImages,action.payload]
        }
    }
})

// action creators 
export const {updateRandomImageUrl,updateApprovedImages} = fetchData.actions

// exporting reducer provided by createSlice automatically
export default fetchData.reducer