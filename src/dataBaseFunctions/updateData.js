import { getData, setData } from './saveData'

const updateNote = (context, index) => {
    getData(context, 'notes')
    .then(() => context.state.data[index] = {title: context.state.title, body: context.state.body})
    .then(() => setData(context, 'notes'))
}
export { updateNote }