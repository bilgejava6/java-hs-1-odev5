import React from 'react'
import MyButton from '../components/atoms/MyButton'

function AnaSayfa() {
  return (
    <div className="container">
      <div className="row mt-5 justify-content-center">
        <div className="col-4 p-3 shadow text-center">
            <div className="row mb-3">
                <MyButton type='btn1' value='Personel Ekle'/>
            </div>
            <div className="row mb-3">
                <MyButton type='btn1' value='Personel Listesi'/>
            </div>
            <div className="row mb-3 text-start">
                <label className="form-label">Hata Bildir</label>
            </div>
            <div className="mb-3 jutify-content-center align-content-center">
                <MyButton type='btn3' value=''/>
            </div>           
        </div>
      </div>
    </div>
  )
}

export default AnaSayfa