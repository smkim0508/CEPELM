import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import FeedTemplate from './components/FeedTemplate';
//import LearnKorean from './components/LearnKorean';
import Community from './components/Community';
import PhotoRecovery from './components/PhotoRecovery';
import PostRecovery from './components/PostRecovery';
import FindMatch from './components/FindMatch';
import SignIn from './components/Signin';
import SignUp from './components/Signup';
import Profile from './components/Profile';
import Settings from './components/Settings';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Community />} />
        <Route path="/community" element={<Community />} />
        <Route path="/find-match" element={<FindMatch/>} />
        <Route path="/photo-recovery" element={<PhotoRecovery/>} />
        <Route path="/post-recovery" element={<PostRecovery/>} />
        <Route path="/Signin" element={<SignIn />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
