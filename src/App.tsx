import { AudioProvider } from './context/AudioContext';
import { TimerProvider } from './context/TimerContext';
import { ThemeSwitcher } from './components/client/ThemeSwitcher';
import Audio from './components/server/Audio';
import RandomQuoteButton from './components/client/RandomQuoteController';
import Timer from './components/server/Timer';
import './App.css';

export default function App() {
  return (
    <main>
      <div className="left-container">
        <TimerProvider>
          <Timer />
        </ TimerProvider>
      </div>
      <div className="right-container">
        <div className="top-right">
          <ThemeSwitcher />
          <RandomQuoteButton />
        </div>
        <div className="bottom-right">
          <AudioProvider>
            <Audio />
          </ AudioProvider>
        </div>
      </div>
    </main>
  );
}
