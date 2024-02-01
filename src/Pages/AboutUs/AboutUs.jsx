import React, { Fragment } from "react";
import AboutBanner from "./Banner/AboutBanner";
import AboutDetails from "./AboutDetails/AboutDetails";
import About from "../AboutUs/About/About";

const AboutUs = () => {
  const detailsJSON = [
    {
      title: "Who are we?",
      content:
        "At SmartGrad, we're more than just a platform; we're your partners in success. Our commitment to excellence extends offering the resources and guidance you need to excel academically, advance your career, acquire new skills, and expand your professional network. Let us be your compass on your journey to success, helping you unlock opportunities and achieve your aspirations one step at a time. With SmartGrad, your path to a brighter future unfolds seamlessly. Join us today and embark on a transformative journey towards a world of endless possibilities!",
      imageClass: "order-1 mmd:order-1",
      divClass: "order-2",
      image: "/assets/images/about-us/who-are-we.png",
    },
    {
      title: "UNIVERSITY APPLICATIONS MADE EASY",
      content:
        "At SmartGrad, we're dedicated to helping you embark on your academic journey seamlessly. Our platform, backed by the expertise of Oxford alumni and powered by AI, offers a range of services to make your university application process a breeze. From finding the perfect program and preparing for language tests to crafting compelling SOPs and securing scholarships, we've got it all covered. Join us for educational opportunities or book a personalized session with a sector consultant.",
      imageClass: "order-1 mmd:order-2",
      divClass: "order-2 mmd:order-1",
      image: "/assets/images/about-us/application.jpg",
    },
    {
      title: "Discover Your Dream Career",
      content:
        "SmartGrad is your gateway to a fulfilling career. With our extensive network of industry professionals and advanced AI technology, we're here to guide you towards the job that aligns perfectly with your goals and qualifications. Whether you're just starting out or looking to make a change, our platform is your ultimate resource for finding the ideal career opportunities. Join us now, and let's embark on this exciting journey together. Your success is our top priority.",
      imageClass: "order-1 mmd:order-1",
      divClass: "order-2",
      image: "/assets/images/about-us/aboutcareer.png",
    },
    {
      title: "Unlock Your Potential with Aptitude",
      content:
        "we believe in continuous learning and personal growth. Our Aptitude section offers a diverse range of courses designed to enhance your skills, whether you're preparing for university applications or advancing your career. With options spanning various fields, from technology and business to lifestyle and beyond, you can tailor your learning journey to suit your interests and ambitions. Join us today to explore our comprehensive course catalog and embark on a path to success. Your journey towards acquiring valuable skills starts here.",
      imageClass: "order-1 mmd:order-2",
      divClass: "order-2 mmd:order-1",
      image: "/assets/images/about-us/aptitude.png",
    },
    {
      title: "Expand Your Network with SmartGrad",
      content:
        "Unlock doors to success with SmartGrad's vibrant network. Connect, learn, and grow alongside industry leaders, professionals, educators, and alumni. Seek expert guidance, schedule personalized sessions, and contribute to our thriving community. Join us today to embark on a journey of endless opportunities in University, Career, Aptitude, and Networking. Your success starts here.",
      imageClass: "order-1 mmd:order-1",
      divClass: "order-2",
      image: "/assets/images/about-us/network.png",
    },
  ];
  return (
    <Fragment>
      <AboutBanner />
      {detailsJSON.map((detail, index) => (
        <AboutDetails key={index} item={detail} />
      ))}
      <About title={"Company Founders"} />
    </Fragment>
  );
};

export default AboutUs;
