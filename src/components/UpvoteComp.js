import React from 'react'

const UpvoteComp= ({articleName, upvotes, setArticleInfo}) =>{
// const URL = "https://sarms-blog-app.herokuapp.com";
// const URL = "http://localhost:8000";

    const upvoteArticle = async () => {
        const result = await fetch(`https://sarms-blog-app.herokuapp.com/api/articles/${articleName}/upvote`, {

    //   const result = await fetch(`http://localhost:8000/api/articles/${articleName}/upvote`, {
            method: 'post',
        }); 
        //await lets you wait for the result before continuing
        const body = await result.json();
        setArticleInfo(body);
    }

    return (
        <div id="upvote-section">
            <button className="ui secondary button" onClick={()=> upvoteArticle()}>Add Upvote</button>
            <span>Now has upvotes: {upvotes}</span>
            
        </div> 
    )
}

export default UpvoteComp;
