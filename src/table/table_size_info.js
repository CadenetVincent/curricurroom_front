import {
    Row,
    Col
} from "reactstrap";
import React from 'react';

export const size_info = () => (
    <Row>
        <Col xs={{offset: 1, span: 10}}>
    
        <br/>

        <div className="body_size_info">
        
        <h3 className="title_admin">Size information</h3>

        <Row>

        <Col xs="6">
            <p className="inline">
                {" "}
                <strong>S</strong>tart :{" "}
            </p>
        </Col>
        <Col xs="3">
            Row : &nbsp;
            <p id="input_start_text_row" className="inline" placeholder="Amount" step="1">
            ??
            </p>
        </Col>
        <Col xs="3">
             Col : &nbsp;
            <p id="input_start_text_col" className="inline" placeholder="Amount" step="1">
            ??
            </p>
        </Col>

        <Col xs="6">
            <p className="inline">
                {" "}
                <strong>E</strong>nd :{" "}
            </p>
        </Col>
        <Col xs="3">
            Row : &nbsp;
            <p id="input_end_text_row" className="inline" placeholder="Amount" step="1">
            ??
            </p>
        </Col>
        <Col xs="3">
            Col : &nbsp;
            <p id="input_end_text_col" className="inline" placeholder="Amount" step="1">
            ??
            </p>
        </Col>

        <Col xs="6">
            <p className="inline">
                {" "}
                <strong>W</strong>idth :{" "}
            </p>
        </Col>
        <Col xs="6">
            <p id="input_width_text" className="inline" placeholder="Amount" step="1">
            ?? 
            </p>
            &nbsp; boxs
        </Col>

        <Col xs="6">
            <p className="inline">
                {" "}
                <strong>H</strong>eight :{" "}
            </p>
        </Col>
        <Col xs="6">
            <p id="input_height_text" className="inline" placeholder="Amount" step="1">
            ??
            </p>
            &nbsp; boxs
        </Col>

        </Row>

        </div>

        </Col>

    </Row>
);
