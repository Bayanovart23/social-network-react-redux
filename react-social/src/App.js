import React from "react";
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/NavBar/Navbar";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {Route, Routes} from "react-router-dom";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UserContainer from "./components/Users/UserContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import Profile from "./components/Profile/Profile";
import HeaderContainer from "./components/Header/HeaderContainer";



const App = (props) => {
  return (
      <div className={'app-wrapper'}>
        <HeaderContainer/>
        <Navbar/>
        <div className={'app-wrapper-content'}>
          <Routes>
              {/*<Route path={'/profile/'} element={<ProfileContainer/>}/>*/}
              <Route path={'/Profile/'} element={<ProfileContainer/>} >
                  <Route path={':userId'} element={<ProfileContainer/>}/>
                  <Route path={'me'} element={<ProfileContainer/>}/>
                  </Route>
            <Route path='/dialogs'  element={<DialogsContainer/>}/>
              <Route path='/users' element={<UserContainer/>}/>
            <Route path='/music' element={<Music/>}/>
            <Route path='/news' element={<News/>}/>
            <Route path='/settings' element={<Settings/>}/>
          </Routes>
        </div>
      </div>
  );
}

export default App;
