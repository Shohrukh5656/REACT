const nameInput = (name, value) => ({
    type: 'NAME',
    payload:{name, value}
});

const surnameInput = (surname, value) => ({
    type: 'SURNAME',
    payload:{surname, value}
});

const dateInput = (date, value) => ({
    type: 'DATE',
    payload:{date, value}
});

const selectInput = (select, value) => ({
    type: 'SELECT',
    payload:{select, value}
});

const actions = {
    nameInput,
    surnameInput,
    dateInput,
    selectInput,
};

export default actions;