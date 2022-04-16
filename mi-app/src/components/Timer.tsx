import { useEffect, useRef, useState } from "react"

type TimeArgs = {
  miliseconds: number
}
 
const Timer = ({miliseconds}:TimeArgs) => {

  const [seconds, setSeconds] = useState(0)
  const ref = useRef<NodeJS.Timeout>();
  // console.log(args.miliseconds);
  

  useEffect(() => {
    // console.log('useEfect');

    ref.current && clearInterval(ref.current );
    ref.current = setInterval(() => setSeconds( s => s + 1), miliseconds );

  },[miliseconds])

  return (
    <>
    <h4> Timer: <small>{seconds}</small></h4>
    </>
  )
}

export default Timer