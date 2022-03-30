import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrementCount, incrementCount } from './store';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  return (
    <div id='main'
      onClick={() => dispatch(incrementCount())}
      onContextMenu={e => {
        e.preventDefault();
        dispatch(decrementCount());
      }}
      >
      { counter }
    </div>
  );
}

export default App;
