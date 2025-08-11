import React from 'react'
import Select from 'react-select'

const SelectDropdown = ({selectClass}) => {
    const options = [
        { value: 'Default Sorting', label: 'Default Sorting' },
        { value: 'Low to High', label: 'Low to High' },
        { value: 'High to Low', label: 'High to Low' }
      ]
  return (
    <>
        <Select className={`filterSelect select2_design w-100 ${selectClass}`} defaultValue={options[0]} options={options} name="state">
            {
                options.map((item, index) =>
                    <option key={index} value={item.value}>{item.value}</option>
                )
            }
        </Select>
    </>
  )
}

export default SelectDropdown