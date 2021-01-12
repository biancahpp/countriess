import React from 'react'
import { Link } from 'react-router-dom'

export default function BackBtn() {
  return (
    <div className="BackBtn">
      <Link to="/">
      <button> BACK </button>
      </Link>
    </div>
  )
}
