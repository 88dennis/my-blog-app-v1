import React from 'react';
import {useState, useEffect} from 'react';
import articleContent from './article-content';
import ArticlesListComp from '../components/ArticlesListComp';
import NotFoundPage from './NotFoundPage';

function ArticlePage(props) {
    const name = props.match.params.name;
    const[articleInfo, setArticleInfo] = useState({ upvotes: 0, comments: []});
    console.log(name);

    // useEffect(()=>{
    // setArticleInfo({ upvotes: 3});      
    // }, [])

    useEffect(()=>{
        const fetchData = async () => {
            //in the package.json for client side type the  "proxy": "http://localhost:8000/",
            const result = await fetch("/api/articles/" + name);
            console.log(result)
            const body = await result.json();   
            console.log(body)
            setArticleInfo(body)
        }
        fetchData();
        // setArticleInfo({upvotes: Math.ceil(Math.random()*100), comments: [].concat("hello")})
    }, [name]);
    //THE ARRAY WATCH EVERY CHANGE. WE PASS IN THE NAME SO WHEN WE CHANGE URLS, THAT'S THE ONLY TIME WE UPDATE THE ARTILCLE INFO
    //IF THERE'S NO BRACKETS THERE WILL BE AN INFINITE LOOP
    //IF JUST AN EMPTY BRACKET, IT WILL JUST UPDATE ONCE WHEN THE PAGE LOADS.. IT WILL NOT UPDATE WHEN YOU CHANGE SOMETHING
    //you should know when to call the useEffect everytime the variable "name" changes, this will invoke the useEffect thus calling the useEffect at the ri

    //everytime you use traverse into a path using the Link and the React Router, it passes a prop called match
    // console.log(props.match)
    // console.log(articleContent)
    
    const article = articleContent.find((article, index) => { 
        return (article.name === name);
    })
    // console.log(article, "THE ARITCLE YOU CHOSE BASED ON YOUR MATCH PROP FROM THE URL")
    // console.log(article.content)

    //FOR THE 404 ERRO PAGE NOT FOUND

    if(!article) {
        return ( <NotFoundPage />)
    }

    const otherArticles = articleContent.filter(article => article.name !== name)
    // console.log(otherArticles)

    console.log(articleInfo)
    return (
        <>
            <h1>Artice Page</h1>
            <h2>Article about {articleInfo.name}</h2>
            <h3>Now has upvotes: {articleInfo.upvotes}</h3>
           {articleInfo.comments[0] ? <h3>user : {articleInfo.comments[0].username}</h3> : null}
           {articleInfo.comments[0] ? <h3>Now has comments: {articleInfo.comments[0].text}</h3> : null}

            {/* <h3>Now has comments: {articleInfo.comments[0].text}</h3> */}
            <h3>{article.title ? article.title : "Article"}</h3>

            {/* ARRAYS CAN ALSO BE DISPLAYED DIRECTLY*/}
            <p>{article.content}</p>


            {/* OR YOU CAN MAP ON IT */}
            {article.content.map((paragraph, index) => {
                index = index + 1;
                // console.log(index)
                return(
                    // this will return each paragraph content inside a p tag
                    <p key={index}>{paragraph}</p>
                )
            })}

            {/* {newArticles} */}

                <h3>Other Articles:</h3>
            <ArticlesListComp articles={otherArticles}/>
        </>
    )
}

export default ArticlePage


//NOTES:

//FILTER METHOD
//array.filter(function(currentValue, index, arr), thisValue)
//function(currentValue, index,arr)
//return currentValue.property >= "comparison"

//MAP METHOD
    // const newArticles = articleContent.map(article => {
    //     return (article.name)
    // })