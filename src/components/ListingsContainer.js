import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({listing, setRender, render}) {

  function handleDelete(obj){

    console.log(obj);
    fetch(`http://localhost:6001/listings/${obj.id}`,
    {
      method:'DELETE'
    })
    setRender(!render)
  }

  const displayListing = listing.map((blam)=>{
    return(
      <ListingCard key={blam.id} blam={blam} handleDelete={handleDelete} />
    )
  })
  
  return (
    <main>
      <ul className="cards">
        { displayListing }
      </ul>
    </main>
  );
}

export default ListingsContainer;
