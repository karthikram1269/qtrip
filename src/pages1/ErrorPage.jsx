import React from "react";

const ErrorPage = () => {
    return(
        <div style={{display:"inline",justifyContent :"center", textAlign : "center"}}>
            <h1 style={{color: "red",backgroundColor:"whitesmoke"}}>Error 404: Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
            <p>Please go back to the <a href="/">home page</a>.</p>
        </div>
    )
}
export default ErrorPage