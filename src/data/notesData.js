import React from 'react'

export default class AddNote extends React.Component{
    constructor(){
        super()
        this.state={
            arrNotes: [],
        };
    }

    addNote = (tit, cuerp) => {
        this.state.arrNotes.push({"titulo":tit, "cuerpo":cuerp})
        console.log(this.state.arrNotes)
    }

} 