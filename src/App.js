import { BrowserRouter, Route, main, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import Message from "./pages/Message/Message";
import Search from "./pages/Search/Search";
import Video from "./pages/Video/Video";
import MessageText from "./components/MessageText/MessageText";
import FollowersBox from "./components/FollowersBox/FollowersBox";
import LikesPage from "./components/LikesPage/LikesPage";
import CommentsPage from "./components/CommentsPage/CommentsPage";
import SharePage from "./components/SharePage/SharePage";
import Status from "./components/Status/Status";
import StatusText from "./components/StatusText/StatusText";
import Notifications from "./components/Notifications/Notifications";
import Advertise from "./components/Advertise/Advertise";
import ViewsPage from "./components/ViewsPage/ViewsPage";

function App() {
  const [imageNum, setImageNum] = useState(0);
  const [imgModal, setImgModal] = useState(false);
  return (
    <div className="App">
      <div className="blur" style={{ top: "-18%", right: "0" }}></div>
      <div className="blur" style={{ top: "36%", left: "-8rem" }}></div>

      <BrowserRouter>
        <main>
          <Routes>
            {/* This is the login or signup page, the first thing a user will see */}
            <Route path="/" element={<Auth />} exact />

            {/* { This will be the home Page} */}
            <Route
              path="video"
              element={
                <Video
                  imageNum={imageNum}
                  setImageNum={setImageNum}
                  imgModal={imgModal}
                  setImgModal={setImgModal}
                />
              }
            />

            {/* {This will be The Search page} */}
            <Route
              path="search"
              element={
                <Search
                  imageNum={imageNum}
                  setImageNum={setImageNum}
                  imgModal={imgModal}
                  setImgModal={setImgModal}
                />
              }
            />

            {/* {This will be the My page or followers page,
           this is where this people he is following posts will be} */}
            <Route
              path="myPage"
              element={
                <Home
                  imageNum={imageNum}
                  setImageNum={setImageNum}
                  imgModal={imgModal}
                  setImgModal={setImgModal}
                />
              }
            />

            {/* This is the message page, this is the page where all the messages
         of those his following will be will be */}
            <Route path="message" element={<Message />} />

            {/* This is the account page, this is the page where the users Profile
          will be. personal info */}
            <Route path="account" element={<Profile />} />

            {/* This is the chatting page */}
            <Route path="chat" element={<MessageText />} />

            {/* This is the followers page for the phone view */}
            <Route path="follow" element={<FollowersBox />} />

            {/* { this is for likes page to see the people that liked your post} */}
            <Route path="likes" element={<LikesPage />} />

            {/* { this is for comments page to see the people that commented your post} */}
            <Route path="comments" element={<CommentsPage />} />

            {/* { this is for shares page to see the people that shared your post} */}
            <Route path="share" element={<SharePage />} />

            {/* This is for status just like whatapp status */}
            <Route path="status" element={<Status />} />

            {/* this is the status image */}
            <Route path="statusimg" element={<StatusText />} />

            {/* This is the notification page, the bell icon 
            this is for notifications page to see all the notifications going on in your 
            account */}
            <Route path="notify" element={<Notifications />} />

            {/* This is the Advertisement page */}
            <Route path="advertise" element={<Advertise />} />

            {/* This is the viewsPage where all the people that 
            have viewed your post are displayed */}
            <Route path="views" element={<ViewsPage />} />
          </Routes>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
