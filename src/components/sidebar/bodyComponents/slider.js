import { Component } from "react";
import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import Slide2 from '../../../assets/images/slider2.png' 

export const MySlider = () => {
  return (
    <div className="slide-section">
      <div className="grid grid-cols-1 gap-5 md:grid-cols-1 lg:grid-cols-2" style={{paddingTop:60}}>
          <div className="p-4">
            <div style={{paddingTop:100}}>
              <p className="text-3xl">Stylish</p>
              <p className="text-7xl mt-5">Mail Clothes</p>
              <p className="text-3xl mt-5" style={{color:'#010101'}}>30% off Summer Vacation</p>
              <button class="bg-white hover:bg-indigo-700  transition-all duration-300 ease-in-out font-semibold border border-gray-400 rounded shadow mt-10 slider-button">
                Shop Now
              </button>
            </div>
          </div>
          <div className=" p-4">
            <img src={Slide2}  />
          </div>
      </div>


    </div>
  );
};