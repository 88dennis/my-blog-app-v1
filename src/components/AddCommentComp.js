import React from 'react';
import {useState} from 'react';
import './AddCommentComp.css';


function AddCommentComp({articleName, setArticleInfo}) {

const[username, setUsername] = useState('');
const[commentText, setCommentText] = useState('');

const addComment = async () => {
    const result = await fetch('/api/articles/' + articleName + '/add-comment', {
        method: 'post',
        body: JSON.stringify({username : username, text: commentText }),
        headers: {
            //tells our server what data we are sending along allows us to parse our data correctly
            'Content-Type': 'application/json',
        }
    });
    const body = await result.json();
    console.log(body);
    setArticleInfo(body);

    //to clear the fields after adding a comment
    setCommentText('');
    setUsername('');
}
console.log(username);
    return (
        <>
            <div className="addCommentForm">
            <div className="ui form segment">
                <h3>Add a Comment</h3>
                <label htmlFor="textInputId">
                    Name:
                    <input id="textInputId"type="text" value ={username} onChange={(event)=>setUsername(event.target.value)}/>
                </label>
                <label htmlFor="textAreaId">
                    Comment:
                      <textarea id="textAreaId" rows="4" cols="50" value={commentText} onChange={(event)=>setCommentText(event.target.value)}/>
                </label>
                <br/>
                <br/>
                <button className="ui addCommentBtn secondary submit button" onClick={()=>addComment()}>Add Comment</button>
            </div>
            </div>
        </>
    )
}

export default AddCommentComp
