import React from 'react'

export default class AddNote extends React.Component{
    constructor(){
        super()
        this.state={
            arrNotes: [],
            titulo: 'titulo',
            cuerpo: 'cuerpo'
        };
    }

    addNote = () => {
        this.state.arrNotes.push({"titulo":this.state.titulo, "cuerpo":this.state.cuerpo})
        console.log(this.state.arrNotes)
    }
    
} 