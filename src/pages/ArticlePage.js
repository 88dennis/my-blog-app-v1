import React from 'react'
import articleContent from './article-content';
import ArticlesListComp from '../components/ArticlesListComp';
import NotFoundPage from './NotFoundPage';



//FILTER METHOD
//array.filter(function(currentValue, index, arr), thisValue)
//function(currentValue, index,arr)
//return currentValue.property >= "comparison"

//MAP METHOD
    // const newArticles = articleContent.map(article => {
    //     return (article.name)
    // })

function ArticlePage(props) {
//everytime you use traverse into a path using the Link and the React Router, it passes a prop called match
    // console.log(props.match)
    // console.log(articleContent)

    const name = props.match.params.name;

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
    console.log(otherArticles)

    return (
        <div>
            <h1>Artice Page</h1>
            <h2>Article about {article.name}</h2>
            <h3>{article.title}</h3>

            {/* ARRAYS CAN ALSO BE DISPLAYED DIRECTLY*/}
            <p>{article.content}</p>


            {/* OR YOU CAN MAP ON IT */}
            {article.content.map((paragraph, index) => {
                index = index + 1;
                console.log(index)
                return(
                    // this will return each paragraph content inside a p tag
                    <p key={index}>{paragraph}</p>
                )
            })}

            {/* {newArticles} */}

                <h3>Other Articles:</h3>
            <ArticlesListComp articles={otherArticles}/>
        </div>
    )
}

export default ArticlePage
