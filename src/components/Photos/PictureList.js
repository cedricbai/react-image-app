import React from 'react';
import Picture from '../Photos/Picture';
import NoPics from '../Photos/NoPics'





const PictureList = props => {

const results = props.data;
let pics;
if (results.length > 0) {
   pics = results.map(pic =>
 <Picture url={`https://farm${pic.farm}.staticflickr.com/${pic.server}/${pic.id}_${pic.secret}_m.jpg`} key={pic.id} alt={props.title} /> );
    } else {
   pics = <NoPics />

}

return(
    <div>
      <ul>
        {pics}
      </ul>
    </div>
);

}

export default PictureList;