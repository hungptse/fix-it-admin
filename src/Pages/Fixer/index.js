import React, { Component, useState } from 'react'
import Aux from '../../hoc/_Aux'
import { Row, Col, Card, Table, Tabs, Tab } from 'react-bootstrap';

import CONST_APP from "../../store/constant";

import avatar1 from '../../assets/images/user/avatar-1.jpg';
import avatar2 from '../../assets/images/user/avatar-2.jpg';
import avatar3 from '../../assets/images/user/avatar-3.jpg';
import TrendingFixer from './TrendingFixer';
import FixerProfile from './FixerProfile';
export default function Fixer() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Aux>
            <FixerProfile name={'HungPT'} show={show} handleClose={() => handleClose()} />
            <Row>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <h6 className='mb-4'>Daily Sales</h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5" /> $249.95</h3>
                                </div>

                                <div className="col-3 text-right">
                                    <p className="m-b-0">50%</p>
                                </div>
                            </div>
                            <div className="progress m-t-30" style={{ height: '7px' }}>
                                <div className="progress-bar progress-c-theme" role="progressbar" style={{ width: '50%' }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6} xl={4}>
                    <Card>
                        <Card.Body>
                            <h6 className='mb-4'>Monthly Sales</h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-down text-c-red f-30 m-r-5" /> $2.942.32</h3>
                                </div>

                                <div className="col-3 text-right">
                                    <p className="m-b-0">36%</p>
                                </div>
                            </div>
                            <div className="progress m-t-30" style={{ height: '7px' }}>
                                <div className="progress-bar progress-c-theme2" role="progressbar" style={{ width: '35%' }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xl={4}>
                    <Card>
                        <Card.Body>
                            <h6 className='mb-4'>Yearly Sales</h6>
                            <div className="row d-flex align-items-center">
                                <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"><i className="feather icon-arrow-up text-c-green f-30 m-r-5" /> $8.638.32</h3>
                                </div>

                                <div className="col-3 text-right">
                                    <p className="m-b-0">70%</p>
                                </div>
                            </div>
                            <div className="progress m-t-30" style={{ height: '7px' }}>
                                <div className="progress-bar progress-c-theme" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" />
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row>
                <Col md={6} xl={8}>
                    <Card className='Recent-Users'>
                        <Card.Header>
                            <Card.Title as='h5'>Fixer Register Pending</Card.Title>
                        </Card.Header>
                        <Card.Body className='px-0 py-2'>
                            <Table responsive hover>
                                <tbody>
                                    <tr className="unread">
                                        <td onClick={() => handleShow()} style={{cursor : 'pointer'}}><img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" /></td>
                                        <td>
                                            <h6 className="mb-1">Isabella Christensen</h6>
                                            <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                        </td>
                                        <td>
                                            <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15" />11 MAY 12:56</h6>
                                        </td>
                                        <td><a href={CONST_APP.BLANK_LINK} className="label theme-bg2 text-white f-12">Reject</a><a href={CONST_APP.BLANK_LINK} className="label theme-bg text-white f-12">Approve</a></td>
                                    </tr>
                                    <tr className="unread">
                                        <td><img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" /></td>
                                        <td>
                                            <h6 className="mb-1">Mathilde Andersen</h6>
                                            <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                        </td>
                                        <td>
                                            <h6 className="text-muted"><i className="fa fa-circle text-c-red f-10 m-r-15" />11 MAY 10:35</h6>
                                        </td>
                                        <td><a href={CONST_APP.BLANK_LINK} className="label theme-bg2 text-white f-12">Reject</a><a href={CONST_APP.BLANK_LINK} className="label theme-bg text-white f-12">Approve</a></td>
                                    </tr>
                                    <tr className="unread">
                                        <td><img className="rounded-circle" style={{ width: '40px' }} src={avatar3} alt="activity-user" /></td>
                                        <td>
                                            <h6 className="mb-1">Karla Sorensen</h6>
                                            <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                        </td>
                                        <td>
                                            <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15" />9 MAY 17:38</h6>
                                        </td>
                                        <td><a href={CONST_APP.BLANK_LINK} className="label theme-bg2 text-white f-12">Reject</a><a href={CONST_APP.BLANK_LINK} className="label theme-bg text-white f-12">Approve</a></td>
                                    </tr>
                                    <tr className="unread">
                                        <td><img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" /></td>
                                        <td>
                                            <h6 className="mb-1">Ida Jorgensen</h6>
                                            <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                        </td>
                                        <td>
                                            <h6 className="text-muted f-w-300"><i className="fa fa-circle text-c-red f-10 m-r-15" />19 MAY 12:56</h6>
                                        </td>
                                        <td><a href={CONST_APP.BLANK_LINK} className="label theme-bg2 text-white f-12">Reject</a><a href={CONST_APP.BLANK_LINK} className="label theme-bg text-white f-12">Approve</a></td>
                                    </tr>
                                    <tr className="unread">
                                        <td><img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" /></td>
                                        <td>
                                            <h6 className="mb-1">Albert Andersen</h6>
                                            <p className="m-0">Lorem Ipsum is simply dummy text of…</p>
                                        </td>
                                        <td>
                                            <h6 className="text-muted"><i className="fa fa-circle text-c-green f-10 m-r-15" />21 July 12:56</h6>
                                        </td>
                                        <td><a href={CONST_APP.BLANK_LINK} className="label theme-bg2 text-white f-12">Reject</a><a href={CONST_APP.BLANK_LINK} className="label theme-bg text-white f-12">Approve</a></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Col>

                <Col md={6} xl={4}>
                    <Card>
                        <Card.Header>
                            <Card.Title as='h5'>Top Income</Card.Title>
                        </Card.Header>
                        <Card.Body>
                            {/* <div className="row align-items-center justify-content-center m-b-20">
                                <div className="col-6">
                                    <h2 className="f-w-300 d-flex align-items-center float-left m-0">4.7 <i className="fa fa-star f-10 m-l-10 text-c-yellow" /></h2>
                                </div>
                                <div className="col-6">
                                    <h6 className="d-flex  align-items-center float-right m-0">0.4 <i className="fa fa-caret-up text-c-green f-22 m-l-10" /></h6>
                                </div>
                            </div> */}

                            <TrendingFixer isFirst="true" />
                            <TrendingFixer />
                            <div className="row">
                                <div className="col-xl-12">
                                    <h6 className="align-items-center float-left"><i className="fa fa-star f-10 m-r-10 text-c-yellow" />5</h6>
                                    <h6 className="align-items-center float-right">384</h6>
                                    <div className="progress m-t-30 m-b-20" style={{ height: '6px' }}>
                                        <div className="progress-bar progress-c-theme" role="progressbar" style={{ width: '70%' }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" />
                                    </div>
                                </div>

                                <div className="col-xl-12">
                                    <h6 className="align-items-center float-left"><i className="fa fa-star f-10 m-r-10 text-c-yellow" />4</h6>
                                    <h6 className="align-items-center float-right">145</h6>
                                    <div className="progress m-t-30  m-b-20" style={{ height: '6px' }}>
                                        <div className="progress-bar progress-c-theme" role="progressbar" style={{ width: '35%' }} aria-valuenow="35" aria-valuemin="0" aria-valuemax="100" />
                                    </div>
                                </div>

                                <div className="col-xl-12">
                                    <h6 className="align-items-center float-left"><i className="fa fa-star f-10 m-r-10 text-c-yellow" />3</h6>
                                    <h6 className="align-items-center float-right">24</h6>
                                    <div className="progress m-t-30  m-b-20" style={{ height: '6px' }}>
                                        <div className="progress-bar progress-c-theme" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" />
                                    </div>
                                </div>

                                <div className="col-xl-12">
                                    <h6 className="align-items-center float-left"><i className="fa fa-star f-10 m-r-10 text-c-yellow" />2</h6>
                                    <h6 className="align-items-center float-right">1</h6>
                                    <div className="progress m-t-30  m-b-20" style={{ height: '6px' }}>
                                        <div className="progress-bar progress-c-theme" role="progressbar" style={{ width: '10%' }} aria-valuenow="10" aria-valuemin="0" aria-valuemax="100" />
                                    </div>
                                </div>
                                <div className="col-xl-12">
                                    <h6 className="align-items-center float-left"><i className="fa fa-star f-10 m-r-10 text-c-yellow" />1</h6>
                                    <h6 className="align-items-center float-right">0</h6>
                                    <div className="progress m-t-30  m-b-5" style={{ height: '6px' }}>
                                        <div className="progress-bar" role="progressbar" style={{ width: '0%' }} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" />
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Aux>
    )
}
// export default class Fixer extends Component {
//     render() {

//     }
// }
