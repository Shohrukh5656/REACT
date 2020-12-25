import React from 'react';
import { shallowEqual, useDispatch, useSelector} from 'react-redux';
import actions from '../../store/actions';
import './Input.css';

function Input() {
    const init = useSelector(state => state, shallowEqual);
    const dis = useDispatch();
    
    const handleSubmit = e => {
        e.preventDefault();
        e.currentTarget.reset();
        dis(actions.resetInput());
        console.log(JSON.parse(JSON.stringify(init)));
    }
    
    const handleCheck = e => {
        const {value, name} = e.currentTarget;

        switch (name) {
            case 'name':
                dis(actions.nameInput(name, value));
                break;
            case 'surname':
                dis(actions.surnameInput(name, value));
                break;
            case 'date':
                dis(actions.dateInput(name, value));
                break;
            case 'select':
                dis(actions.selectInput(name, value));
                break;
            default:
                break;
        }        
    }
    return (
        <div id="inputs">
            <div className="item">
                <div className="item-header">
                    Input
                </div>
                <form method="POST" className="app__content" onSubmit={handleSubmit}>
                    <div className="input">
                        <input type="text"
                            value={init?.name || ''}
                            onChange={handleCheck}
                            id="name"
                            placeholder="имя..."
                            name="name"
                            required/>
                    </div>
                    <div className="input">
                        <input type="text"
                            value={init?.surname || ''}
                            onChange={handleCheck}
                            id="surname"
                            placeholder="фамилия..."
                            name="surname"
                            required/>
                    </div>
                    <div className="input">
                        <input type="date"
                            value={init?.date || ''}
                            onChange={handleCheck}
                            id="date"
                            name="date"
                            required/>
                    </div>
                    <div className="input">
                        <select onChange={handleCheck} name="select" required>
                            <option value=""></option>
                            <option value="Star">⭐</option>
                            <option value="Heart">❤</option>
                            <option value="Octagon">🔷</option>
                        </select>
                    </div>
                    <button type="submit" className="btn-submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Input