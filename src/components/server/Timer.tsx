import { TimerDisplay } from "../client/TimerDisplay";
import { TimerControllers } from "../client/TimerControllers";

export default function Timer() {
    return (
        <div id='countdownTimer'>
            <TimerDisplay />
            <TimerControllers />
        </div>
    )
}
