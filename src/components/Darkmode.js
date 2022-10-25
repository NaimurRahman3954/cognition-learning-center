import React, { useState } from 'react'
import DarkModeToggle from 'react-dark-mode-toggle'

const Darkmode = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => true)
  return (
    <div className="flex items-center">
      <DarkModeToggle onChange={setIsDarkMode} checked={isDarkMode} size={50} />
    </div>
  )
}

export default Darkmode
