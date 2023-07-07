import React from 'react'
import ClearIcon from '@mui/icons-material/Clear'

const Popup = ({ setOpenPopup, children }) => {
  return (
    <div className="popup_wrapper">
      <div className="popup_content">
        <ClearIcon
          onClick={() => setOpenPopup(false)}
          className="cross_icon margin_bottom_16px"
        />
        <div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  )
}

export default Popup
