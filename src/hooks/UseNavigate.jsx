import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const UseNavigate = ({ link }) => {
  const isNavigate = useNavigate();

  const handleNavigate = () => {
    isNavigate({ link })
  };
  
  return { isNavigate, handleNavigate}
}

export default UseNavigate