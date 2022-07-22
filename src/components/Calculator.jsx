import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faDivide, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './calculator.css';
import { useSelector, useDispatch } from 'react-redux';
import { handleClick, clear, result } from '../features/calSlice';

const Calculator = () => {
  let display = useSelector((state) => state.cal.display)
  const dispatch = useDispatch()
  return (
    <div className="wrapper d-flex justify-content-center">
      <div className="cal">
          <div className="display d-flex align-items-end justify-content-end" id="display">
            <h1>{display === "" ? "0" : display}</h1>
          </div>
        <div className="lower">
        <div className="row">
          <div className="clear col-6">
            <button className="btn btn-light btn-lg" id='clear' onClick={() => dispatch(clear())}>AC</button>
          </div>
          <div className="per col-3">
            <button className="btn btn-light btn-lg rounded-circle" id="per" onClick={() => dispatch(handleClick("%"))}>%</button>
          </div>
          <div className="divide col-3">
            <button className="btn btn-secondary btn-lg rounded-circle" id="divide" onClick={() => dispatch(handleClick("/"))}><FontAwesomeIcon icon={faDivide} size="sm"/></button>
          </div>
        </div>
        <div className="row">
          <div className="num-7 col">
            <button className="btn btn-dark rounded-circle btn-lg" id="seven" onClick={() => dispatch(handleClick("7"))}>7</button>
          </div>
          <div className="num-8 col">
            <button className="btn btn-dark rounded-circle btn-lg" id="eight" onClick={() => dispatch(handleClick("8"))}>8</button>
          </div>
          <div className="num-9 col">
            <button className="btn btn-dark rounded-circle btn-lg" id="nine" onClick={() => dispatch(handleClick("9"))}>9</button>
          </div>
          <div className="multiply col">
            <button className="btn btn-secondary rounded-circle btn-lg" id="multiply" onClick={() => dispatch(handleClick("*"))}><FontAwesomeIcon icon={faX} size="sm"/></button>
          </div>
        </div>
        <div className="row">
          <div className="num-4 col">
            <button className="btn btn-dark rounded-circle btn-lg" id="four"
            onClick={() => dispatch(handleClick("4"))}>4</button>
          </div>
          <div className="num-5 col">
            <button className="btn btn-dark rounded-circle btn-lg" id="five"
            onClick={() => dispatch(handleClick("5"))}>5</button>
          </div>
          <div className="num-6 col">
            <button className="btn btn-dark rounded-circle btn-lg" id="six"
            onClick={() => dispatch(handleClick("6"))}>6</button>
          </div>
          <div className="subtract col">
            <button className="btn btn-secondary btn-lg
             rounded-circle" id="subtract" onClick={() => dispatch(handleClick("-"))}><FontAwesomeIcon icon={faMinus} size="sm"/></button>
          </div>
        </div>
        <div className="row">
          <div className="num-1 col">
            <button className="btn btn-dark rounded-circle btn-lg" id="one"
            onClick={() => dispatch(handleClick("1"))}>1</button>
          </div>
          <div className="num-2 col">
            <button className="btn btn-dark rounded-circle btn-lg" id="two"
            onClick={() => dispatch(handleClick("2"))}>2</button>
          </div>
          <div className="num-3 col">
            <button className="btn btn-dark btn-lg
            rounded-circle" id="three" onClick={() => dispatch(handleClick("3"))}>3</button>
          </div>
          <div className="add col">
            <button className="btn btn-secondary btn-lg
            rounded-circle" id="add" onClick={() => dispatch(handleClick("+"))}><FontAwesomeIcon icon={faPlus} size="sm"/></button>
          </div>
        </div>
        <div className="row">
          <div className="num-0 col-6">
            <button className="btn btn-dark btn-lg" id="zero"
            onClick={() => dispatch(handleClick("0"))}>0</button>
          </div>
          <div className="decimal col-3">
            <button className="btn btn-dark btn-lg
             btn-lg rounded-circle" id="decimal" onClick={() => dispatch(handleClick("."))}><b>.</b></button>
          </div>
          <div className="equals col-3">
            <button className="btn btn-secondary btn-lg
             rounded-circle" id="equals" onClick={() => dispatch(result())}>=</button>
          </div>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Calculator