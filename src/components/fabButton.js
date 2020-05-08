import React from 'react'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { Fab } from 'native-base'

const FabButton = (props) => {
    let route, icon
    if(props.type == 'notes'){
        route = 'addNote'
        icon = <MaterialIcons name='note-add' style={{color: 'rgb(52,251,167)', fontSize: 30}} />
    }else{
        route = 'addReminder'
        icon = <MaterialCommunityIcons name='reminder' style={{color: 'rgb(52,251,167)', fontSize: 30}}/>
    }

    return(
        <Fab
            position="bottomRight"
            style={{ backgroundColor: 'rgb(100,180,255)' }}
            onPress={() => props.navigation.navigate(route)}>
            {icon}
        </Fab>
    )
}
export default FabButton