import React from 'react'
import {Link} from 'react-router-dom';

//THIS IS REUSABLE -- THIS IS USED TO MAP ARRAYS WITH SIMILAR PROPERTIES AND DISPLAY IT
//MAKE SURE TO NAME YOUR PROP SIMILAR TO ALL THAT WILL USE THIS IN THIS CASE WE NAME IT "articles"
const ArticlesListComp = (props) => {
    return (
        <div className= "ui container">
        {props.articles.map((article, index)=> {
            return (
                <Link key={index} to={"/article-page/" + article.name}>
                    <h1>{article.name}</h1>
                    <p>{article.content[0].substring(0, 150)}...</p>
                    <hr/>
                    <br/>
                </Link>
            )
        }) }
        </div>
    )
}

export default ArticlesListComp
