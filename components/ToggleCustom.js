import { React, useState, useEffect } from 'react'

export default function ToggleCustom () {
  const [activeTheme, setActiveTheme] = useState('light')
  const inactiveTheme = activeTheme === 'dark' ? 'light' : 'dark'
  useEffect(() => {
    document.getElementById('home').dataset.theme = activeTheme
    document.getElementById('signout-button').dataset.theme = activeTheme
    document.getElementById('toggle').classList.toggle('inactive')
    document.querySelector('.switch').classList.toggle('inactive')
  }, [activeTheme])
  return (
        <div type='button' onClick={ () => setActiveTheme(inactiveTheme)} id='toggle' className='toggle'>
            <div className='switch'></div>
        </div>
  )
}
