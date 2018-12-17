import React, { Component } from 'react'
import './Products.scss'
import prodImg from '../Asets/prodImg.jpeg'
// import Axios from '../axios-orders'
import Slider from "react-slick";
import Magnifier from 'react-magnifier';
import { connect } from 'react-redux'
import {
    Jumbotron, Button, Card, CardBody, CardText, CardSubtitle, UncontrolledCollapse,Container, Row, Col
} from 'reactstrap';

let orderedProd = [
    /*             123,
                'abv',
                prodImg,
                980,
                1 */
    null,
    '',
    null,
    null,
    null
]
class Products extends Component {
    state = {
        products: [
            {
                id: 1,
                name: 'Product A',
                imgSrc: prodImg,
                price: 540,
                orderedTimes: 0,
                desc: <div style={{ textAlign: 'left', margin: '0', letterSpacing: '1.2px', fontSize: '120%' }}>
                    <ul className="descStats">
                        <li style={{ padding: '5px' }}>Material: metal</li>
                        <li style={{ padding: '5px' }}>Dimensions: {Math.floor(Math.random(100) * 100)} x {Math.floor(Math.random(100) * 100)} cm</li>
                        <li style={{ padding: '5px' }}>Design by: Jon Doe</li>
                    </ul>
                </div>,
                ordered: false,
                collapse: false
            },
            {
                id: 2,
                name: 'Product B',
                imgSrc: prodImg,
                price: 230,
                orderedTimes: 0,
                desc: <div style={{ textAlign: 'left', margin: '0', letterSpacing: '1.2px', fontSize: '120%' }}>
                    <ul className="descStats">
                        <li style={{ padding: '5px' }}>Material: metal</li>
                        <li style={{ padding: '5px' }}>Dimensions: {Math.floor(Math.random(100) * 100)} x {Math.floor(Math.random(100) * 100)} cm</li>
                        <li style={{ padding: '5px' }}>Design by: Jon Doe</li>
                    </ul>
                </div>,
                ordered: false,
                collapse: false
            },
            {
                id: 3,
                name: 'Product V',
                imgSrc: prodImg,
                price: 1050,
                orderedTimes: 0,
                desc: <div style={{ textAlign: 'left', margin: '0', letterSpacing: '1.2px', fontSize: '120%' }}>
                    <ul className="descStats">
                        <li style={{ padding: '5px' }}>Material: metal</li>
                        <li style={{ padding: '5px' }}>Dimensions: {Math.floor(Math.random(100) * 100)} x {Math.floor(Math.random(100) * 100)} cm</li>
                        <li style={{ padding: '5px' }}>Design by: Jon Doe</li>
                    </ul>
                </div>,
                ordered: false,
                collapse: false
            },
            {
                id: 4,
                name: 'Product G',
                imgSrc: prodImg,
                price: 405,
                orderedTimes: 0,
                desc: <div style={{ textAlign: 'left', margin: '0', letterSpacing: '1.2px', fontSize: '120%' }}>
                    <ul className="descStats">
                        <li style={{ padding: '5px' }}>Material: metal</li>
                        <li style={{ padding: '5px' }}>Dimensions: {Math.floor(Math.random(100) * 100)} x {Math.floor(Math.random(100) * 100)} cm</li>
                        <li style={{ padding: '5px' }}>Design by: Jon Doe</li>
                    </ul>
                </div>,
                ordered: false,
                collapse: false
            },
            {
                id: 5,
                name: 'Product D',
                imgSrc: prodImg,
                price: 250,
                orderedTimes: 0,
                desc: <div style={{ textAlign: 'left', margin: '0', letterSpacing: '1.2px', fontSize: '120%' }}>
                    <ul className="descStats">
                        <li style={{ padding: '5px' }}>Material: metal</li>
                        <li style={{ padding: '5px' }}>Dimensions: {Math.floor(Math.random(100) * 100)} x {Math.floor(Math.random(100) * 100)} cm</li>
                        <li style={{ padding: '5px' }}>Design by: Jon Doe</li>
                    </ul>
                </div>,
                ordered: false,
                collapse: false
            },
            {
                id: 6,
                name: 'Product Y',
                imgSrc: prodImg,
                price: 800,
                orderedTimes: 0,
                desc: <div style={{ textAlign: 'left', margin: '0', letterSpacing: '1.2px', fontSize: '120%' }}>
                    <ul className="descStats">
                        <li style={{ padding: '5px' }}>Material: metal</li>
                        <li style={{ padding: '5px' }}>Dimensions: {Math.floor(Math.random(100) * 100)} x {Math.floor(Math.random(100) * 100)} cm</li>
                        <li style={{ padding: '5px' }}>Design by: Jon Doe</li>
                    </ul>
                </div>,
                ordered: false,
                collapse: false
            },
            {
                id: 7,
                name: 'Product E',
                imgSrc: prodImg,
                price: 760,
                orderedTimes: 0,
                desc: <div style={{ textAlign: 'left', margin: '0', letterSpacing: '1.2px', fontSize: '120%' }}>
                    <ul className="descStats">
                        <li style={{ padding: '5px' }}>Material: metal</li>
                        <li style={{ padding: '5px' }}>Dimensions: {Math.floor(Math.random(100) * 100)} x {Math.floor(Math.random(100) * 100)} cm</li>
                        <li style={{ padding: '5px' }}>Design by: Jon Doe</li>
                    </ul>
                </div>,
                ordered: false,
                collapse: false
            },
            {
                id: 8,
                name: 'Product X',
                imgSrc: prodImg,
                price: 540,
                orderedTimes: 0,
                desc: <div style={{ textAlign: 'left', margin: '0', letterSpacing: '1.2px', fontSize: '120%' }}>
                    <ul className="descStats">
                        <li style={{ padding: '5px' }}>Material: metal</li>
                        <li style={{ padding: '5px' }}>Dimensions: {Math.floor(Math.random(100) * 100)} x {Math.floor(Math.random(100) * 100)} cm</li>
                        <li style={{ padding: '5px' }}>Design by: Jon Doe</li>
                    </ul>
                </div>,
                ordered: false,
                collapse: false
            },
            {
                id: 9,
                name: 'Product Z',
                imgSrc: prodImg,
                price: 630,
                orderedTimes: 0,
                desc: <div style={{ textAlign: 'left', margin: '0', letterSpacing: '1.2px', fontSize: '120%' }}>
                    <ul className="descStats">
                        <li style={{ padding: '5px' }}>Material: metal</li>
                        <li style={{ padding: '5px' }}>Dimensions: {Math.floor(Math.random(100) * 100)} x {Math.floor(Math.random(100) * 100)} cm</li>
                        <li style={{ padding: '5px' }}>Design by: Jon Doe</li>
                    </ul>
                </div>,
                ordered: false,
                collapse: false
            },
            {
                id: 10,
                name: 'Product I',
                imgSrc: prodImg,
                price: 290,
                orderedTimes: 0,
                desc: <div style={{ textAlign: 'left', margin: '0', letterSpacing: '1.2px', fontSize: '120%' }}>
                    <ul className="descStats">
                        <li style={{ padding: '5px' }}>Material: metal</li>
                        <li style={{ padding: '5px' }}>Dimensions: {Math.floor(Math.random(100) * 100)} x {Math.floor(Math.random(100) * 100)} cm</li>
                        <li style={{ padding: '5px' }}>Design by: Jon Doe</li>
                    </ul>
                </div>,
                ordered: false,
                collapse: false
            },
            {
                id: 11,
                name: 'Product J',
                imgSrc: prodImg,
                price: 750,
                orderedTimes: 0,
                desc: <div style={{ textAlign: 'left', margin: '0', letterSpacing: '1.2px', fontSize: '120%' }}>
                    <ul className="descStats">
                        <li style={{ padding: '5px' }}>Material: metal</li>
                        <li style={{ padding: '5px' }}>Dimensions: {Math.floor(Math.random(100) * 100)} x {Math.floor(Math.random(100) * 100)} cm</li>
                        <li style={{ padding: '5px' }}>Design by: Jon Doe</li>
                    </ul>
                </div>,
                ordered: false,
                collapse: false
            },
            {
                id: 12,
                name: 'Product K',
                imgSrc: prodImg,
                price: 740,
                orderedTimes: 0,
                desc: <div style={{ textAlign: 'left', margin: '0', letterSpacing: '1.2px', fontSize: '120%' }}>
                    <ul className="descStats">
                        <li style={{ padding: '5px' }}>Material: metal</li>
                        <li style={{ padding: '5px' }}>Dimensions: {Math.floor(Math.random(100) * 100)} x {Math.floor(Math.random(100) * 100)} cm</li>
                        <li style={{ padding: '5px' }}>Design by: Jon Doe</li>
                    </ul>
                </div>,
                ordered: false,
                collapse: false
            },
            {
                id: 13,
                name: 'Product L',
                imgSrc: prodImg,
                price: 620,
                orderedTimes: 0,
                desc: <div style={{ textAlign: 'left', margin: '0', letterSpacing: '1.2px', fontSize: '120%' }}>
                    <ul className="descStats">
                        <li style={{ padding: '5px' }}>Material: metal</li>
                        <li style={{ padding: '5px' }}>Dimensions: {Math.floor(Math.random(100) * 100)} x {Math.floor(Math.random(100) * 100)} cm</li>
                        <li style={{ padding: '5px' }}>Design by: Jon Doe</li>
                    </ul>
                </div>,
                ordered: false,
                collapse: false
            },
            {
                id: 14,
                name: 'Product Q',
                imgSrc: prodImg,
                price: 450,
                orderedTimes: 0,
                desc: <div style={{ textAlign: 'left', margin: '0', letterSpacing: '1.2px', fontSize: '120%' }}>
                    <ul className="descStats">
                        <li style={{ padding: '5px' }}>Material: metal</li>
                        <li style={{ padding: '5px' }}>Dimensions: {Math.floor(Math.random(100) * 100)} x {Math.floor(Math.random(100) * 100)} cm</li>
                        <li style={{ padding: '5px' }}>Design by: Jon Doe</li>
                    </ul>
                </div>,
                ordered: false,
                collapse: false
            },
            {
                id: 15,
                name: 'Product M',
                imgSrc: prodImg,
                price: 1250,
                orderedTimes: 0,
                desc: <div style={{ textAlign: 'left', margin: '0', letterSpacing: '1.2px', fontSize: '120%' }}>
                    <ul className="descStats">
                        <li style={{ padding: '5px' }}>Material: metal</li>
                        <li style={{ padding: '5px' }}>Dimensions: {Math.floor(Math.random(100) * 100)} x {Math.floor(Math.random(100) * 100)} cm</li>
                        <li style={{ padding: '5px' }}>Design by: Jon Doe</li>
                    </ul>
                </div>,
                ordered: false,
                collapse: false
            }
        ],
    }
     copyOfItemsHandler = (a) => {
        return [
            orderedProd[0] = a.id,
            orderedProd[1] = a.name,
            orderedProd[2] = a.imgSrc,
            orderedProd[3] = a.price,
            orderedProd[4] = a.orderedTimes
        ]

    } 

