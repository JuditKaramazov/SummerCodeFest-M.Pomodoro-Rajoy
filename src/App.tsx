import { TimerProvider } from './context/TimerContext';
import { ThemeSwitcher } from './components/client/ThemeSwitcher';
import './App.css';

export default function App() {
  return (
    <main>
      <ThemeSwitcher />
      <TimerProvider>

      </ TimerProvider>
    </main>
  )
}
