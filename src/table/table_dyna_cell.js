import $ from 'jquery';

export var select_cell = function select_cell_table(){

    var table = $("#table_gen");
 
    var isMouseDown = false;
    var startRowIndex = null;
    var startCellIndex = null;
 
    function selectTo(cell) {
 
      var row = cell.parent();
      var cellIndex = cell.index();
      var rowIndex = row.index();
 
      var rowStart, rowEnd, cellStart, cellEnd;
 
 
      if (rowIndex < startRowIndex) {
        rowStart = rowIndex;
        rowEnd = startRowIndex;
      } else {
        rowStart = startRowIndex;
        rowEnd = rowIndex;
      }
 
      if (cellIndex < startCellIndex) {
        cellStart = cellIndex;
        cellEnd = startCellIndex;
      } else {
        cellStart = startCellIndex;
        cellEnd = cellIndex;
      }
 
      for (var i = rowStart; i <= rowEnd; i++) {
        var rowCells = table.find("tr").eq(i).find("td");
        for (var j = cellStart; j <= cellEnd; j++) {
          rowCells.eq(j).addClass("selected");
        }
      }

      $("#input_start_text_row").text((cellStart+1) >= 10 ? cellStart+1 : "0"+(cellStart+1));
      $("#input_start_text_col").text((rowStart+1) >= 10 ? rowStart+1 : "0"+(rowStart+1));
      $("#input_end_text_row").text((rowEnd+1) >= 10 ? rowEnd+1 : "0"+(rowEnd+1));
      $("#input_end_text_col").text((cellEnd+1) >= 10 ? cellEnd+1 : "0"+(cellEnd+1));
      $("#input_width_text").text((Math.abs(cellStart-cellEnd)+1) >= 10 ? (Math.abs(cellStart-cellEnd)+1) : "0"+(Math.abs(cellStart-cellEnd)+1));
      $("#input_height_text").text((Math.abs(rowStart-rowEnd)+1) >= 10 ? (Math.abs(rowStart-rowEnd)+1) : "0"+(Math.abs(rowStart-rowEnd)+1));
 
    }
 
    table.find(".cell_table_select")
 
    .mousedown(function (e) {
      isMouseDown = true;
      var cell = $(this);
 
      table.find(".selected").removeClass("selected"); 
 
      if (e.shiftKey) {
        selectTo(cell);
      } else {
        cell.addClass("selected");
        startCellIndex = cell.index();
        startRowIndex = cell.parent().index();

        $("#input_start_text_row").text("??");
        $("#input_start_text_col").text("??");
        $("#input_end_text_row").text("??");
        $("#input_end_text_col").text("??");
        $("#input_width_text").text("??");
        $("#input_height_text").text("??");
      }
 
      return false; 
    })
 
    .mouseover(function () {
      if (!isMouseDown) return;
      table.find(".selected").removeClass("selected");
      selectTo($(this));
    })
 
    .bind("selectstart", function () {
      return false;
    });
 
    $(document).mouseup(function () {
      isMouseDown = false;
    });

  }
