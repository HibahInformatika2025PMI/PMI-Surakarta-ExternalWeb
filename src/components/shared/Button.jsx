import React from 'react'
import { Colors } from '../../themes/ColorPallete';
import UseHover from '../../hooks/UseHover';

// Base Button
const BaseButton = ({ children, className='', style={}, ...props }) => {
  return (
    <button
      className={`px-4 py-2 text-base font-bold rounded-lg transition-colors duration-200 focus:outline-none ${className  || ''}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  )
}

// 1. Red Button
export const RedButton = ({ children, className, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseHover();
  
  return (
    <BaseButton
      className={`${className || ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        backgroundColor: isHovered ? Colors.primary.white : Colors.primary.red,
        color: isHovered? Colors.primary.red : Colors.primary.white,
        border: '2px solid',
        transition: 'background-color 0.2s ease'
      }}
      {...props}
    >
      {children}
    </BaseButton>
  )
}

// 2. Gradient Red-Purple Button
export const GradientRedPurpleButton = ({ children, className, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseHover();
  
  return (
    <BaseButton
      className={`text-white ${className || ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        background: isHovered ? Colors.primary.white : Colors.gradient.gradient3,
        color: isHovered ? Colors.primary.red : Colors.primary.white,
        border: '2px solid',
        transition: 'background-color 0.2s ease'
      }}
      {...props}
    >
      {children}
    </BaseButton>
  )
}

// 3. Gradient Red Button
export const GradientRedButton = ({ children, className, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseHover();
  
  return (
    <BaseButton
      className={`text-white ${className || ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        background: isHovered ? Colors.primary.white : Colors.gradient.gradient1,
        color: isHovered ? Colors.primary.red : Colors.primary.white,
        border: '2px solid',
        transition: 'background-color 0.2s ease'
      }}
      {...props}
    >
      {children}
    </BaseButton>
  )
}

// 4. Grey Button
export const GreyButton = ({ children, className, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseHover();
  
  return (
    <BaseButton
      className={`${className || ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        backgroundColor: isHovered ? Colors.primary.grey : Colors.primary.white,
        color: isHovered? Colors.primary.white : Colors.primary.grey,
        border: '2px solid',
        transition: 'background-color 0.2s ease'
      }}
      {...props}
    >
      {children}
    </BaseButton>
  )
}

// 5. Info Button
export const InfoButton = ({ children, className, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseHover();
  
  return (
    <BaseButton
      className={`${className || ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        backgroundColor: isHovered ? Colors.secondary.lightBlue : Colors.primary.blue,
        color: isHovered ? Colors.secondary.lightSilver : Colors.primary.white,
        transition: 'background-color 0.2s ease'
      }}
      {...props}
    >
      {children}
    </BaseButton>
  )
}

// 6. Success Button
export const SuccessButton = ({ children, className, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseHover();
  
  return (
    <BaseButton
      className={`${className || ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        backgroundColor: isHovered ? Colors.secondary.lightGreen : Colors.primary.green,
        color: isHovered? Colors.secondary.lightSilver : Colors.primary.white,
        transition: 'background-color 0.2s ease'
      }}
      {...props}
    >
      {children}
    </BaseButton>
  )
}

// 7. Warning Button
export const WarningButton = ({ children, className, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseHover();
  
  return (
    <BaseButton
      className={`${className || ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        backgroundColor: isHovered ? Colors.secondary.lightYellow : Colors.primary.yellow,
        color: isHovered? Colors.secondary.lightSilver : Colors.primary.white,
        transition: 'background-color 0.2s ease'
      }}
      {...props}
    >
      {children}
    </BaseButton>
  )
}

// 8. Danger Button
export const DangerButton = ({ children, className, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseHover();
  
  return (
    <BaseButton
      className={`${className || ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        backgroundColor: isHovered ? Colors.secondary.lightMaroon : Colors.primary.maroon,
        color: isHovered? Colors.secondary.lightSilver : Colors.primary.white,
        transition: 'background-color 0.2s ease'
      }}
      {...props}
    >
      {children}
    </BaseButton>
  )
}

// 9. Outline Button
export const OutlineButton = ({ children, className, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseHover();
  
  return (
    <BaseButton
      className={`font-bold ${className || ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        backgroundColor: isHovered ? Colors.primary.red : Colors.primary.white,
        color: isHovered? Colors.secondary.lightSilver : Colors.primary.red,
        border: '2px solid',
        transition: 'background-color 0.2s ease'
      }}
      {...props}
    >
      {children}
    </BaseButton>
  )
}

// 10. Gradient Outline Button
export const GradientOutlineButton = ({ children, className, ...props }) => {
  const { isHovered, handleMouseEnter, handleMouseLeave } = UseHover();
  
  return (
    <BaseButton
      className={`font-bold ${className || ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        backgroundColor: isHovered ? Colors.primary.red : Colors.primary.white,
        color: isHovered? Colors.secondary.lightSilver : Colors.primary.red,
        border: '2px solid',
        transition: 'background-color 0.2s ease'
      }}
      {...props}
    >
      {children}
    </BaseButton>
  )
}