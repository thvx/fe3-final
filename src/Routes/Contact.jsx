import React, { useContext } from 'react'
import Form from '../Components/Form'
import "../index.css"
import { ContextGlobal } from "../Components/utils/global.context"

const Contact = () => {
  const { state } = useContext(ContextGlobal);

  return (
    <div className={`container-col ${state.theme}`}>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
    </div>
  )
}

export default Contact