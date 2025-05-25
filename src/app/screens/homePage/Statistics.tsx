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

// import React from "react";
// import Slider from "react-slick";
// import { Box, Typography } from "@mui/material";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const slides = [
//   {
//     image: "/img/birthday_blossom.webp",
//     text: "Birthday Plants",
//   },
//   {
//     image: "/img/fresh_flower.webp",
//     text: "Fresh Flower Bouquets",
//   },
//   {
//     image: "/img/send_sympathy.webp",
//     text: "Gifts with Nature",
//   },
//   {
//     image: "/img/selebration_blooms.webp",
//     text: "Celebration Blooms",
//   },
// ];

// const HomeSlider = () => {
//   const settings = {
//     dots: false,
//     infinite: true,
//     speed: 1000,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 5000,
//     cssEase: "linear",
//   };

//   return (
//     <Box sx={{ width: "100%", height: "400px", overflow: "hidden" }}>
//       <Slider {...settings}>
//         {slides.map((slide, index) => (
//           <Box
//             key={index}
//             sx={{
//               position: "relative",
//               width: "100%",
//               height: "400px",
//               backgroundImage: `url(${slide.image})`,
//               backgroundSize: "cover",
//               backgroundPosition: "center",
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//             }}
//           >
//             <Box
//               sx={{
//                 backgroundColor: "#fff",
//                 display:"flex",
//                 justifyContent: "center",
//                 textAlign: "center",
//                 px: 4,
//                 py: 2,
//               }}
//             >
//               <Typography
//                 variant="h2"
//                 sx={{
//                   fontWeight: "bold",
//                   color: "#000",
//                   textAlign: "center",
//                 }}
//               >
//                 {slide.text}
//               </Typography>
//             </Box>
//           </Box>
//         ))}
//       </Slider>
//     </Box>
//   );
// };

// export default HomeSlider;


// import React, { useEffect, useState } from 'react';
// import {
//   Card,
//   CardContent,
//   Typography,
//   Box,
//   Fade,
// } from '@mui/material';

// const cardsData = [
//   {
//     title: 'Card 1',
//     description: 'Bu birinchi card ma’lumoti.',
//     bgImage: '/img/asosiy.png',
//   },
//   {
//     title: 'Card 2',
//     description: 'Ikkinchi card haqida qisqacha.',
//     bgImage: 'url(https://source.unsplash.com/random/1920x1080?technology)',
//   },
//   {
//     title: 'Card 3',
//     description: 'Uchinchi card ichidagi matn.',
//     bgImage: 'url(https://source.unsplash.com/random/1920x1080?space)',
//   },
//   {
//     title: 'Card 4',
//     description: 'To‘rtinchi carddagi ma’lumot.',
//     bgImage: 'url(https://source.unsplash.com/random/1920x1080?city)',
//   },
// ];

// const FullWidthCardsSlider = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [show, setShow] = useState(true);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setShow(false);
//       setTimeout(() => {
//         setCurrentIndex((prev) => (prev + 1) % cardsData.length);
//         setShow(true);
//       }, 300);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   const currentCard = cardsData[currentIndex];

//   return (
//     <Box
//      sx={{
//     width: '100%',
//     height: '400px',
//     backgroundImage: `url(${currentCard.bgImage})`,
//     backgroundSize: 'cover',
//     backgroundPosition: 'center',
//     backgroundRepeat: 'no-repeat',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     transition: 'background-image 0.5s ease-in-out',
//       }}
//     >
//       <Fade in={show} timeout={3000}>
//         <Card
//           sx={{
//             width: 600,
//             padding: 4,
//             borderRadius: 4,
//             boxShadow: 10,
//             backgroundColor: 'rgba(255, 255, 255, 0.9)', // yarim shaffof
//             textAlign: 'center',
//           }}
//         >
//           <CardContent>
//             <Typography variant="h4" gutterBottom>
//               {currentCard.title}
//             </Typography>
//             <Typography variant="body1">
//               {currentCard.description}
//             </Typography>
//           </CardContent>
//         </Card>
//       </Fade>
//     </Box>
//   );
// };

// export default FullWidthCardsSlider;


import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Box,
  Stack,
  IconButton,
} from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';

const cardsData = [
  {
    title: 'Birthday Blooms',
    description: 'Shop All Birthday Flowers & Gifts >>.',
    bgImage: '/img/birthday_blossom.webp',
  },
  {
    title: 'Need It Today',
    description: 'Shop All Same Day Flowers >>',
    bgImage: '/img/selebration_blooms.webp',
  },
  {
    title: 'Send Sympathy',
    description: 'Shop Sympathy & Funeral Flowers >>',
    bgImage: '/img/send_sympathy.webp',
  },
  {
    title: 'Say I Love You',
    description: 'Shop Love & Romance',
    bgImage: '/img/fresh_flower.webp',
  },
];

const FullWidthCardsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % cardsData.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        height: '400px',
        marginTop: "25px",
      }}
    >
      {cardsData.map((card, index) => (
        <Box
          key={index}
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${card.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 0.6s ease',
            opacity: index === currentIndex ? 1 : 0,
            transform:
              index === currentIndex ? 'translateX(0)' : 'translateX(100%)',
            zIndex: index === currentIndex ? 2 : 1,
          }}
        >
          <Card
            sx={{
              width: 600,
              padding: 4,
              borderRadius: 4,
              boxShadow: 10,
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              textAlign: 'center',
            }}
          >
            <CardContent>
              <Typography variant="h2" gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="body1">{card.description}</Typography>
            </CardContent>
          </Card>
        </Box>
      ))}

      {/* Indikatorlar */}
      <Stack
        direction="row"
        spacing={1}
        sx={{
          position: 'absolute',
          bottom: 16,
          width: '100%',
          justifyContent: 'center',
        }}
      >
        {cardsData.map((_, index) => (
          <IconButton
            key={index}
            onClick={() => setCurrentIndex(index)}
            sx={{ padding: 0.5 }}
          >
            <CircleIcon
              sx={{
                fontSize: 45,
                color: index === currentIndex ? 'black' : 'rgba(241, 239, 239, 0.5)',
              }}
            />
          </IconButton>
        ))}
      </Stack>
    </Box>
  );
};

export default FullWidthCardsSlider;
