import React, { Component, useState } from 'react'
import Aux from '../../hoc/_Aux'
import avatar2 from '../../assets/images/user/avatar-2.jpg';



export default class TrendingFixer extends Component {
    render() {
        const { isFirst } = this.props
        return (
            <Aux>
                {isFirst ? (<div className="row align-items-center justify-content-center m-b-20">
                    <div className="col-8">
                        <h3 className="f-w-300 d-flex align-items-center float-left m-0">Phan Thanh Hung</h3>
                    </div>
                    <div className="col-4">
                        <h6 className="d-flex  align-items-center float-right m-0">600k <i className="fa fa-caret-up text-c-green f-22 m-l-10" /></h6>
                    </div>
                </div>) : (<div className="row align-items-center justify-content-center m-b-20">
                    <div className="col-8">
                        <h4 className="f-w-300 d-flex align-items-center float-left m-0">Luong Thanh Thang</h4>
                    </div>
                    <div className="col-4">
                        <h6 className="d-flex  align-items-center float-right m-0">600k <i className="fa fa-caret-up text-c-green f-22 m-l-10" /></h6>
                    </div> </div>)}
            </Aux>
        )
    }
}

TrendingFixer.defaultProps = {
    isFirst: false
}
