import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {

    const [reviews, setReviews] = useState([])
    const fetchData =()=>{
      axios 
        .get("/reviews.json")
        .then((res)=>{setReviews(res.data)})
        .catch(error=>{
          console.log(error);
        })
    }
    useEffect(()=>{
      fetchData();
    },[])

    return (
        <div>
            <h3 className="text-2xl font-semibold hidden lg:block">{reviews.length}</h3>
                <div className="hidden lg:block">
                  {
                    reviews.slice(0,3).map(review=><ReviewCard review={review} key={review._id}/>)
                  }
                </div>
                <div className="block lg:hidden">
                  {
                    reviews.slice(0,2).map(review=><ReviewCard review={review} key={review._id}/>)
                  }
                </div>
        </div>
    );
};

export default Reviews;