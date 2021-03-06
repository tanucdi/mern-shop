import React,{Component} from 'react';
import {Container,ListGroup,ListGroupItem,Button} from 'reactstrap';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems,deleteItem} from '../actions/itemAction';
import PropTypes from 'prop-types';
class ShoppingList extends Component{
    
    componentDidMount(){
        this.props.getItems();
    }
    onDeleteClick=id=>{
       // console.log("in delete function");
        this.props.deleteItem(id);
       // console.log("delte called");
    }
    render(){
        const {items}=this.props.item;
        return(
            <Container>
                
                <ListGroup>
                <TransitionGroup>
                    {
                        items.map(({_id,name})=>(
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                <Button className="remove-btn" color="danger" size="sm" onClick={this.onDeleteClick.bind(this,_id)
                                }>
                                X 
                                </Button>
                                {name}
                                </ListGroupItem>
                            </CSSTransition>
                        ))
                    }
                </TransitionGroup>
                </ListGroup>
            </Container>
        )
    }
}
ShoppingList.propTypes={
    getItems:PropTypes.func.isRequired,
    deleteItem:PropTypes.func.isRequired,
    item:PropTypes.object.isRequired
}
const mapStateToProps=(state)=>({
    item:state.item
})
export default connect(mapStateToProps,{getItems,deleteItem})(ShoppingList);