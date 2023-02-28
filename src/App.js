import { useState, useEffect } from 'react'
import upArrow from './icons8-up-arrow-64.png'
import downArrow from './icons8-down-arrow-64.png'

function App() {
  const [rate, setRate] = useState(10); 
  const [submitted, setSubmitted] = useState(false); 
  
  const [area, setArea] = useState("Engineering Center");
  const [locations, setLocations] = useState(["ITLL", "Lobby", "Tower"]); 
  const [selLoc, setSelLoc] = useState("ITLL");
  const [data, setData] = useState([
    {
      "Engineering Center": [
        "ITLL", "Lobby", "Tower"
      ],
    },
    {
      "C4C": [
        "Dishroom", "Lobby", "Prep Kitchen"
      ],
    },
    {
      "Folsom Quad": [
        "Libby", "Baker", "Farrand"
      ]
    }
  ]);

  useEffect(()=> {
    var results = []; 

    console.log('Selected ' + area)
    for(var i = 0; i < locations.length; i++)
    {
      if(Object.keys(data[i])[0] === area)
      {
        results = data[i][area]
      }
    }

    console.log(results);
    setLocations(results);
  }, [area])

  return (
    <div className="App"> 
      <div className='header'>
        <h1><i>CompoRater</i></h1>
      </div>
      <div className='AppContent'>

        <div className='form-container'>
          <div className='dropdown'>
            <label>AREA</label>
            <select onChange={(e)=>{
              setArea(e.target.value); 
              setSubmitted(false);
            }}>
              <option>Engineering Center</option>
              <option>C4C</option>
              <option>Folsom Quad</option>
            </select>
          </div>
        </div>

        <div className='form-container'>
          <div className='dropdown'>
            <label>LOCATION</label>
            <select onChange={(e)=>{
              setSelLoc(e.target.value);
              setSubmitted(false); 
            }}>
              {locations.map((location)=>{
                return <option key={location}>{location}</option>
              })}
            </select>
          </div>
        </div>

        <div className='rate-container'>
          <div className='rate-wrapper'>
            <button><img 
              src={upArrow} 
              alt="Up" 
              onClick={() => {
                if(rate < 10)
                {
                  var newRate = rate + 1; 
                  setRate(newRate)
                  setSubmitted(false);
                }}}
            ></img></button>
            <h1>{rate}</h1>
            <button>
              <img
                src={downArrow}
                alt="down"
                onClick={() => {
                  if(rate > 0)
                  {
                    var newRate = rate - 1;
                    setRate(newRate); 
                    setSubmitted(false);
                  }}}/>
            </button>
          </div>
          <div className='rate-submit'>
              <button onClick={() => {
                setSubmitted(true);
              }}>Submit</button>
          </div>
          <div className='submitted-alert-wrapper'>
            {submitted ? <p><i>Submitted ranking {rate} for {area} {selLoc}</i></p> : <></>}
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

//facilities operations and services 
  //Jason 

