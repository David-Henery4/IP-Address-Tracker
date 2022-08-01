import React from 'react'
import Display from './Display'
import Input from './Input'

const Header = () => {
  return (
    <section className='header'>
        <div className='header-items'>
            <h1 className='header__title'>
                IP Address Tracker
            </h1>
            <Input/>
            <Display/>
        </div>
    </section>
  )
}

export default Header