import { AudioProvider } from './context/AudioContext';
import { TimerProvider } from './context/TimerContext';
import { ThemeSwitcher } from './components/client/ThemeSwitcher';
import Audio from './components/server/Audio';
import Timer from './components/server/Timer';
import './App.css';

export default function App() {

  return (
    <main>
      <ThemeSwitcher />
      <TimerProvider>
        <Timer />
      </ TimerProvider>
      <AudioProvider>
        <Audio />
      </ AudioProvider>
    </main>
  )
}
