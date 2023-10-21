'use client'

import { useState } from 'react';
import StatementList from './statementComponents/statementComponents';

const StatementPage = () => {
    const [selectedMonth, setSelectedMonth] = useState('');

    const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedMonth(event.target.value);
    };

    return (
        <div className='w-full px-6'>
            <select value={selectedMonth} onChange={handleMonthChange}>
                <option value="">Select a month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
            </select>
            {selectedMonth && <StatementList selectedMonth={selectedMonth} />}
        </div>
    );
};

export default StatementPage;
