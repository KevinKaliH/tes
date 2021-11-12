import React from 'react'

export default function WeeklyForm() {
    return (
        <div className="daily-form">
            <p>Weekly option</p>

            <div className="form-group">
                <label htmlFor="time">Time trigger</label>
                <input type="time" name="time" id="time" />
            </div>

            <div>
                <label htmlFor="frequency">Select day of the week:</label>
                <input type="number" max='7' min='1' />
            </div>
        </div>
    )
}
