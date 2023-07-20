import { TimerProvider } from './context/TimerContext';
import { ThemeSwitcher } from './components/client/ThemeSwitcher';
import Timer from './components/server/Timer';
import './App.css';

export default function App() {
  
  return (
    <main>
      <ThemeSwitcher />
      <TimerProvider>
        <Timer />
      </ TimerProvider>
    </main>
  )
}
