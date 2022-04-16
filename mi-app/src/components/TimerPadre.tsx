import Timer from './Timer';

const TimerPadre = () => {
  return (
    <>
      <span>Miliseguntods { 1000 } </span>

      <br />
      <button className="btn btn-outline-success">
        1000
      </button>
      <Timer />
    </>
  )
}

export default TimerPadre