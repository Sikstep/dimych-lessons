import {useEffect, useState} from 'react'
import './App.css'

function useCounter(): any {
    let [count, setCount] = useState(0)
    return {
        count: count,
        increment: () => setCount(count + 1),
        decrement: () => setCount(count - 1),
    };
}

function useSybcTitle(title: string):void {
  useEffect(() => {
    document.title = title
  })
}

function App(): JSX.Element {

  const counter = useCounter();
  useSybcTitle(counter.value)

    return (
        <div className="App">
            <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
            <button onClick={() => setCount(prev => prev + 1)}>{count}</button>
        </div>
    )
}


export default App
