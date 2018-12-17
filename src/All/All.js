import React, { Component } from 'react'
import './All.scss'
import { NavLink, Route, Switch } from 'react-router-dom'
import Aux from '../Auxila/Aux'
import Home from '../Home/Home'
import Products from '../Products/Products'
import Contact from '../Contact/Contact'
import Footer from '../Footer/Footer'
import { connect } from 'react-redux'
import { Badge, Button, Modal, ModalHeader, ModalBody, ModalFooter, Container, Row, Col } from 'reactstrap';
import { withRouter } from 'react-router-dom';


class All extends Component {
    state = {
        modal: false,
        orderedItemSsS: {
            id: null,
            name: '',
            imgSrc: null,
            price: null,
            orderedTimes: null
        },
        somethingOrdered: false,
        everythingDeleted: false,
        totalPrice: []
    };

    toggle = () => {
        let expModal = this.state.modal;
        this.setState({
            modal: !expModal
        });
    }

    render() {
        let showInput = false;
        if (this.props.ttlprc) {
            showInput = true;
        }
        else {
            showInput = false;
        }
        let showProds = false;
        if (this.props.ctr) {
            showProds = true;
        }
        else {
            showProds = false;
        }
        return <Aux>
            <ul className="navBar">
                <li><NavLink to="/">Home</NavLink ></li>
                <li><NavLink to="/Products">Products</NavLink ></li>
                <li><NavLink to="/Contact">Contact</NavLink ></li>
                <li onClick={this.toggle} className="orders"><i className="fa">&#xf291;</i> <Badge color="danger">{this.props.ctr}</Badge></li>
            </ul>

            <Switch>
                <Route path="/" exact component={Home}></Route>
                <Route path="/Products" exact component={Products}></Route>
                <Route path="/Contact" exact component={Contact}></Route>
            </Switch>
            <Footer />

            <Modal isOpen={this.state.modal} toggle={this.toggle}>
            <ModalHeader toggle={this.toggle}><h2 className="nonSoFar">Order summary</h2></ModalHeader>
                <ModalBody>
                    {showProds ? <div><ul className="modalFlex">
                        {this.props.ordLst.map(q => (
                            <li key={q.id}>
                                <img style={{ width: '100%' }} src={q.val[2]} />
                                <div><h2>{q.val[1]}</h2></div>
                                <div><h4>Price: {q.val[3]}</h4></div>
                                <button className="delBtn" onClick={() => this.props.onDelete(q.id, q.val[3])}>Delete</button>
                            </li>
                        ))}
                    </ul>
                        {showInput ?
                            <div className="darkModal">
                                <br />
                                <h4>Items ordered: <Badge color="primary">{this.props.ctr}</Badge></h4>
                                <h4>Total price: <Badge color="success">{this.props.ttlprc}</Badge></h4>
                                <br />
                                <form className="modalForm">
                                    <input type="text" placeholder="Your full name" /><br /><br />
                                    <input type="text" placeholder="Your phone number" /><br /><br />
                                    <input type="text" placeholder="Your address City/Street/Number" /><br /><br />
                                    <input type="text" placeholder="Postal code" /><br /><br />
                                    <input type="email" placeholder="Your email (optional)" />
                                </form>
                            </div>
                            : null}
                    </div>
                        : <h4 className="nonSoFar">No orders so far <i className='far'>&#xf5a5;</i></h4>}
                </ModalBody>
                <ModalFooter>
                    <div className="darkModalBtns">
                    <Container>
                        <Row>
                        {showInput ?<Col md="12">
                                <Button style={{ width: '100%', padding:'10px', fontSize:'120%', fontWeight:'400' }} color="primary" onClick={this.toggle}>Confirm order</Button>
                                <br />
                                <br />
                            </Col> : null}
                            <Col md="12">
                                <Button style={{ width: '100%', padding:'10px', fontSize:'120%', fontWeight:'400' }} color="danger" onClick={this.toggle}>Go back</Button>
                            </Col>
                        </Row>
                    </Container>
                    </div>
                </ModalFooter>
            </Modal>

        </Aux>
    }

}
const mapStateToProps = state => {
    return {
        ctr: state.counter,
        prodOrd: [...state.orderedItem],
        ordLst: state.orderedItemList,
        ttlprc: state.totalPrice
    }
}
const mapDispatchToProps = dispatch => {
    return {
        orderINC: () => dispatch({ type: 'INC' }),
        orderDEC: () => dispatch({ type: 'DEC' }),
        onStore: () => dispatch({ type: 'STR' }),
        onDelete: (id, cn) => dispatch({ type: 'DEL', elVal: id, priceA: cn }),
    }
}
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(All))