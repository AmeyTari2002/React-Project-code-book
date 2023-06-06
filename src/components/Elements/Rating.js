import React from 'react'

export const Rating = ({ rating }) => {
    let ratingArray = Array(5).fill(false);
    for (let i = 0; i < rating; i++) {             //array with 5 position the task of loop is to check the o position till rating and print star 
        ratingArray[i] = true;
    }


    return (
        <>
            {ratingArray.map((value, index) => (
                value ? (
                    <i key={index} className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i> // 
                ) : (
                    <i key={index} className="text-lg bi bi-star text-yellow-500 mr-1"></i> // 
                )
            ))}
        </>
    )
}
