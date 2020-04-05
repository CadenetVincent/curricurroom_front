import React, { Component } from "react";
import {
    Row,
    Col,
    Form,
    Button,
    Table,
    Input,
    Card,
    Label,
    FormGroup,
    InputGroup,
    InputGroupAddon,
    InputGroupText
} from "reactstrap";
import $ from "jquery";

class FTable extends Component {
    constructor(props) {
        super(props);
        this.submit_form = this.submit_form.bind(this);
        this.add_tab = this.add_tab.bind(this);
        this.sub_tab = this.sub_tab.bind(this);
        this.add_row = this.add_row.bind(this);
        this.sub_row = this.sub_row.bind(this);
        this.state = { tab: 5, row: 0 };
    }

    componentDidMount() {}

    submit_form(e) {
        e.preventDefault();

        var result = [];
        var result_x = [];
        var result_y = [];

        var axe_name = [];
        var axe_name_x = [];

        axe_name.push({ axe_y_name: $("#axe_y_name").val() });

        for (let index = 0; index < this.state.tab; index++) {
            result_y.push($("#y_value_" + (index + 1)).val());
        }

        for (let index_row = 0; index_row <= this.state.row; index_row++) {
            var sub_result_x = [];

            axe_name_x.push($("#axe_x_name_" + index_row).val());

            for (let index_tab = 0; index_tab < this.state.tab; index_tab++) {
                sub_result_x.push(
                    $("#x_row_" + index_row + "_value_" + (index_tab + 1)).val()
                );
            }

            result_x.push(sub_result_x);
        }

        axe_name.push({ axe_x_name: axe_name_x });

        result = [
            { result_x: result_x },
            { result_y: result_y },
            { axe_name: axe_name },
            { graph_type: $("input[name='radio_select']:checked").val() },
            { title_graph : $("#title_table").val()}
        ];


        this.props.submit_graph(result);
    }

    add_tab(e) {
        e.preventDefault();
        const value = this.state.tab;
        this.setState({ tab: value + 1 });
    }

    sub_tab(e) {
        e.preventDefault();
        const value = this.state.tab;
        this.setState({ tab: value - 1 });
    }

    add_row(e) {
        e.preventDefault();
        const value = this.state.row;
        this.setState({ row: value + 1 });
    }

    sub_row(e) {
        e.preventDefault();
        const value = this.state.row;
        this.setState({ row: value - 1 });
    }

    generate_row(count) {
        var result = [];

        for (let index = 0; index < count; index++) {
            result.push(
                <tr id={"axe_x_" + (index + 1)}>
                    <th scope="row">{"X " + (index + 1)}</th>
                    <td>
                        <Input
                            type="text"
                            id={"axe_x_name_" + (index + 1)}
                            placeholder="Axe X name"
                        />
                    </td>
                    {this.generate_info(this.state.tab, "x", index + 1)}
                </tr>
            );
        }

        return result;
    }

    generate_info(count, obj, row) {
        var result = [];

        for (let index = 0; index < count; index++) {
            if (obj == "axe") {
                result.push(
                    <th key={"axe_" + (index + 1)} id={"axe_" + (index + 1)}>
                        {" "}
                        {index + 1}{" "}
                    </th>
                );
            }

            if (obj == "x") {
                result.push(
                    <td key={"xvalue" + (index + 1)}>
                        <Input
                            key={"x_row_" + row + "_value_" + (index + 1)}
                            className="generate_info_x"
                            type="number"
                            step="any"
                            id={"x_row_" + row + "_value_" + (index + 1)}
                            placeholder={index + 1 + " X value"}
                        />
                    </td>
                );
            }

            if (obj == "y") {
                result.push(
                    <td key={"yvalue" + (index + 1)}>
                        <Input
                            key={"y_value_" + (index + 1)}
                            className="generate_info_y"
                            type="number"
                            step="any"
                            id={"y_value_" + (index + 1)}
                            placeholder={index + 1 + " Y value"}
                        />
                    </td>
                );
            }
        }

        return result;
    }

