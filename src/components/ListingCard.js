import React, {useState} from "react";

function ListingCard({blam, handleDelete}) {

  const [star, setStar] = useState(true)

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={blam.image} alt={blam.description} />
      </div>
      <div className="details">
        { !star ?
         <button onClick={()=>{setStar(!star)}} className="emoji-button favorite active">★</button>:
         <button onClick={()=>{setStar(!star)}} className="emoji-button favorite">☆</button>
        }
        <strong>{blam.description}</strong>
        <span> · {blam.location}</span>
        <button onClick={()=>handleDelete(blam)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
