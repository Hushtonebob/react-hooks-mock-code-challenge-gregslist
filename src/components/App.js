import React,{ useState, useEffect} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [render, setRender] = useState(true);
  const [listing, setListing] = useState([]);
  const [newSearch, setNewSearch] = useState("");
  const check = (newSearch==="");
  
  useEffect(()=>{
    fetch(`http://localhost:6001/listings`)
    .then(res=>res.json())
    .then(data=>{console.log(data); setListing(data)})
  },[render, check])

  function handleSearch(){

  fetch(`http://localhost:6001/listings`)
  .then(res=>res.json())
  .then(data=>{console.log(data);
     setListing(data.filter((blam=>{
       return (blam.description.includes(newSearch)
       )
      }
      )))
    })
    }

  return (
    <div className="app">
      <Header
      newSearch={newSearch}
      setNewSearch={setNewSearch}
      listing={listing}
      handleSearch={handleSearch}
            />
      <ListingsContainer
      listing={listing}
      setRender={setRender}
      render={render} />
    </div>
  );
}

export default App;
