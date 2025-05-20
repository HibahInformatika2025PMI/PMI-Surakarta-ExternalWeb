/***
 * This section is used to display the FAQ (Frequently Asked Questions) Tab Section.
 * This section is a sub-section of FAQ page.
 */

import React, { useState } from 'react'
import { FaQuestionCircle, FaPlusCircle } from 'react-icons/fa'

import { PrimaryColor } from '../../../themes/color_palletes/ColorPalletes'
import SubHeading from '../../../themes/typography/SubHeading'

const FAQTabSection = ({ questionTitle, children, className, style }) => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [isActive, setIsActive] = useState(false);

  const handleQuestionClick = (index) => {
    setIsActive(!isActive);
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  return (
    <div className={`mb-5 ${className}`} style={style}>
      <div 
        className='flex justify-between items-center px-8 py-4 rounded-lg cursor-pointer shadow-lg'
        style={{ backgroundColor: PrimaryColor.white, border: isActive ? `2px solid` : 'none' }}
        onClick={() => handleQuestionClick(0)}
      >
        <FaQuestionCircle size={20} style={{ color: PrimaryColor.red }} />
        <SubHeading>{questionTitle}</SubHeading>
        <FaPlusCircle size={20} style={{ color: PrimaryColor.red }} />
      </div>
      
      <div className={`transition-transform origin-top transform duration-50 ease-in-out ${isActive ? 'scale-y-100 h-auto' : 'scale-y-0 h-0'}`} style={{ backgroundColor: PrimaryColor.white }}>
        {children}
      </div>
    </div>
  )
}

export default FAQTabSection;