import React from "react";
import axios from "axios";
import $ from "jquery";

export var send_component = async function send_component(size) {
    var result = "";

    try {
        result = await axios.post("http://localhost:5000/component/add", size);
    } catch (error) {
        console.error(error);
    }

    return result;
};

export var delete_cell = async function delete_cell() {
    var result = "";

    try {
        result = await axios.get("http://localhost:5000/component/");
    } catch (error) {
        console.error(error);
    }

    result = result.data;


    if(result !== undefined)
    {

    for (let index = 0; index < result.length; index++) {

        for (
            let indexcell = result[index].start_col - 1;
            indexcell <
            result[index].start_col - 1 + (result[index].size_height);
            indexcell++
        ) {
            for (
                let indexrow = result[index].start_row - 1;
                indexrow <
                result[index].start_row - 1 + (result[index].size_width);
                indexrow++
            ) {
                $("#td_" + indexrow + "_" + indexcell).addClass("alreadyused");
            }
        }
    }

    }
};
