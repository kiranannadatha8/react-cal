import './calculator.css';

const Calculator = () => {
  return (
    <div className="wrapper d-flex justify-content-center">
      <div className="cal">
        <div className="row"></div>
          <div className="display col d-flex align-items-end justify-content-end" id="display">
            <h1>0</h1>
          </div>
        <div className="lower">
        <div className="row">
          <div className="clear col-6" id="clear">
            <button className="btn btn-primary">AC</button>
          </div>
          <div className="per col-3" id="per">
            <button className="btn btn-danger">%</button>
          </div>
          <div className="divide col-3" id="divide">
            <button className="btn btn-secondary">/</button>
          </div>
        </div>
        <div className="row">
          <div className="num-7 col" id="seven">
            <button className="btn btn-primary rounded-circle">7</button>
          </div>
          <div className="num-8 col" id="eight">
            <button className="btn btn-danger rounded-circle">8</button>
          </div>
          <div className="num-9 col" id="nine">
            <button className="btn btn-secondary rounded-circle">9</button>
          </div>
          <div className="multiply col" id="multiply">
            <button className="btn btn-secondary rounded-circle">X</button>
          </div>
        </div>
        <div className="row">
          <div className="num-4 col" id="four">
            <button className="btn btn-primary rounded-circle">4</button>
          </div>
          <div className="num-5 col" id="five">
            <button className="btn btn-danger rounded-circle">5</button>
          </div>
          <div className="num-6 col" id="six">
            <button className="btn btn-secondary rounded-circle">6</button>
          </div>
          <div className="subtract col" id="subtract">
            <button className="btn btn-secondary btn-lg
             rounded-circle">-</button>
          </div>
        </div>
        <div className="row">
          <div className="num-1 col" id="one">
            <button className="btn btn-primary rounded-circle">1</button>
          </div>
          <div className="num-2 col" id="two">
            <button className="btn btn-danger rounded-circle">2</button>
          </div>
          <div className="num-3 col" id="three">
            <button className="btn btn-secondary btn-lg
            rounded-circle">3</button>
          </div>
          <div className="add col" id="add">
            <button className="btn btn-secondary btn-lg
            rounded-circle">+</button>
          </div>
        </div>
        <div className="row">
          <div className="num-0 col-6" id="zero">
            <button className="btn btn-primary btn-lg
             rounded-circle">0</button>
          </div>
          <div className="decimal col-3" id="decimal">
            <button className="btn btn-danger btn-lg
             btn-lg rounded-circle"><b>.</b></button>
          </div>
          <div className="equals col-3" id="equals">
            <button className="btn btn-secondary btn-lg
             rounded-circle">=</button>
          </div>
        </div>
      </div>
        </div>
    </div>
  )
}

export default Calculator