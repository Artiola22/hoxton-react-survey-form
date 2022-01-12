import "./App.css";

import Header from "./components/Header";
import Main from "./components/Main";
import {useState} from "react"


      




//  This is what your initial state could look like:

  const initialForm = {
  review: "",
  email: "",
  username: "",
  consistency: 0,
  colour: 0,
  logo: 0,
  bestFeatures: [],
  worstFeatures: [],
  timeSpent: []
}; 



export default function App() {
  const [formData, setFormData] = useState(initialForm)
  const [surveys , setSurveys] = useState([])
  


  
  return (
    <>
      <Header />
      <Main formData={formData} setFormData={setFormData} surveys={surveys} setSurveys={setSurveys} initialForm={initialForm}/>
    </>
  );
}


