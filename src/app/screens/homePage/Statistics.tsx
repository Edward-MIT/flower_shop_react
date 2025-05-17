// import React from "react";
// import { Box, Container, Divider, Stack } from "@mui/material";

// export default function Statistics() {
//   return(
//   <div className={"static-frame"}>
//     <Container>
//       <Stack className="info">
//         <Stack className="static-box">
//           <Box className="static-num">12</Box>
//           <Box className="static-text">Restaurant</Box>
//         </Stack>

//         {/* <Divider width="2" height="64" bg="#E3C08D" /> */}
//         <Divider sx={{ width: "2px", height: "64px", backgroundColor: "#E3C08D" }} />

//         <Stack className="static-box">
//           <Box className="static-num">8</Box>
//           <Box className="static-text">Experience</Box>
//         </Stack>

//         <Divider sx={{ width: "2px", height: "64px", backgroundColor: "#E3C08D" }} />

//         <Stack className="static-box">
//           <Box className="static-num">50+</Box>
//           <Box className="static-text">Menu</Box>
//         </Stack>

//         <Divider sx={{ width: "2px", height: "64px", backgroundColor: "#E3C08D" }} />

//         <Stack className="static-box">
//           <Box className="static-num">200+</Box>
//           <Box className="static-text">Clients</Box>
//         </Stack>
//       </Stack>
//     </Container>
//   </div>);
// }

import React from 'react';
import { Card, CardContent, Typography, Grid, Box } from '@mui/material';

const tips = [
  {
    title: '🌹 Roses',
    description: 'Trim the stems at a 45° angle and change the water every 2 days.',
  },
  {
    title: '🌻 Sunflowers',
    description: 'Place them in direct sunlight and use a tall vase to support their stems.',
  },
  {
    title: '🌷 Tulips',
    description: 'Keep them in cool water and away from direct sunlight to avoid drooping.',
  },
  {
    title: '🌼 Daisies',
    description: 'Use lukewarm water and avoid overcrowding in the vase.',
  },
];

export default function FlowerCareTips() {
  return (
    <Box sx={{ padding: 4, backgroundColor: '#fdf6f9' }}>
      <Typography variant="h4" align="center" gutterBottom>
        🌿 Flower Care Tips
      </Typography>
      <Grid container spacing={3}>
        {tips.map((tip, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card sx={{ height: '100%', boxShadow: 3 }}>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  {tip.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {tip.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
