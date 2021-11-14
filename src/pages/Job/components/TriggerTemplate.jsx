import React, { useState } from 'react'
import DailyForm from './DailyForm'
import Monthly from './Monthly'
import WeeklyForm from './WeeklyForm'

export default function TriggerTemplate() {
    const [triggerTemplate, setTriggerTemplate] = useState(null)

    const handleChangeTrigger = (e) => {
        const { id } = e.target;

        switch (id) {
            case 'daily':
                setTriggerTemplate(<DailyForm />)
                break;
            case 'weekly':
                setTriggerTemplate(<WeeklyForm />)
                break;
            case 'monthly':
                setTriggerTemplate(<Monthly/>)
                break;
            default:
                setTriggerTemplate(null)
                break;
        }
    }

    return (
        <>
            <div className="row justify-content-md-center my-3">
                <p>Select type of trigger</p>

                <div className="col">
                    <div className="form-check form-check-inline">
                        <label className="form-check-label" htmlFor="daily">Daily</label>
                        <input className="form-check-input" type="radio" name="timeField" id="daily" onChange={handleChangeTrigger} />
                    </div>
                    <div className="form-check form-check-inline">
                        <label className="form-check-label" htmlFor="weekly">Weekly</label>
                        <input className="form-check-input" type="radio" name="timeField" id="weekly" onChange={handleChangeTrigger} />
                    </div>
                    <div className="form-check form-check-inline">
                        <label className="form-check-label" htmlFor="monthly">Monthly</label>
                        <input className="form-check-input" type="radio" name="timeField" id="monthly" onChange={handleChangeTrigger} />
                    </div>
                </div>
            </div>

            {triggerTemplate}
        </>
    )
}
