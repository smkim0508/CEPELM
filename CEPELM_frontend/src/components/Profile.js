import React, { useRef, useState, useEffect } from 'react';
import ProfileCard from './ProfileCard';
import SkillCard from './SkillCard';
import HelpCard from './HelpCard';
import StoryCard from './StoryCard';
import FeedTemplate from './FeedTemplate';
import axios from 'axios';
import { useParams } from 'react-router-dom'


const Profile = () => {

    const [profile, setProfile] = useState();
    const [skill, setSkill] = useState();
    const [help, setHelp] = useState(); 
    const { userId } = useParams(); 

    var profileBuf = <ProfileCard />;
    var skillBuf = <SkillCard />;
    var helpBuf = <HelpCard />;
    var storyBuf = <StoryCard />;

    useEffect(async () => {
        axios.get('http://localhost:3000/users/profile/'+userId)
        .then((response) => {
            console.log(response.data.data);
            setProfile(response.data.data[0]);
            setSkill(response.data.data[0].can_help);
            setHelp(response.data.data[0].need_help);
        }).catch((error) => {
            console.log(error);
        })
    },[]);

    if(profile != undefined){ //need to change this to account for userid
        profileBuf = <ProfileCard realname={profile.realname} hometown={profile.hometown} email={profile.email}/>;
        skillBuf = <SkillCard can_help={skill}/>;
        helpBuf = <HelpCard need_help={help}/>;
    }

    return (
        <FeedTemplate>
            <br />
            {profileBuf}
            <br />
            {storyBuf}
            <br />
            {skillBuf}
            <br />
            {helpBuf}
            <br />
        </FeedTemplate>
    )
}

export default Profile; 