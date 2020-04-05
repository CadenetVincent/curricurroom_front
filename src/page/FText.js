import React, { Component } from "react";
import { Row, Col, Form, Button } from "reactstrap";
import $ from "jquery";

class FText extends Component {
    constructor(props) {
        super(props);
        this.ChangeInfo = this.ChangeInfo.bind(this);
        this.submit_form = this.submit_form.bind(this);
    }
    
  ChangeInfo()
  {
  var colorPalette = ['000000', 'FF9966', '6699FF', '99FF66', 'CC0000', '00CC00', '0000CC', '333333', '0066FF', 'FFFFFF'];
  var forePalette = $('.fore-palette');
  var backPalette = $('.back-palette');

  for (var i = 0; i < colorPalette.length; i++) {
    forePalette.append('<a href="#" data-command="forecolor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
    backPalette.append('<a href="#" data-command="backcolor" data-value="' + '#' + colorPalette[i] + '" style="background-color:' + '#' + colorPalette[i] + ';" class="palette-item"></a>');
  }

  $('.toolbar a').click(function(e) {
    var command = $(this).data('command');
    if (command == 'h1' || command == 'h2' || command == 'p') {
      document.execCommand('formatBlock', false, command);
    }
    if (command == 'forecolor' || command == 'backcolor') {
      document.execCommand($(this).data('command'), false, $(this).data('value'));
    }
    if (command == 'createlink' || command == 'insertimage') {
      var url = prompt('Enter the link here: ', '');
      document.execCommand($(this).data('command'), false, url);
    } else document.execCommand($(this).data('command'), false, null);
  });

  }

  submit_form(e) {
    e.preventDefault();

    this.props.submit_text({result : $("#editor").html()});

  }

    componentDidMount() {
        this.ChangeInfo();
    }

    render() {
        return (
            <div>
            <br/>
            <div className="table_body">
             <div className="body_size_info">
             <h3 className="title_admin">Generate a text</h3>
                <br/>
                <Form>
                <div className="toolbar">
                    <a href="#" data-command="undo">
                        <i className="fa fa-undo"></i>
                    </a>
                    <a href="#" data-command="redo">
                        <i className="fa fa-repeat"></i>
                    </a>
                    <div className="fore-wrapper">
                        <i className="fa fa-font" style={{color:'#C96'}}></i>
                        <div className="fore-palette"></div>
                    </div>
                    <div className="back-wrapper">
                        <i className="fa fa-font" style={{background:'#C96'}}></i>
                        <div className="back-palette"></div>
                    </div>
                    <a href="#" data-command="bold">
                        <i className="fa fa-bold"></i>
                    </a>
                    <a href="#" data-command="italic">
                        <i className="fa fa-italic"></i>
                    </a>
                    <a href="#" data-command="underline">
                        <i className="fa fa-underline"></i>
                    </a>
                    <a href="#" data-command="strikeThrough">
                        <i className="fa fa-strikethrough"></i>
                    </a>
                    <a href="#" data-command="justifyLeft">
                        <i className="fa fa-align-left"></i>
                    </a>
                    <a href="#" data-command="justifyCenter">
                        <i className="fa fa-align-center"></i>
                    </a>
                    <a href="#" data-command="justifyRight">
                        <i className="fa fa-align-right"></i>
                    </a>
                    <a href="#" data-command="justifyFull">
                        <i className="fa fa-align-justify"></i>
                    </a>
                    <a href="#" data-command="indent">
                        <i className="fa fa-indent"></i>
                    </a>
                    <a href="#" data-command="outdent">
                        <i className="fa fa-outdent"></i>
                    </a>
                    <a href="#" data-command="insertUnorderedList">
                        <i className="fa fa-list-ul"></i>
                    </a>
                    <a href="#" data-command="insertOrderedList">
                        <i className="fa fa-list-ol"></i>
                    </a>
                    <a href="#" data-command="h1">
                        H1
                    </a>
                    <a href="#" data-command="h2">
                        H2
                    </a>
                    <a href="#" data-command="createlink">
                        <i className="fa fa-link"></i>
                    </a>
                    <a href="#" data-command="unlink">
                        <i className="fa fa-unlink"></i>
                    </a>
                    <a href="#" data-command="insertimage">
                        <i className="fa fa-image"></i>
                    </a>
                    <a href="#" data-command="p">
                        P
                    </a>
                    <a href="#" data-command="subscript">
                        <i className="fa fa-subscript"></i>
                    </a>
                    <a href="#" data-command="superscript">
                        <i className="fa fa-superscript"></i>
                    </a>
                </div>
                <div id="editor" contentEditable='true'>
                    <p>Add some Information ...</p>
                </div>
                <br/>
                <button className="submit_button"  onClick={this.submit_form}>Create a text</button>
                </Form>
            </div>
        </div>
        </div>
        );
    }
}

export default FText;
