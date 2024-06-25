import React from 'react'
import Hero from "../components/Hero";
import Departments from "../components/Departments";
import Biography from "../components/Biography";
import MessageForm from "../components/MessageForm";
const Home = () => {
  return <>
   <Hero title={"Welcome to DocDiv, where your health is our priority"} 
   imageUrl = {"/3d_Doctor2.png"}/>
   <Biography  imageUrl={"/about.png"}/>
   <Departments />
   <MessageForm />
   </>
};

export default Home
