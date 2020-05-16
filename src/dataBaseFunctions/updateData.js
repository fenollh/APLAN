import { getData, setData } from './saveData'

const updateData = (context, index, type) => {
    if(type === 'notes') {
        updateNote(context, index)
    }
    else {
        updateReminder(context, index)
    }
}

const updateReminder = (context, index) => {

    getData(context, 'reminders')
    .then(() =>{
        const that = context.state
        context.state.data[index] = {title: that.title, body: that.body, date: that.stringDate, importance: that.importance, notifications: that.cbNotifications}
    })
    .then(() => setData(context, 'reminders'))
}

const updateNote = (context, index) => {
    getData(context, 'notes')
    .then(() => context.state.data[index] = {title: context.state.title, body: context.state.body})
    .then(() => setData(context, 'notes'))
}
export { updateData }