import React from "react";
import "../App.css";
import $ from "jquery";
import { generate } from "../table/table_generate";
import { select_cell } from "../table/table_dyna_cell";
import { size_info } from "../table/table_size_info";
import { send_component, delete_cell } from "../table/table_request";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Row,
    Col,
    Form,
    Button,
    TabContent,
    TabPane,
    Nav,
    NavItem,
    NavLink,
    Card,
    CardTitle,
    CardText
} from "reactstrap";
import axios from "axios";
import DefaultImg from "../image/image.jpg";
import TabsStrap from "./TabsStrap.js";
import Page from "./Page.js";

class Tool extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            actual_image: DefaultImg,
            image_url: DefaultImg,
            switch_dispo: "table"
        };

        this.submit_form = this.submit_form.bind(this);
        this.submit_img = this.submit_img.bind(this);
        this.submit_graph = this.submit_graph.bind(this);
        this.submit_text = this.submit_text.bind(this);
        this.generate_img = this.generate_img.bind(this);
        this.change_dispo = this.change_dispo.bind(this);
    }

    componentDidMount() {
        delete_cell();
        select_cell();
    }

    uploadImage(e) {
        let ImageFormObj = new FormData();

        this.setState({ actual_image: URL.createObjectURL(e.target.files[0]) });

        ImageFormObj.append("imageName", "multer-image-" + Date.now());
        ImageFormObj.append("imageData", e.target.files[0]);

        axios
            .post("http://localhost:5000/cloudimg/create_blog", ImageFormObj)
            .then(response => {
                this.setState({ image_url: response.data.url });
            })
            .catch(err => {
                console.log(err);
            });
    }

    submit_graph(element) {
        this.submit_form(element, "graph");
    }
    submit_img() {
        this.submit_form(this.state.image_url, "image");
    }
    submit_text(element) {
        this.submit_form(element, "text");
    }

    change_dispo() {
        this.state.switch_dispo == "table"
            ? this.setState({ switch_dispo: "page" })
            : this.setState({ switch_dispo: "table" });
    }

    submit_form(element, name) {
        var size = {
            start_row: $("#input_start_text_row").text(),
            start_col: $("#input_start_text_col").text(),
            size_width: $("#input_width_text").text(),
            size_height: $("#input_height_text").text()
        };

        if (name == "image") {
            size.name = "image";
            size.composit = element;
        }

        if (name == "graph") {
            size.name = "graph";
            size.composit = JSON.stringify(element);
        }

        if (name == "text") {
            size.name = "text";
            size.composit = element.result;
        }

        if (
            size.start_row != "?" &&
            size.start_row != "" &&
            size.start_col != "?" &&
            size.start_col != "" &&
            size.size_width != "?" &&
            size.size_width != "" &&
            size.size_height != "?" &&
            size.size_height != ""
        ) {
            send_component(size);
        }
    }

    generate_img(actual_image) {
        return (
            <Row>
                <Col xs={{ size: 10, offset: 1 }}>
                    <br />

                    <div className="body_size_info">
                        <h3 className="title_admin">Generate an image</h3>

                        <Form>
                            <div className="file_attachment">
                                <Row>
                                    <Col xs="6">
                                        <label className="custom_file">
                                            {" "}
                                            Select Image (jpg|jpeg|png|svg) :
                                            <input
                                                type="file"
                                                name="file"
                                                onChange={e =>
                                                    this.uploadImage(e)
                                                }
                                            />
                                        </label>
                                    </Col>

                                    <Col xs="6">
                                        <img
                                            src={actual_image}
                                            alt="uploadImage"
                                            className="process__image"
                                            style={{
                                                width: "100px",
                                                height: "100px"
                                            }}
                                        />
                                    </Col>
                                </Row>
                            </div>
                            <br />

                            <button
                                className="submit_button"
                                onClick={this.submit_img}
                            >
                                {" "}
                                Create an image{" "}
                            </button>
                        </Form>
                    </div>
                </Col>
            </Row>
        );
    }

    render() {
        return (
            <div>
                <Row>
                    <Col xs={12}>
                        <Row>
                            <Col xs="5">
                                <div className="table_body_gestion">
                                    <Row>
                                        <Col xs="10">

                                           
                                            <table id="table_gen">
                                                <tbody>
                                                    {generate(40, 20)}
                                                </tbody>
                                            </table>

                                            {this.state.switch_dispo == "table" ? (
                                                <div className="switch_to_page">
                                                <Page
                                                    my_width="100%"
                                                    my_height="90vh"
                                                />
                                                </div>
                                        ) : null}


                                        </Col>

                                        <Col xs="2">
                                            <div className="change_dispo">
                                                <div className="custom_div">
                                                    <button
                                                        onClick={
                                                            this.change_dispo
                                                        }
                                                        className="dispo_btn"
                                                    >
                                                        {this.state
                                                            .switch_dispo ==
                                                        "table" ? (
                                                            <i className="fas fa-file fa-2x"></i>
                                                        ) : (
                                                            <i className="fas fa-table fa-2x"></i>
                                                        )}
                                                    </button>
                                                </div>
                                            </div>
                                        </Col>
                                    </Row>
                                </div>
                            </Col>

                            <Col xs="7">
                                <TabsStrap
                                    info_size={size_info()}
                                    generate_img={this.generate_img}
                                    actual_image={this.state.actual_image}
                                    submit_graph={this.submit_graph}
                                    submit_text={this.submit_text}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Tool;
