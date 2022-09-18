import React from 'react'
import Select from 'react-select'
import './index.css'

class MySelect extends React.Component {
  render() {
    const {selected, onChange, options, placeholder} = this.props
    const customStyles = {
      //   menu: (provided, state) => ({
      //     ...provided,
      //     //     // borderBottom: '1px dotted pink',
      //     //     //   color: state.isSelected ? 'red' : 'blue',
      //     color: '#F8FAFC',
      //     //     // padding: 20,
      //   }),
      singleValue: base => ({
        ...base,
        color: '#F8FAFC',
      }),
      control: (base, state) => ({
        ...base,
        background: '#222234',
        // borderRadius: state.isFocused ? '3px 3px 0 0' : 3,
        borderRadius: '5px',
        border: 'none',
        // color: '#F8FAFC',
        // borderColor: state.isFocused ? 'yellow' : 'green',
        boxShadow: state.isFocused ? null : null,
        '&:hover': {
          borderColor: state.isFocused ? 'red' : 'blue',
        },
      }),
      menu: base => ({
        ...base,
        borderRadius: 0,
        marginTop: 0,
        // color: '#F8FAFC',
      }),
      menuList: base => ({
        ...base,
        padding: 0,
        background: '#222234',
      }),
    }
    return (
      <Select
        className="react-select-container"
        styles={customStyles}
        placeholder={placeholder}
        value={selected}
        onChange={onChange}
        options={options}
        components={{
          IndicatorSeparator: () => null,
        }}
      />
    )
  }
}

export default MySelect
