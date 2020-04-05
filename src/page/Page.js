import React from "react";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { Line, Bar, Radar, Pie, Polar, Bubble } from "react-chartjs-2";
import $ from "jquery";

class Page extends React.Component {
    constructor(props) {
        super(props);
    }

    state = { page: [] };

    async componentDidMount() {
        var result = [];

        try {
            result = await axios.get("http://localhost:5000/component/");
        } catch (error) {
            console.error(error);
        }

        this.setState({ page: result.data });
    }

    render() {

        var my_width = "";
        var my_height= "";

        if(this.props.my_width == undefined && this.props.my_height == undefined)
        {
            my_width = "100vw";
            my_height = "2000px";
        }else
        {
            my_width = this.props.my_width;
            my_height = this.props.my_height;
        }

        return (
            <div className="body_used" style={{width : my_width, height : my_height}}>
                {this.state.page.map(function(item, i) {

                    if (item.name == "image") {
                        return (
                            <div
                                id="myChart_1"
                                key={"img_" + i}
                                className="img_used"
                                style={{
                                    width: item.size_width * 5 + "%",
                                    height: item.size_height * 2.5 + "%",
                                    left: (item.start_row - 1) * 5 + "%",
                                    top: (item.start_col - 1) * 2.5 + "%",
                                    zIndex: i,
                                    backgroundImage: `url(${item.composit})`
                                }}
                            ></div>
                        );
                    }

                    if (item.name == "graph") {
                        var graph_prop = JSON.parse(item.composit);

                        console.log(graph_prop);

                        var dataset = [];

                        var option = "";

                        option = {
                                title: {
                                    display: true,
                                    text: graph_prop[3].title_graph
                                }
                        };

                        for (
                            let index = 0;
                            index < graph_prop[0].result_x.length;
                            index++
                        ) {
                            dataset.push({
                                label:
                                    graph_prop[2].axe_name[1].axe_x_name[index],
                                fill: false,
                                data: graph_prop[0].result_x[index],
                                backgroundColor: [
                                    "rgba(255, 99, 132, 0.2)",
                                    "rgba(54, 162, 235, 0.2)",
                                    "rgba(255, 206, 86, 0.2)",
                                    "rgba(75, 192, 192, 0.2)",
                                    "rgba(153, 102, 255, 0.2)",
                                    "rgba(255, 159, 64, 0.2)",
                                    "rgba(255, 99, 132, 0.2)",
                                    "rgba(54, 162, 235, 0.2)",
                                    "rgba(255, 206, 86, 0.2)",
                                    "rgba(75, 192, 192, 0.2)",
                                    "rgba(153, 102, 255, 0.2)",
                                    "rgba(255, 159, 64, 0.2)"
                                ],
                                borderColor: [
                                    "rgba(255, 99, 132, 1)",
                                    "rgba(54, 162, 235, 1)",
                                    "rgba(255, 206, 86, 1)",
                                    "rgba(75, 192, 192, 1)",
                                    "rgba(153, 102, 255, 1)",
                                    "rgba(255, 159, 64, 1)",
                                    "rgba(255, 99, 132, 1)",
                                    "rgba(54, 162, 235, 1)",
                                    "rgba(255, 206, 86, 1)",
                                    "rgba(75, 192, 192, 1)",
                                    "rgba(153, 102, 255, 1)",
                                    "rgba(255, 159, 64, 1)"
                                ]
                            });
                        }

                        var data = {
                            labels: graph_prop[1].result_y,
                            datasets: dataset
                        };

                        return (
                            <div
                                className="img_used"
                                style={{
                                    width: item.size_width * 5 + "%",
                                    height: item.size_height * 2.5 + "%",
                                    left: (item.start_row - 1) * 5 + "%",
                                    top: (item.start_col - 1) * 2.5 + "%",
                                    zIndex: i,
                                    backgroundColor: "white"
                                }}
                            >
                                {graph_prop[3].graph_type == "line" ? (
                                    <Line
                                        ref="chart"
                                        width={item.size_width * 5 + "%"}
                                        height={item.size_height * 2.5 + "%"}
                                        id={"chart_" + i}
                                        key={"chart_" + i}
                                        id="myChart"
                                        data={data}
                                        options={option}
                                    />
                                ) : null}

                                {graph_prop[3].graph_type == "bar" ? (
                                    <Bar
                                        ref="chart"
                                        width={item.size_width * 5 + "%"}
                                        height={item.size_height * 2.5 + "%"}
                                        id={"chart_" + i}
                                        key={"chart_" + i}
                                        id="myChart"
                                        data={data}
                                        options={option}
                                    />
                                ) : null}

                                {graph_prop[3].graph_type == "radar" ? (
                                    <Radar
                                        ref="chart"
                                        width={item.size_width * 5 + "%"}
                                        height={item.size_height * 2.5 + "%"}
                                        id={"chart_" + i}
                                        key={"chart_" + i}
                                        id="myChart"
                                        data={data}
                                    />
                                ) : null}

                                {graph_prop[3].graph_type == "pie" ? (
                                    <Pie
                                        ref="chart"
                                        width={item.size_width * 5 + "%"}
                                        height={item.size_height * 2.5 + "%"}
                                        id={"chart_" + i}
                                        key={"chart_" + i}
                                        id="myChart"
                                        data={data}
                                    />
                                ) : null}

                                {graph_prop[3].graph_type == "polar" ? (
                                    <Polar
                                        ref="chart"
                                        width={item.size_width * 5 + "%"}
                                        height={item.size_height * 2.5 + "%"}
                                        id={"chart_" + i}
                                        key={"chart_" + i}
                                        id="myChart"
                                        data={data}
                                    />
                                ) : null}

                                {graph_prop[3].graph_type == "bubble" ? (
                                    <Bubble
                                        ref="chart"
                                        width={item.size_width * 5 + "%"}
                                        height={item.size_height * 2.5 + "%"}
                                        id={"chart_" + i}
                                        key={"chart_" + i}
                                        id="myChart"
                                        data={data}
                                    />
                                ) : null}
                            </div>
                        );
                    }

                    if (item.name == "text") {
                        console.log(item);

                        //document.getElementById("myText_"+i).appendChild(item.composit);

                        return (
                            <div
                                id={"myText_" + i}
                                key={"text_" + i}
                                className="img_used"
                                style={{
                                    width: item.size_width * 5 + "%",
                                    height: item.size_height * 2.5 + "%",
                                    left: (item.start_row - 1) * 5 + "%",
                                    top: (item.start_col - 1) * 2.5 + "%",
                                    zIndex: i,
                                    backgroundColor: "white"
                                }}
                            >
                                <div
                                    className="Container"
                                    dangerouslySetInnerHTML={{
                                        __html: item.composit
                                    }}
                                ></div>
                            </div>
                        );
                    }
                })}
            </div>
        );
    }
}

export default Page;
