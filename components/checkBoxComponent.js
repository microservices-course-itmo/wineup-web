import React from 'react'
// eslint-disable-next-line
import PropTypes from 'prop-types'

export const Checkbox = ({ label, selected, onChange }) => {
  const handleChange = event => {
    const { selected } = event.target
    onChange(selected)
  }

  return (
    <div className='form-group form-check'>
      <label htmlFor='check'>
        <input
          id='check'
          type='checkbox'
          defaultChecked={selected}
          value={selected}
          onChange={handleChange}
        />
        {label}
      </label>
    </div>
  )
  // eslint-disable-next-line
}

Checkbox.propTypes = {
  selected: PropTypes.bool.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  // eslint-disable-next-line
}

export default Checkbox
