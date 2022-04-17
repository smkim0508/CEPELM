import React, { useEffect, useState } from 'react'; 
import WritePost from './WritePost';
import Post from './Post';
import axios from 'axios';
import { Fab } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Modal from '@mui/material/Modal';

function PostArea() {

    const [postList, setPostList] = useState();

    var posts; 

    useEffect(async () => {
        var posts = await axios.get('http://localhost:3000/community/readAllPost/');
        //console.log(posts.data.data);
        setPostList(posts.data.data);
    }, [postList]);

    let name = "David Wang";
    
    let time = "February 21, 2022"

    //<Post writer={post.writer} date={post.date} content={post.content}/>

    if(postList != undefined) {
        console.log(postList);
        posts = postList.map((post) => 
            <div>
                <Post writer={name} date={time} content={post.content}/>
                <br />
            </div>
        )  
    }

    return(
        <div>
           <br />
           {posts}
        </div>
    );
    
}


export default PostArea; 