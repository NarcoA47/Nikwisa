"use client"
import React from 'react'
import LoginForm from '../components/login/LoginForm'
import { Provider } from 'react-redux';
import { store } from '../../reducers/store'

export default function Sigin() {
  return (
    <Provider store={store}>
      <div className="grid bg-white items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <LoginForm/>
      </div>
    </Provider>
    
  )
}
