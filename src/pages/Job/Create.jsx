import React, { useState } from 'react'
import DailyForm from './components/DailyForm'

export default function Create() {
    const [trigger, setTrigger] = useState(null)

    const handleChangeTrigger = (e) => {
        const { id } = e.target;

        switch (id) {
            case 'daily':
                setTrigger(<DailyForm/>)
                break;
            case 'weekly':
                setTrigger(null)
                break;
            default:
                setTrigger(null)
                console.log("yeah party");
                break;
        }
    }

    return (
        <form>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input type="text" name="title" id="title" />
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" name="description" id="description" />
            </div>

            <div className="form-group">
                <p>Select type of trigger</p>

                <div className="btn-group">
                    <label htmlFor="daily">Daily</label>
                    <input type="radio" name="timeField" id="daily" onChange={handleChangeTrigger} />
                </div>
                <div className="btn-group">
                    <label htmlFor="weekly">Weekly</label>
                    <input type="radio" name="timeField" id="weekly" onChange={handleChangeTrigger} />
                </div>
                <div className="btn-group">
                    <label htmlFor="monthly">Monthly</label>
                    <input type="radio" name="timeField" id="monthly" onChange={handleChangeTrigger} />
                </div>
            </div>

            { (trigger) }
        </form>
    )
}
