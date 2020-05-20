import React from 'react'
import articleContent from './article-content';
import ArticlesListComp from '../components/ArticlesListComp';

// import {Link} from 'react-router-dom';


function ArticlesListPage() {

    return (
        <>
        <div className= "ui container">
            <ArticlesListComp articles={articleContent} />

            </div>
        </>
    )
}

export default ArticlesListPage
