import { useEffect, useState } from "react"

const Timer = (millisec:any) => {

  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    setInterval(() => setSeconds( s => s + 1), 1000 );
  },[])

  return (
    <>
    <h4> Timer: <small>{seconds}</small></h4>
    </>
  )
}

export default Timer