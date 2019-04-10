const log = console.log.bind(console);
const eases = window.eases;
const SlideToggle = window.ReactSlideToggle;

const ToggleText = () => "Submit Request to Fix Trail";

const defaultEase = eases["cubicInOut"];

class App extends React.Component {
  render() {
    return (
      <div className="app">
        <div className="content">
          <h1>React Slide Toggle</h1>
        </div>

        <SlideToggle
          duration={1000}
          collapsed
          render={({
            onToggle,
            setCollapsibleElement,
            toggleState,
            isMoving,
            hasReversed,
            range,
            progress
          }) => (
            <div
              className={
                "slide-toggle slide-toggle--special " +
                (toggleState || "").toLowerCase()
              }
            >
              <div className="slide-toggle__header">
                <button className="slide-toggle__toggle" onClick={onToggle}>
                  <ToggleText />
                </button>
              </div>
              <div className="slide-toggle__box" ref={setCollapsibleElement}>
                <div
                  className="slide-toggle__box-inner"
                  style={{ opacity: Math.max(0.5, range) }}
                >
                <p>Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean ultricies mi vitae est. Mauris placerat eleifend leo.</p>

                  <button onClick={onToggle}>
                    <ToggleText />
                  </button>
                  
                </div>
              </div>

              <div className="state-values">
                <div>
                  <span>toggleState:</span>
                  <span>{toggleState}</span>
                </div>
                <div>
                  <span>range:</span>
                  <span>{range.toFixed(1)}</span>
                </div>
                <div>
                  <span>isMoving:</span>
                  <span>{isMoving + ""}</span>
                </div>
                <div>
                  <span>hasReversed:</span>
                  <span>{hasReversed + ""}</span>
                </div>
              </div>
            </div>
          )}
        />

      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#react-app"));
