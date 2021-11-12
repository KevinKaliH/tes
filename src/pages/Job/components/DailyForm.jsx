import React from 'react'

export default function DailyForm() {
    return (
        <div className="daily-form">
            <p>Daily option</p>

            <div className="form-group">
                <label htmlFor="time">Time clock</label>
                <input type="time" name="time" id="time" />
            </div>

            <div>
                <label htmlFor="frequency">Select frequency:</label>
                <input type="number" max='7' min='1' />
            </div>
        </div>
    )
}
