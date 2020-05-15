import {setData} from './saveData'

const deleteData = async (index, context, type) => {
    let arrData = context.state.data
    arrData.splice(index,1)
    context.setState({ data: arrData })
    setData(context, type)
}
export {deleteData}