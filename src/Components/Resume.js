import React from 'react'

const Resume = () => {
    const pdfData = localStorage.getItem("resume")
  return (
    <div>
      <embed src={pdfData} type="application/pdf" width="100%" height="700px" />
    </div>
  )
}

export default Resume
