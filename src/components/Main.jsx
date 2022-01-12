import { useState } from "react";
import AnswersList from "./AnswersList";

function Main(props) {
  const [open, setOpen] = useState(false); //Ignore this state

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        
        <AnswersList answersList={props.surveys} />
        
        
      </section>
      <section className="main__form">{
      /* a form should be here */
      <form className="form" onSubmit={function(event){
        event.preventDefault()
        const newSurveys = [...props.surveys]
        newSurveys.push(props.formData)
        props.setSurveys(newSurveys)
        props.setFormData(props.initialForm)
      }} >
  <h2>Tell us what you think about your rubber duck!</h2>
  <div className="form__group">
    <h3>What would you say that are the best features of your rubber duck?</h3>
    <ul>
      <li>
        <label
          ><input name="bestFeatures" 
          type="checkbox" 
          value="colour" 
          onChange ={function (event) {
            const newArray = [...props.formData.bestFeatures]
            if(newArray.includes(event.target.value))
            {
              return 
            }else{
              newArray.push(event.target.value)
            }
            
            const updated = {...props.formData, bestFeatures: newArray}
            props.setFormData(updated)

          }}
          checked={props.formData.bestFeatures.includes("colour")}

          />It's
          yellow!</label
        >
      </li>
      <li>
        <label
          ><input name="bestFeatures" type="checkbox" value="sound" 
          onChange ={function (event) {
            const newArray = [...props.formData.bestFeatures]
            if(newArray.includes(event.target.value))
            {
              return 
            }else{
              newArray.push(event.target.value)
            }
            
            const updated = {...props.formData, bestFeatures: newArray}
            props.setFormData(updated)

          }}
          checked={props.formData.bestFeatures.includes("sound")}
          />It
          squeaks!</label
        >
      </li>
      <li>
        <label
          ><input name="bestFeatures" type="checkbox" value="logo" 
          onChange ={function (event) {
            const newArray = [...props.formData.bestFeatures]
            if(newArray.includes(event.target.value))
            {
              return 
            }else{
              newArray.push(event.target.value)
            }
            
            const updated = {...props.formData, bestFeatures: newArray}
            props.setFormData(updated)

          }}
          checked={props.formData.bestFeatures.includes("logo")}
          />It has a
          logo!</label
        >
      </li>
      <li>
        <label
          ><input name="bestFeatures" type="checkbox" value="size" 
          onChange ={function (event) {
            const newArray = [...props.formData.bestFeatures]
            if(newArray.includes(event.target.value))
            {
              return 
            }else{
              newArray.push(event.target.value)
            }
            
            const updated = {...props.formData, bestFeatures: newArray}
            props.setFormData(updated)

          }}
          checked={props.formData.bestFeatures.includes("size")}
          />Its big!</label
        >
      </li>
    </ul>
  </div>
  <div className="form__group">
    <h3>What would you say that are the worst bits of your rubber duck?</h3>
    <ul>
      <li>
        <label
          ><input name="worstFeatures" type="checkbox" value="colour" 
          onChange ={function (event) {
            const newArray = [...props.formData.worstFeatures]
            if(newArray.includes(event.target.value))
            {
              return 
            }else{
              newArray.push(event.target.value)
            }
            
            const updated = {...props.formData, worstFeatures: newArray}
            props.setFormData(updated)

          }}
          checked={props.formData.worstFeatures.includes("colour")}
        />It's
          yellow!</label
        >
      </li>
      <li>
        <label
          ><input name="worstFeatures" type="checkbox" value="sound" 
          onChange ={function (event) {
            const newArray = [...props.formData.worstFeatures]
            if(newArray.includes(event.target.value))
            {
              return 
            }else{
              newArray.push(event.target.value)
            }
            
            const updated = {...props.formData, worstFeatures: newArray}
            props.setFormData(updated)

          }}
          checked={props.formData.worstFeatures.includes("sound")}
          />It
          squeaks!</label
        >
      </li>
      <li>
        <label
          ><input name="worstFeatures" type="checkbox" value="logo" 
          
          onChange ={function (event) {
            const newArray = [...props.formData.worstFeatures]
            if(newArray.includes(event.target.value))
            {
              return 
            }else{
              newArray.push(event.target.value)
            }
            
            const updated = {...props.formData, worstFeatures: newArray}
            props.setFormData(updated)

          }}
          checked={props.formData.worstFeatures.includes("logo")}
          />It has a
          logo!</label
        >
      </li>
      <li>
        <label
          ><input name="worstFeatures" type="checkbox" value="size" 
          onChange ={function (event) {
            const newArray = [...props.formData.worstFeatures]
            if(newArray.includes(event.target.value))
            {
              return 
            }else{
              newArray.push(event.target.value)
            }
            
            const updated = {...props.formData, worstFeatures: newArray}
            props.setFormData(updated)

          }}
          checked={props.formData.worstFeatures.includes("size")}
          />Its big!</label
        >
      </li>
    </ul>
  </div>
  <div className="form__group radio">
    <h3>How do you rate your rubber duck consistency?</h3>
    <ul>
      <li>
        <input id="consistency1" type="radio" name="consistency" value="1" 
        onChange={function(event){
          const newObject = {...props.formData, consistency: event.target.value}
          props.setFormData(newObject)
        }}
        checked= {props.formData.consistency=== "1" }
        /><label
          htmlFor="consistency1"
          >1</label
        >
      </li>
      <li>
        <input id="consistency2" type="radio" name="consistency" value="2"
        onChange = {function (event){
          const newObject = {...props.formData, consistency: event.target.value}
          props.setFormData(newObject)
        }}
        checked= {props.formData.consistency=== "2" }
        /><label
          htmlFor="consistency2"
          >2</label
        >
      </li>
      <li>
        <input id="consistency3" type="radio" name="consistency" value="3" 
         onChange = {function (event){
          const newObject = {...props.formData, consistency: event.target.value}
          props.setFormData(newObject)
        }}
        checked= {props.formData.consistency=== "3" }
        /><label
          htmlFor="consistency3"
          >3</label
        >
      </li>
      <li>
        <input id="consistency4" type="radio" name="consistency" value="4" 
        onChange = {function (event){
          const newObject = {...props.formData, consistency: event.target.value}
          props.setFormData(newObject)
        }}
        checked= {props.formData.consistency=== "4" }
        /><label
          htmlFor="consistency4"
          >4</label
        >
      </li>
    </ul>
  </div>
  <div className="form__group radio">
    <h3>How do you rate your rubber duck colour?</h3>
    <ul>
      <li>
        <input id="colour1" type="radio" name="colour" value="1" 
        onChange = {function (event){
          const newObject = {...props.formData, colour: event.target.value}
          props.setFormData(newObject)
        }}
        checked= {props.formData.colour=== "1" }
        /><label
          htmlFor="colour1"
          >1</label
        >
      </li>
      <li>
        <input id="colour2" type="radio" name="colour" value="2" 
          onChange = {function (event){
            const newObject = {...props.formData, colour: event.target.value}
            props.setFormData(newObject)
          }}
          checked= {props.formData.colour=== "2" }
          /><label
          htmlFor="colour2"
          >2</label
        >
      </li>
      <li>
        <input id="colour3" type="radio" name="colour" value="3"
          onChange = {function (event){
            const newObject = {...props.formData, colour: event.target.value}
            props.setFormData(newObject)
          }}
          checked= {props.formData.colour=== "3" }
           /><label
          htmlFor="colour3"
          >3</label
        >
      </li>
      <li>
        <input id="colour4" type="radio" name="colour" value="4" 
          onChange = {function (event){
            const newObject = {...props.formData, colour: event.target.value}
            props.setFormData(newObject)
          }}
          checked= {props.formData.colour=== "4" }
          /><label
          htmlFor="colour4"
          >4</label
        >
      </li>
    </ul>
  </div>
  <div className="form__group radio">
    <h3>How do you rate your rubber duck logo?</h3>
    <ul>
      <li>
        <input id="logo1" type="radio" name="logo" value="1" 
          onChange = {function (event){
            const newObject = {...props.formData, logo: event.target.value}
            props.setFormData(newObject)
          }}
          checked= {props.formData.logo=== "1" }
          /><label
          htmlFor="logo1"
          >1</label
        >
      </li>
      <li>
        <input id="logo2" type="radio" name="logo" value="2" 
         onChange = {function (event){
          const newObject = {...props.formData, logo: event.target.value}
          props.setFormData(newObject)
        }}
        checked= {props.formData.logo=== "2" }
        /><label
          htmlFor="logo2"
          >2</label
        >
      </li>
      <li>
        <input id="logo3" type="radio" name="logo" value="3" 
         onChange = {function (event){
          const newObject = {...props.formData, logo: event.target.value}
          props.setFormData(newObject)
        }}
        checked= {props.formData.logo=== "3" }
        /><label
          htmlFor="logo3"
          >3</label
        >
      </li>
      <li>
        <input id="logo4" type="radio" name="logo" value="4" 
         onChange = {function (event){
          const newObject = {...props.formData, logo: event.target.value}
          props.setFormData(newObject)
        }}
        checked= {props.formData.logo=== "4" }
        /><label
          htmlFor="logo4"
          >4</label
        >
      </li>
    </ul>
  </div>
  <div className="form__group">
    <h3>How do you like to spend time with your rubber duck</h3>
    <ul>
      <li>
        <label
          ><input name="timeSpent" type="checkbox" value="colour"
           onChange ={function (event) {
            const newArray = [...props.formData.timeSpent]
            if(newArray.includes(event.target.value))
            {
              return 
            }else{
              newArray.push(event.target.value)
            }
            
            const updated = {...props.formData, timeSpent: newArray}
            props.setFormData(updated)

          }}
          checked={props.formData.timeSpent.includes("colour")}
          />It's
          yellow!</label
        >
      </li>
      <li>
        <label
          ><input name="timeSpent" type="checkbox" value="sound" 
          onChange ={function (event) {
            const newArray = [...props.formData.timeSpent]
            if(newArray.includes(event.target.value))
            {
              return 
            }else{
              newArray.push(event.target.value)
            }
            
            const updated = {...props.formData, timeSpent: newArray}
            props.setFormData(updated)

          }}
          checked={props.formData.timeSpent.includes("sound")}
          />It
          squeaks!</label
        >
      </li>
      <li>
        <label
          ><input name="timeSpent" type="checkbox" value="logo" 
          onChange ={function (event) {
            const newArray = [...props.formData.timeSpent]
            if(newArray.includes(event.target.value))
            {
              return 
            }else{
              newArray.push(event.target.value)
            }
            
            const updated = {...props.formData, timeSpent: newArray}
            props.setFormData(updated)

          }}
          checked={props.formData.timeSpent.includes("logo")}
          />It has a
          logo!</label
        >
      </li>
      <li>
        <label
          ><input name="timeSpent" type="checkbox" value="size" 
          onChange ={function (event) {
            const newArray = [...props.formData.timeSpent]
            if(newArray.includes(event.target.value))
            {
              return 
            }else{
              newArray.push(event.target.value)
            }
            
            const updated = {...props.formData, timeSpent: newArray}
            props.setFormData(updated)

          
          }}
          checked={props.formData.timeSpent.includes("size")}
          />Its big!</label
        >
      </li>
    </ul>
  </div>
  <label
    >What else have you got to say about your rubber duck?
    
    <textarea 
    onChange={function(event){
      const newReview = {...props.formData, review: event.target.value}
      props.setFormData(newReview)
    }}
    value = {props.formData.review }
      name="review"
      cols={30}
      rows={10}
    ></textarea></label
  ><label 
    >Put your name here (if you feel like it):<input 
    onChange={function (event){
      const newName = {...props.formData, username: event.target.value}
      props.setFormData(newName)
    }}
      type="text"
      name="username"
      value={props.formData.username}
       /></label
  ><label
    >Leave us your email pretty please??<input
    onChange={function (event){
      const newEmail = {...props.formData, email: event.target.value}
      props.setFormData(newEmail)
    }}
      type="email"
      name="email"
      value={props.formData.email} 
      /></label
  ><input className="form__submit" type="submit" value="Submit Survey!" />
</form>
      }</section>
    </main>
  );
}

export default Main;
