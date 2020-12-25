const initialState = {
    name: '',
    surname: '',
    date: '',
    select: '',    
}

const someReducer = (state = initialState, action) => {
    const {value} = action.payload || '';
    console.log(value);
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
        default:
            break;
    }
}

export default someReducer