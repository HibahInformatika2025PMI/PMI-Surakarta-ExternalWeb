/***
 * This is the component for the table with 3 headers.
 * 
 * Is used in:
 * - ThirdHomeSection.jsx
 */

import React from 'react'

import { PrimaryColor, SecondaryColor } from '../../themes/color_palletes/ColorPalletes'

const Table3Header = ({ data, tableHeading1, tableHeading2, tableHeading3, className, style }) => {
  return (
    <div className={`overflow-x-auto ${className}`} style={style}>
      <table className='w-full border-2 rounded-lg' style={{ borderColor: PrimaryColor.black }}>
        <thead>
          <tr style={{ backgroundColor: SecondaryColor.dark_red, color: PrimaryColor.white }}>
            <th className='py-2 px-4 border-2' style={{ borderColor: PrimaryColor.black }}>{tableHeading1}</th>
            <th className='py-2 px-4 border-2' style={{ borderColor: PrimaryColor.black }}>{tableHeading2}</th>
            <th className='py-2 px-4 border-2' style={{ borderColor: PrimaryColor.black }}>{tableHeading3}</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className='border-b-2' style={{ borderColor: PrimaryColor.black }}>
              <td className='py-2 px-4 border-2' style={{ borderColor: PrimaryColor.black }}>{item.Header1}</td>
              <td className='py-2 px-4 text-center border-2' style={{ borderColor: PrimaryColor.black }}>{item.Header2}</td>
              <td className='py-2 px-4 text-center border-2' style={{ borderColor: PrimaryColor.black }}>{item.Header3}</td>
            </tr>
          ))}
        </tbody>
      </table>  
    </div>
  )
}

export default Table3Header