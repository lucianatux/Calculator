function App() {
    return (
      <div className="container">
        <div className="grid">
          <div className="padButton dis" id="display"></div>
          <div className="padButton ac" id="clear">AC</div>
          <div className="padButton div" id="divide">/</div>
          <div className="padButton mul" id="multiply">x</div>
          <div className="padButton seven" id="seven">7</div>
          <div className="padButton eight" id="eight">8</div>
          <div className="padButton nine" id="nine">9</div>
          <div className="padButton sub" id="subtract">-</div>
          <div className="padButton four" id="four">4</div>
          <div className="padButton five" id="five">5</div>
          <div className="padButton six" id="six">6</div>
          <div className="padButton add" id="add">+</div>
          <div className="padButton one" id="one">1</div>
          <div className="padButton two" id="two">2</div>
          <div className="padButton three" id="three">3</div>
          <div className="padButton equal" id="equals">=</div>
          <div className="padButton zero" id="zero">0</div>
          <div className="padButton point" id="decimal">.</div>
        </div>
      </div>
    );
  }
  
  ReactDOM.render(<App />, document.getElementById('root'));