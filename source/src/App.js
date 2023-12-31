import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Home from './Home/Home';
import Navb from './NavBar/NavBar';
import AuthForm from './User/test';


import 'bootstrap/dist/css/bootstrap.min.css';
import Physical from './Physical/Physical';
import Footer from './Footer/Footer';
import LoginSignUp from './Login/LoginSignUp';
import Logout from './Logout/Logout';
import Profile from './profile';
import BlogPost from './Physical/BlogPost';
// import Footer from './Footer/Footer';
import AboutUs from './Pages/AboutUs/About';
import Contact from './Pages/Contact/Contact';
import Awareness from './Awareness/Awareness';
import Abc from './Awareness/Abc';
import Color from './Awareness/Color';
import Math from './Awareness/Math';
import Gallery from './Gallery/Gallery';
import Animal from './Awareness/Animal/Animal';
import Video from './VideoPage/Video';
import VideoDetails from './VideoPage/VideoDetails';

function App() {


  // get data from homecard.json
  const [cards, setCards] = useState([]);
  const [filterCards, setFilterCards] = useState([]);
  // get data from courses.json
  const [courses, setCourses] = useState([]);
  const [filterCourses, setFilterCourses] = useState([]);
  // get data from ABC.json
  const  [alphabets, setAlphabets] = useState([]);
  const [filterAlphabets, setFilterAlphabets] = useState([]);
  // get data from Color.json
  const [colors, setColors] = useState([]);
  const [filterColors, setFilterColors] = useState([]);
  // get data from animal.json
  const [animals, setAnimals] = useState([]);
  const [filterAnimals, setFilterAnimals] = useState([]);

  //get data from VideoPage.json
  const [videos, setVideos] = useState([]);
  const [filterVideos, setFilerVideos] = useState([]);
  const [videoDetails, setVideoDetails] = useState(null);

  


  useEffect(() => {
    const fetchData = async () => {
      try {
        // get data from homecard.json
        const cardJson = await fetch('homecard.json');
        const cardData = await cardJson.json();
        setCards(cardData);
        setFilterCards(cardData);
        // console.log(22, courseData)
        
        // get data from courses.json
        const courseJson = await fetch('courses.json');
        const courseData = await courseJson.json();
        setCourses(courseData);
        setFilterCourses(courseData);

        //get data from ABC.json
        const alphabetJson = await fetch('ABC.json');
        const alphabetData = await alphabetJson.json();
        setAlphabets(alphabetData)
        setFilterAlphabets(alphabetData)
        console.log(57, alphabetData)

        //get data from Color.json
        const colorJson = await fetch('Color.json');
        const colorData = await colorJson.json();
        setColors(colorData);
        setFilterColors(colorData);

        //get data from animal.json
        const animalJson = await fetch('Animal.json');
        const animalData = await animalJson.json();
        setAnimals(animalData);
        setFilterAnimals(animalData)

        //get data from VideoPage.json
        const videoJson = await fetch('VideoPage.json');
        const videoData = await videoJson.json();
        setVideos(videoData);
        setFilerVideos(videoData);
        


        // console.log(100,filterAlphabets)


        



      } catch (error) {
        console.log('error reading json')
      }
    };
    fetchData();
  }, []);

  const getDetails = (v) => {
    setVideoDetails(v);
  }


  return (
    <div className="App">

      <nav>
        {/* <Link to="/" >Home</Link>
        <Link to="/physicalpage" >Physical Page</Link>
        <Link to="/videopage" >Video Page</Link>
        <Link to="/eventpage" >Event Page</Link>
        <Link to="/gallery" >Gallery</Link> */}
        <Navb /> 
      </nav>
      <Routes>
        <Route path='/' element={
          <div>
            <Home cards={filterCards} />
          </div>
        } />
        <Route path='/physical' element={
          <div>
            <Physical courses={filterCourses} />
          </div>
        } />
        <Route path="/physical/:id" element={<BlogPost />} />
        <Route path='/inf' element={
          <div>
            <LoginSignUp/>
          </div>
        }/>
        <Route path='/profile' element={
          <div>
            <Profile/>
          </div>
        }/>
        <Route path='/logout' element={
          <div>
            <Logout/>
          </div>
        }/>
        <Route path='/About' element={
          <div>
            <AboutUs/>
          </div>
        } />
        <Route path='/Contact' element={
          <div>
            <Contact/>
          </div>
        } />
        <Route path='/Awareness' element={
          <div>
            <Awareness/>
          </div>
        } />
        <Route path='/Alphabet' element={
          <div>
              <Abc alphabets={filterAlphabets} />
          </div>
        } />
        <Route path='/Color' element={
          <div>
            <Color Colors={filterColors} />
          </div>
        } />
        <Route path='/Math' element={
          <div>
            <Math />
          </div>
        } />
        <Route path='/Gallery' element={
          <div>
            <Gallery />
          </div>
        } />
        <Route path='/Animal' element={
          <div>
            <Animal animals={filterAnimals} />
          </div>
        } />
        <Route path='/video' element={<Video videos={videos} getDetails={getDetails} />}/>
        <Route path='/details' element={<VideoDetails video={videoDetails} />}/>
        <Route path='/detail/:id' element={<VideoDetails video={videoDetails} />}/>

      </Routes>
      
    </div>
  );
}

export default App;
