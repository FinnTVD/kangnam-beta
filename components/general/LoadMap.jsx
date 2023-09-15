'use client'

import { useEffect } from "react"

export default function LoadMap() {
    useEffect(()=>{
        const script = document.createElement('script');
      
        script.src = "https://maps.vietmap.vn/sdk/vietmap-gl/1.15.3/vietmap-gl.js"; // Replace with your script's URL
        script.async = true; // Load the script asynchronously
      
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
          };
    },[])
  return (
    <></>
  )
}
