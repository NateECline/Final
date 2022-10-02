import React, { useState, useEffect } from 'react';

// This function is used to get nasa's atronomy picture of the day from their API and display it. 

export default function NasaPhoto(){
    const [photoData, setPhotoData] = useState(null);

        useEffect(() => {
            fetchPhoto()

            async function fetchPhoto(){
            const res = await fetch(
                'https://api.nasa.gov/planetary/apod?api_key=dWk7jlEKDdZJfOq1UN0emMeVXlLhYCdEzqjcUSsr'
            );
            const data = await res.json()
            setPhotoData(data)
        }}, [])

        if (!photoData) return <div />

    return(
        <div className='nasa'>
            <img
            src={photoData.url}
            alt={photoData.title}
            />
            <br></br>
            <br></br>
            <div className='astronomy'>
                Here you will find Nasa's astronomy picture of the day, pulled directly from their API.
            </div>
        </div>

        

    )
    
}