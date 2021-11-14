import React from 'react'
import ConsultDBForm from './components/ConsultDBForm';
import JobForm from './components/JobForm';
// import TriggerTemplate from './components/TriggerTemplate';

export default function Create() {
    return (
        <form>
            <div className="row my-2">
                <div className="col mb-3">
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" id="title" className="form-control"/>
                </div>

                <div className="col mb-3">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" className="form-control"/>
                </div>
            </div>

            <JobForm/>
            {/* <TriggerTemplate /> */}

            <ConsultDBForm/>
        </form>
    )
}
