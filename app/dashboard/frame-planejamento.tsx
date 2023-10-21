import { CSSProperties } from 'react';
import ReminderList from '../assets/reminderComponents/reminderComponents';

const FramePlanejamento = () => {
    const todayDate = new Date();
    // day, month, and year
    const todayDay = ("0" + todayDate.getDay().toString()).slice(-2);
    const todayMonth = todayDate.getMonth() + 1;
    const todayYear = todayDate.getFullYear();

    return (
        <div className="frame-planejamento" style={FramePlanejamentoStyle}>
            <div className="frame-planejamento-header">
                <h1>Planejamento</h1>
            </div>

            <ReminderList />

        </div>
    );
}

const FramePlanejamentoStyle: CSSProperties = {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    marginTop: '1rem'
}

export default FramePlanejamento;