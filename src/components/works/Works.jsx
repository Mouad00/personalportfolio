import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Timeline from '@material-ui/lab/Timeline';
// import TimelineItem from '@material-ui/lab/TimelineItem';
// import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
// import TimelineConnector from '@material-ui/lab/TimelineConnector';
// import TimelineContent from '@material-ui/lab/TimelineContent';
// import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
// import TimelineDot from '@material-ui/lab/TimelineDot';
// import FastfoodIcon from '@material-ui/icons/Fastfood';
// import LaptopMacIcon from '@material-ui/icons/LaptopMac';
// import HotelIcon from '@material-ui/icons/Hotel';
// import RepeatIcon from '@material-ui/icons/Repeat';
// import Paper from '@material-ui/core/Paper';
// import Typography from '@material-ui/core/Typography';

import './Works.scss';

// const useStyles = makeStyles((theme) => ({
//   paper: {
//     padding: '6px 16px',
//   },
//   secondaryTail: {
//     backgroundColor: theme.palette.secondary.main,
//   },
// }));

export default function Works() {
  // const classes = useStyles();

  const [currentSlide, setCurrentSlide] = useState(0)
  
  const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Web Design",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. ",
      img:
        "https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "Mobile Application",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "Branding",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/a9/f6/94/a9f69465d972a004ad581f245d6ad581.jpg",
    },
    {
      id: "4",
      icon: "./assets/globe.png",
      title: "Mobile",
      desc:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img:
        "https://i.pinimg.com/originals/e9/c9/2f/e9c92f7869d682a6fa5a97fb8a298f30.jpg",
    }
  ];

  const handleClick = (way) => {
    way === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide-1 : data.length-1) : 
    setCurrentSlide(currentSlide < data.length-1 ? currentSlide+1 : 0)
  }

  return (
    <div className="works" id="works">
    <h1>Projets</h1>
    <div className="slider" style={{transform: `translateX(-${currentSlide *100}vw)`}}>
      
      {data.map((d)=> (
      <div className="container" key={d.id}>
        <div className="item">
          <div className="left">
            <div className="leftContainer">
              <div className="imgContainer" >
                <img src={d.icon} alt=""/>
              </div>
              <h2>{d.title}</h2>
              <p>{d.desc}
              </p>
              <span>Project</span>
            </div>
          </div>
          <div className="right">
            <img src="https://cdn.dribbble.com/users/2597268/screenshots/15468893/media/44313553d73ba41580f1df69749bba28.jpg?compress=1&resize=1200x900" alt="" />
          </div>
        </div>
      </div>
      ))}
    </div>
    <img src="assets/arrow.png" className="arrow left" alt="" onClick={() => handleClick("left")} />
    <img src="assets/arrow.png" className="arrow right" alt="" onClick={() => handleClick("right")} />
    </div>

  );
}
