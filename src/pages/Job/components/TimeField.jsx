import React from 'react'

export default function TimeField() {
    return (
        <div className="form-group mb-3">
            <label htmlFor="time" className="form-label">Time clock</label>
            <input type="time" name="time" id="time" className="form-control" />
        </div>
    )
}
