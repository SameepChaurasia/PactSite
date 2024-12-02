import { BrowserRouter, Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from './components/Home';
import AboutUs from "./sections/AboutUs";
import Downloads from "./sections/Downloads";
import DrPkKamaniLectures from "./sections/DrPkKamaniLectures";
import Events from "./sections/Events";
import Gallery from "./sections/Gallery";
import PactMembership from "./sections/PactMembership";
import PaintDepartment from "./sections/PaintDepartment";
import Team from "./sections/Team";
import AlumniNetwork from "./sections/AlumniNetwork";
import Syllabus from "./pages/Syllabus";
import Facilities from "./pages/Facilities";
import StaffMembers from "./pages/StaffMembers";
import Laboratories from "./pages/Laboratories";
import ResearchProjectConsultancy from "./pages/ResearchProjectConsultancy";
import Contact from "./pages/Contact";
import Faculty from "./pages/Faculty";
import Achievement from "./pages/Achievement";
import Placement from "./pages/Placement";
import Publications from "./pages/Publications";
import Signin from "./components/Signin";
import SignUp from "./components/SignUp";
import Profile from "./components/Profile";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
        <Header/>
        
        <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/alumninetwork" element={<AlumniNetwork/>}/>
        <Route path="/downloads" element={<Downloads/>}/>
        <Route path="/drpkkamanilectures" element={<DrPkKamaniLectures/>} />
        <Route path="/events" element={<Events/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/pactmembership" element={<PactMembership/>}/>
        <Route path="/paintdepartment" element={<PaintDepartment/>}/>
        <Route path="/team" element={<Team/>}/>
        <Route path="/syllabus" element={<Syllabus/>}/>
        <Route path="/facilities" element={<Facilities/>}/>
        <Route path="/staffmembers" element={<StaffMembers/>}/>
        <Route path="/laboratories" element={<Laboratories/>}/>
        <Route path="/researchprojectconsultancy" element={<ResearchProjectConsultancy/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/faculty" element={<Faculty/>}/>
        <Route path="/achievement" element={<Achievement/>}/>
        <Route path="/placement" element={<Placement/>}/>
        <Route path="/publications" element={<Publications/>}/>
        <Route path="/signin" element={<Signin/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        
        <Route  element={<PrivateRoute/>}> 
            <Route path="/profile" element={<Profile/>}/>
        </Route>

        


        </Routes>
        
        <Footer/>
    </BrowserRouter>
  )
}
