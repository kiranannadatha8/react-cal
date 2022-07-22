import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX, faDivide, faEquals, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import './calculator.css';

const Calculator = () => {
  return (
    <div className="wrapper d-flex justify-content-center">
      <div className="cal">
          <div className="display d-flex align-items-end justify-content-end" id="display">
            <h1>0</h1>
          </div>
        <div className="lower">
        <div className="row">
          <div className="clear col-6">
            <button className="btn btn-light btn-lg" id='clear'>AC</button>
          </div>
          <div className="per col-3">
            <button className="btn btn-light btn-lg rounded-circle" id="per">%</button>
          </div>
          <div className="divide col-3">
            <button className="btn btn-secondary btn-lg rounded-circle" id="divide"><FontAwesomeIcon icon={faDivide} size="md"/></button>
          </div>
        </div>
        <div className="row">
          <div className="num-7 col">
            <button className="btn btn-dark rounded-circle btn-lg" id="seven">7</button>
          </div>
          <div className="num-8 col">
            <button className="btn btn-dark rounded-circle btn-lg" id="eight">8</button>
          </div>
          <div className="num-9 col">
            <button className="btn btn-dark rounded-circle btn-lg" id="nine">9</button>
          </div>
          <div className="multiply col">
            <button className="btn btn-secondary rounded-circle btn-lg" id="multiply"><FontAwesomeIcon icon={faX} size="md"/></button>
          </div>
        </div>
        <div className="row">
          <div className="num-4 col">
            <button className="btn btn-dark rounded-circle btn-lg" id="four">4</button>
          </div>
          <div className="num-5 col">
            <button className="btn btn-dark rounded-circle btn-lg" id="five">5</button>
          </div>
          <div className="num-6 col">
            <button className="btn btn-dark rounded-circle btn-lg" id="six">6</button>
          </div>
          <div className="subtract col">
            <button className="btn btn-secondary btn-lg
             rounded-circle" id="subtract"><FontAwesomeIcon icon={faMinus} size="md"/></button>
          </div>
        </div>
        <div className="row">
          <div className="num-1 col">
            <button className="btn btn-dark rounded-circle btn-lg" id="one">1</button>
          </div>
          <div className="num-2 col">
            <button className="btn btn-dark rounded-circle btn-lg" id="two">2</button>
          </div>
          <div className="num-3 col">
            <button className="btn btn-dark btn-lg
            rounded-circle" id="three">3</button>
          </div>
          <div className="add col">
            <button className="btn btn-secondary btn-lg
            rounded-circle" id="add"><FontAwesomeIcon icon={faPlus} size="md"/></button>
          </div>
        </div>
        <div className="row">
          <div className="num-0 col-6">
            <button className="btn btn-dark btn-lg" id="zero">0</button>
          </div>
          <div className="decimal col-3">
            <button className="btn btn-dark btn-lg
             btn-lg rounded-circle" id="decimal"><b>.</b></button>
          </div>
          <div className="equals col-3">
            <button className="btn btn-secondary btn-lg
             rounded-circle" id="equals"><FontAwesomeIcon icon={faEquals} size="md"/></button>
          </div>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Calculator