    render() {
        return (
            <div>
                <br/>
                    <div className="table_body">
                        <div className="body_size_info">
                        <h3 className="title_admin">Generate a graph</h3>
                        <Form>
                            <Row>
                                <Col xs="12">
                                    <div>
                                    <h5>Type of graph : </h5>
                                        <Row>
                                            <Col xs="3">
                                                <p className="custom_choice_radio">
                                                    <input
                                                        type="radio"
                                                        id="line_radio"
                                                        name="radio_select"
                                                        value="line"
                                                    />
                                                    <label
                                                        for="line_radio"
                                                        className="check_cus_label"
                                                    >
                                                        &nbsp; Line
                                                    </label>
                                                </p>
                                            </Col>
                                            <Col xs="3">
                                                <p className="custom_choice_radio">
                                                    <input
                                                        type="radio"
                                                        id="bar_radio"
                                                        name="radio_select"
                                                        value="bar"
                                                    />
                                                    <label
                                                        for="bar_radio"
                                                        className="check_cus_label"
                                                    >
                                                        &nbsp; Bar
                                                    </label>
                                                </p>
                                            </Col>
                                            <Col xs="3">
                                                <p className="custom_choice_radio">
                                                    <input
                                                        type="radio"
                                                        id="radar_radio"
                                                        name="radio_select"
                                                        value="radar"
                                                    />
                                                    <label
                                                        for="radar_radio"
                                                        className="check_cus_label"
                                                    >
                                                        &nbsp; Radar
                                                    </label>
                                                </p>
                                            </Col>
                                            <Col xs="3">
                                                <p className="custom_choice_radio">
                                                    <input
                                                        type="radio"
                                                        id="pie_radio"
                                                        name="radio_select"
                                                        value="pie"
                                                    />
                                                    <label
                                                        for="pie_radio"
                                                        className="check_cus_label"
                                                    >
                                                        &nbsp; Pie
                                                    </label>
                                                </p>
                                            </Col>
                                            <Col xs="3">
                                                <p className="custom_choice_radio">
                                                    <input
                                                        type="radio"
                                                        id="polar_radio"
                                                        name="radio_select"
                                                        value="polar"
                                                    />
                                                    <label
                                                        for="polar_radio"
                                                        className="check_cus_label"
                                                    >
                                                        &nbsp; Polar
                                                    </label>
                                                </p>
                                            </Col>
                                            <Col xs="3">
                                                <p className="custom_choice_radio">
                                                    <input
                                                        type="radio"
                                                        id="bubble_radio"
                                                        name="radio_select"
                                                        value="bubble"
                                                    />
                                                    <label
                                                        for="bubble_radio"
                                                        className="check_cus_label"
                                                    >
                                                        &nbsp; Bubble
                                                    </label>
                                                </p>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                                <Col xs={{ size: 8, offset: 2 }}>

                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend">
                                            <InputGroupText>Graph title</InputGroupText>
                                        </InputGroupAddon>
                                        <Input id="title_table" placeholder="Title" />
                                    </InputGroup>

                                    <br/>

                                </Col>
                                <Col xs="10">
                                    <Table>
                                        <thead>
                                            <tr id="nbr_axe_table">
                                                <th
                                                    key="axe_title"
                                                    id="axe_title"
                                                >
                                                    Axe
                                                </th>
                                                <th
                                                    key="axe_name"
                                                    id="axe_name"
                                                >
                                                    Axe Title
                                                </th>
                                                {this.generate_info(
                                                    this.state.tab,
                                                    "axe",
                                                    0
                                                )}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr id="axe_x_0">
                                                <th scope="row">X 0</th>
                                                <td>
                                                    <Input
                                                        type="text"
                                                        id="axe_x_name_0"
                                                        placeholder="Axe X name"
                                                    />
                                                </td>
                                                {this.generate_info(
                                                    this.state.tab,
                                                    "x",
                                                    0
                                                )}
                                            </tr>

                                            {this.generate_row(this.state.row)}

                                            <tr id="axe_y">
                                                <th scope="row">Y</th>
                                                <td>
                                                    <Input
                                                        type="text"
                                                        id="axe_y_name"
                                                        placeholder="Axe Y name"
                                                    />
                                                </td>
                                                {this.generate_info(
                                                    this.state.tab,
                                                    "y",
                                                    0
                                                )}
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Col>
                                <Col xs="2">
                                    <div className="add_button">
                                        <div className="custom_div">
                                            <button
                                                onClick={this.add_tab}
                                                className="change_tab"
                                            >
                                                <i className="fas fa-plus-circle fa-2x"></i>
                                            </button>
                                        </div>

                                        <div className="custom_div">
                                            <button
                                                onClick={this.sub_tab}
                                                className="change_tab"
                                            >
                                                <i className="fas fa-minus-circle fa-2x"></i>
                                            </button>
                                        </div>
                                    </div>
                                </Col>

                                <Col xs="10">
                                    <div className="add_button_horiz">
                                        <Row>
                                            <Col xs="6">
                                                <div className="custom_div_horiz">
                                                    <button
                                                        onClick={this.add_row}
                                                        className="change_tab_horiz"
                                                    >
                                                        <i className="fas fa-plus-circle fa-2x"></i>
                                                    </button>
                                                </div>
                                            </Col>
                                            <Col xs="6">
                                                <div className="custom_div_horiz">
                                                    <button
                                                        onClick={this.sub_row}
                                                        className="change_tab_horiz"
                                                    >
                                                        <i className="fas fa-minus-circle fa-2x"></i>
                                                    </button>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                </Col>
                            </Row>
                            <br />
                            <button
                                className="submit_button"
                                onClick={this.submit_form}
                            >
                                {" "}
                                Create a graph{" "}
                            </button>
                        </Form>
                    </div>
                    </div>
            </div>
        );
    }
}

export default FTable;
