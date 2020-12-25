import React from 'react'
import './Output.css'
import { useSelector } from 'react-redux'

function Output() {
    const state = useSelector(state => state )
    return (
        <div id="outputs">
            <div className="item">
                <div className="item-header">
                    Output
                </div>
                <div className="item-content">
                    <ul>
                        <li>
                            <span className="key">name</span> :
                            <span className="value">{state?.name || ''}</span>
                        </li>
                        
                        <li>
                            <span className="key">surname</span> :
                            <span className="value">{state?.surname || ''}</span>
                        </li>
                        <li>
                            <span className="key">date</span> :
                            <span className="value">{state?.date || ''}</span>
                        </li>
                        <li>
                            <span className="key">select</span> :
                            <span className="value">{state?.select || ''}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Output