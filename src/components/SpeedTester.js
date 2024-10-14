import React from 'react'
import '../App.css'

const SpeedTester = () => {
  return (
    <div className='mx-auto w-75'>
        <div className='Div-1-Speed'>
            <div className='Div-2-Speed'>
                <div className='Div-3-Speed'>
                    <iframe className='Iframe-Speed' title='speedtest' src="//openspeedtest.com/speedtest"></iframe>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SpeedTester
