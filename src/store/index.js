const initialState = {
    name: '',
    surname: '',
    date: '',
    select: '',    
}

const reducer = (state = initialState, action) => {
    const {value} = action.payload || '';
    switch (action.type) {
        case 'NAME':
            const {name} = action.payload;
            return { ...state, [name]: value };
        case 'SURNAME':
            const {surname} = action.payload;
            return { ...state, [surname]: value };
        case 'DATE':
            const {date} = action.payload;
            return { ...state, [date]: value };
        case 'SELECT':
            const {select} = action.payload;
            return { ...state, [select]: value };
        case 'RESET':
            return state = {};
        default:
            break;
    }
}

export default reducer