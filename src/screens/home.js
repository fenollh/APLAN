import React from 'react';
import{ 
    Text,
    StyleSheet
} from 'react-native';
import{
    Container,
    View,
    Button,
    Fab,
    Icon
} from 'native-base'
import { Ionicons } from '@expo/vector-icons';

export default class HomeScreen extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            fabActive: false,
        }
    }

    render(){
        return(
            <Container style={styles.main}>
                    <Fab
                    active={this.state.fabActive}
                    direction = 'up'
                    position="bottomRight"
                    containerStyle={{ }}
                    style={{ backgroundColor: '#5067FF' }}
                    onPress={() => this.setState({fabActive: !this.state.fabActive})}
                    >
                        <Ionicons name='md-add'/>
                        <Button style={{ backgroundColor: '#34A34F' }}><Icon name="logo-whatsapp" /></Button>
                        <Button style={{ backgroundColor: '#34A34F' }}><Icon name="logo-whatsapp" /></Button>

                    </Fab>
            </Container>
        )
    }
} 

const styles = StyleSheet.create({

    main: {
        flex: 14,
        backgroundColor: 'rgb(230,230,230)',
    },
});