

import React from 'react';
import Card from '../Cards'
const CardContainer = ({ houses }) => {
  return (
  <>
     {
         houses.length && houses.map((house)=> <Card house={house} />)
     }
     
     </>




      /* <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {houses.map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            {houses.length && houses.map((house) => <HouseCard house={house} />)}
          </Grid>
        ))}
      </Grid> */
    // </>
  );
}
export default CardContainer

