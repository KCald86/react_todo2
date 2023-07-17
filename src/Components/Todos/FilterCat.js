//FilterCat will house a button for each category, plus ALL button to remove filtering
import React, {useState, useEffect} from 'react'
import { BsFillHandThumbsDownFill, BsFillHandThumbsUpFill } from 'react-icons/bs'
import axios from 'axios'

export default function FilterCat(props) {
    //We need to access and store categories from the API for this component to work
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`http://todo.kurtiscaldwell.com/api/Categories`).then(response => {
            console.log(response)
            setCategories(response.data)
        })
    }, []);
  return (
    <div className='text-center mt-5'>
        <button onClick={() => props.setFilter(0)} className='btn btn-outline-danger bg-dark m-1'>
            All
        </button>
        {/* Below we map all the categories to a button that filters resources on that category */}
        {categories.map(cat => 
            <button key={cat.categoryId} className='btn btn-outline-danger bg-dark m1'
            onClick={() => props.setFilter(Number(cat.categoryId))}>
                {cat.catName}
            </button>
        )}

{!props.showDone ?
                <button className="btn btn-success m-1" onClick={() => props.setShowDone(!props.showDone)}>
                    Show Complete &ensp;<BsFillHandThumbsUpFill />
                </button>:
                <button className="btn btn-warning m-1" onClick={() => props.setShowDone(!props.showDone)}>
                    Hide Complete &ensp;<BsFillHandThumbsDownFill/> 
                </button>
            }   
    </div>
  )
}