    apendToListHandler = () => {

    }
    render() {
        let settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        let listOfProd = <div className="productsGridLayout">{this.state.products.map(x => {
            return <div key={x.id}>
                <div className='divImg'>
                    <Slider {...settings}>
                        <div>
                            <Magnifier zoomFactor={2} mgShape='square' mgWidth={120} mgHeight={120} src={x.imgSrc} alt='img not found' />
                        </div>
                        <div>
                            <Magnifier zoomFactor={2} mgShape='square' mgWidth={120} mgHeight={120} src={x.imgSrc} alt='img not found' />
                        </div>
                        <div>
                            <Magnifier zoomFactor={2} mgShape='square' mgWidth={120} mgHeight={120} src={x.imgSrc} alt='img not found' />
                        </div>

                    </Slider>

                </div>
                <hr />
                <div>
                    <h3 style={{ padding: '25px', background: '#333', color: 'white', marginBottom: '0', border: 'none', letterSpacing: '1.2px' }}>{x.name} </h3>
                    <Button style={{ padding: '30px', fontSize: '150%', background: '#333', color: 'white', marginTop: '0', width: '100%', border: 'none', borderRadius: '0', letterSpacing: '1.2px' }} id={'a' + x.id}>
                        Specification <i className="fa">&#xf103;</i>
                    </Button>
                    <UncontrolledCollapse toggler={"#a" + x.id}>
                        <Card>
                            <CardBody>
                                <CardSubtitle>{x.desc}</CardSubtitle>
                                <CardText>{''}</CardText>
                            </CardBody>
                        </Card>
                    </UncontrolledCollapse>
                    <p style={{ fontSize: '150%', background: '#333', color: 'white', margin: '0', border: 'none', letterSpacing: '1.2px' }}><br />Price: {x.price}<br /><br />
                        <Button onClick={() => { this.copyOfItemsHandler(x);this.props.copyItem(); this.props.orderINC();this.props.onStore()
                            // this.props.incORD()
                            }} color="primary" style={{ width: '100%', padding: '10px', fontSize: '150%', marginTop: '0' }}>Order</Button>
                    </p>
                </div>
            </div>
        })}</div>

        return <div>
            <Jumbotron style={{ background: '#FFA500', borderRadius: '0px', marginBottom: '0px' }}>
                <div className="prodJumbo">
                    <br />
                    <br />
                    <h2>Products</h2>
                    <br />
                    <p>Nunc scelerisque metus nec libero posuere, ut iaculis ex elementum. Curabitur mollis condimentum porta. Vivamus posuere dictum dui. Nulla a consequat enim. Donec ante felis, tincidunt sit amet ipsum at, cursus placerat purus. <br /><br />Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.  <br /><br />Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin auctor, ante eu maximus volutpat, lacus nibh mollis ligula, at dapibus ex mi ut felis. Sed non convallis leo. Quisque condimentum urna nec justo imperdiet, vitae vehicula nulla bibendum. Cras commodo lorem id turpis bibendum, at egestas ligula placerat.
                    <br /><br /> <br />
                        <button className="subscribeBtn">Subscribe now</button>
                        <br /><br />
                    </p>
                </div>
            </Jumbotron>
            <Jumbotron style={{ background: '#333333', borderRadius: '0px', marginBottom: '0px' }}>
                <div className="prodJumbo">
                    <br />
                 
                    <Container>
                        <Row>
                            <Col md="12"><h2>Quality monitoring</h2><br /><br /></Col>
                            <Col md="6">
                            <ul>
                                <li>Nunc scelerisque metus nec libero posuere, ut iaculis ex elementum. Curabitur mollis condimentum porta.<br /><br /> </li>
                                <li>Vivamus posuere dictum dui. Nulla a consequat enim. Donec ante felis, tincidunt sit amet ipsum at, cursus placerat purus. <br /><br /></li>
                                <li>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.<br /><br /></li>
                            </ul>
                            </Col>
                            <Col md="6">
                            <i id="iMonitoring" className="fa">&#xf247;</i>
                            </Col>
                        </Row>
                    </Container>

                </div>
            </Jumbotron>
            {listOfProd}
            <br /><br />
        </div>

    }
}
const mapStateToProps = state => {
    return {
        ctr: state.counter,
        ordItm: state.orderedItem,
        ordLst:state.orderedItemList,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        orderINC: () => dispatch({ type: 'INC' }),
        copyItem: () => dispatch({ type: 'COPY', value: [...orderedProd] }),
        onStore: () => dispatch({ type: 'STR' }),
        onDelete: (id,cn) => dispatch({ type: 'DEL', elVal: id, priceA:cn }),
        // incORD : ()=> dispatch({type:'ORD', value:1})

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Products)