import React, {useState, useEffect} from 'react';
import ImagesWidget from './ImagesWidget'

let Article = (props) => {
    let [imageURLs, setImageUrls] = useState(null); 


    return (
        <div className = 'article-wrapper'>     
            <div className = 'headline'> 
                <label className = 'form-label'> Headline </label> 
                <input className = 'input-text' type="text" id = "headline"/> 
            </div>
            <ImagesWidget 
                imageUrls = {imageURLs}
            />
        </div>
        )
}

export default Article; 
            