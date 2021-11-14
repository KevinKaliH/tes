import React from 'react'
import TimeField from './TimeField'

export default function DailyForm() {
    return (
        <div className="daily-form">
            <p>Daily option</p>

            <TimeField/>

            <div>
                <label htmlFor="frequency" className='form-label'>Select frequency:</label>
                <input className='form-control' type="number" max='365' min='1' />
            </div>
        </div>
    )
}
