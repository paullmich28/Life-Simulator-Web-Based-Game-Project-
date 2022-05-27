import React from 'react'

const GamePage = () => {
  const namaChar = localStorage.getItem("karakter");
  const namaKau = localStorage.getItem("namaKamu");
  const jurusanKau = localStorage.getItem("jurusanKamu");

  return (
    <div className='header2'>
      <h1>{namaChar}</h1>
      <h1>{namaKau}</h1>
      <h1>{jurusanKau}</h1>
    </div>
  )
}

export default GamePage