import React, { useRef, useState, useEffect } from 'react';
import FeedTemplate from './FeedTemplate';
import PostArea from './PostArea';

const Community = () => {
    return(
        <FeedTemplate>
            <PostArea /> 
        </FeedTemplate>
    )
}

export default Community;