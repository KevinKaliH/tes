import React from 'react'
import TimeField from './TimeField'

const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturrday'];

const CheckBox = ({ value, title }) => (
    <div className="col-auto form-check">
        <label htmlFor={`check${value}`}>{title}</label>
        <input type="checkbox" className="form-check-input" value={value} id={`check${value}`} />
    </div>
)

export default function WeeklyForm() {
    return (
        <div className="mb-3">
            <p>Weekly option</p>

            <TimeField />

            <div>
                <h5>Select days of the week</h5>
                <div className="row">
                    {days.map((item, index) => (
                        <CheckBox key={index.toString()} value={index} title={item} />
                    ))}
                </div>
            </div>
        </div>
    )
}
