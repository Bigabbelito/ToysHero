import { useState, useEffect } from "react"
import '../../styles/clock.css'
const Clock = () => {


    const [day, setDays] = useState()
    const [houre, setHours] = useState()
    const [minutes, setMinutes] = useState()
    const [seconds, setSeconds] = useState()

    let interval;

    const countDown = ()=> {

        const destination = new Date('may 24, 2023').getTime()
          
        interval = setInterval(() =>{
            const now = new Date().getTime()
            const different = destination - now
            const day = Math.floor(different / (1000 * 60 * 60 * 24))
            const houre = Math.floor((different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((different % (1000 * 60)) / 1000)

            if(destination < 0) clearInterval(interval.current)
            else{
                setDays(day)
                setHours(houre)
                setMinutes(minutes)
                setSeconds(seconds)
            }
        })
        }

        useEffect(() =>{
            countDown()
        })
    return (
    <div className="clock__wrapper d-flex align-items-center gap-3">
    <div className="clock__date d-flex align-items-center gap-3">
    <div className="text-center">
        <h1 className="text-white fs-3 mb-2">{day}</h1>
        <h5 className="text-white fs-6">Days</h5>
    </div>
    <span className="text-white fs-3">:</span>
    </div>

    <div className="clock__date d-flex align-items-center gap-3">
    <div className="text-center">
        <h1 className="text-white fs-3 mb-2">{houre}</h1>
        <h5 className="text-white fs-6">Hours</h5>
    </div>
    <span className="text-white fs-3">:</span>
    </div>

    <div className="clock__date d-flex align-items-center gap-3">
    <div className="text-center">
        <h1 className="text-white fs-3 mb-2">{minutes}</h1>
        <h5 className="text-white fs-6">Minutes</h5>
    </div>
    <span className="text-white fs-3">:</span>
    </div>

    <div className="clock__date d-flex align-items-center gap-3">
    <div className="text-center">
        <h1 className="text-white fs-3 mb-2">{seconds}</h1>
        <h5 className="text-white fs-6">Seconds</h5>
    </div>
    </div>
    </div>
  )
}

export default Clock
