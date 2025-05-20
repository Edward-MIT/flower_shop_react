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

import React from "react";
import Slider from "react-slick";
import { Box, Typography } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
  {
    image: "/img/birthday_blossom.webp",
    text: "Birthday Plants",
  },
  {
    image: "/img/fresh_flower.webp",
    text: "Fresh Flower Bouquets",
  },
  {
    image: "/img/send_sympathy.webp",
    text: "Gifts with Nature",
  },
  {
    image: "/img/selebration_blooms.webp",
    text: "Celebration Blooms",
  },
];

const HomeSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: "linear",
  };

  return (
    <Box sx={{ width: "100%", height: "500px", overflow: "hidden" }}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <Box
            key={index}
            sx={{
              position: "relative",
              width: "100%",
              height: "500px",
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                backgroundColor: "#fff",
                px: 4,
                py: 2,
              }}
            >
              <Typography
                variant="h2"
                sx={{
                  fontWeight: "bold",
                  color: "#000",
                  textAlign: "center",
                }}
              >
                {slide.text}
              </Typography>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default HomeSlider;
