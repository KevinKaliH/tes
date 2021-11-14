import React from 'react'
import TimeField from './TimeField';

const months = [
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

export default function Monthly() {

    let optionsMonth = [];

    months.forEach((item, index)=> optionsMonth.push(<option key={index.toString()} value="index">{item}</option>))

    return (
        <div>
            <TimeField/>

            <div className="form-group">
                <label htmlFor="meses" className='form-label'>Months</label>
                <select className="form-select form-select-sm" name="" id="">
                    {optionsMonth}
                </select>
            </div>
        </div>
    )
}
