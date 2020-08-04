import React from 'react';

const CommentsList = ({comments}) => (
    <>
    <h3>Comments</h3>

    {comments ? comments.map((comment, key)=>{
        console.log(comment);
        return (
            <div key={key} className="comment">
                <h4>{comment.username}</h4>
                <p>{comment.text}</p>
            </div>
        )
    }) : "Waiting"}

    {/* {comments.map((comment, key) => (
        <div key={key} className="comment">
            <h4>{comment.username}</h4>
            <p>{comment.text}</p>
        </div>
))} */}

    </>
)

export default CommentsList;