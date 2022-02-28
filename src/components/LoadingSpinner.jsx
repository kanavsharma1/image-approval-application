import '../index.css'

//This could have been achieved by using external library like Material UI,
// this is relatively small application so I decided not to increase the dependency size.
export const  LoadingSpinner =()=>{
    return(
        <div className="loader">
            Loading...
        </div>
    )
}