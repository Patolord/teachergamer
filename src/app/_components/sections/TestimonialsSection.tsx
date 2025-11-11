"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import "./Testimonials.css";

type message = {
  id: number;
  text?: string;
  handle?: string;
  image?: string;
};

interface TestimonialsProps {
  sectionIndex?: number;
}

const Testimonials = ({ sectionIndex }: TestimonialsProps) => {

  
    return (
      <div>     
    Testimonials
      </div>
    );
  };


export default Testimonials;
