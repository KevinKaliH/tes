import React, { useState } from 'react'
import TimeField from './TimeField';

const months = [
    'All',
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const days = ['All', 'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

function getDaysOfMonth(month) {
    const date = new Date();
    const year = date.getFullYear();

    return new Date(year, month, 0).getDate();
}

const DaysComponent = ({daysMonth}) => (
    <div className="col">
        <label htmlFor="meses" className='form-label'>Day of the Month</label>
        <select className="form-select form-select-sm" name="" id="">
            {[...Array(daysMonth)].map((item, index) => (
                <option key={index.toString()} value={item}>{++index}</option>
            ))}
        </select>
    </div>
)

export default function JobForm() {
    const [month, setMonth] = useState(0)
    const [daysComponent, setDayComponent] = useState(null);

    const handleMonthSelection = (e) => {
        const { value } = e.target;

        if (value !== '0') {
            const days = getDaysOfMonth(parseInt(value, 10));
            console.log(days);
            setDayComponent(<DaysComponent daysMonth={days}/>)
        } else {
            setDayComponent(null);
        }
        setMonth(e.target.value);
    }

    return (
        <div className='row'>
            <div className="col">
                <TimeField />
            </div>

            <div className="col">
                <label htmlFor="meses" className='form-label'>Months</label>
                <select value={month} className="form-select form-select-sm" name="" id="" onChange={handleMonthSelection}>
                    {months.map((item, index) => (
                        <option key={index.toString()} value={index}>{item}</option>
                    ))}
                </select>
            </div>

            {daysComponent}

            <div className="col">
                <label htmlFor="meses" className='form-label'>Day of the Weeks</label>
                <select className="form-select form-select-sm" name="" id="">
                    {days.map((item, index) => (
                        <option key={index.toString()} value="index">{item}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}
