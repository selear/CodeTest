window.onload = initAll;

function initAll() {
    /*$("#addRow").onclick = addRow;
    $("#delRow").onclick = delRow;
    $("#addCol").onclick = addCol;
    $("#delCol").onclick = delCol;*/
    document.getElementById("addRow").onclick = addRow;
    document.getElementById("delRow").onclick = delRow;
    document.getElementById("addCol").onclick = addCol;
    document.getElementById("delCol").onclick = delCol;
}

function addRow() {
    var cellsCount = $("table tr:last > td").length - 1;
    var lastRow = $("table tr:last");

    var tr = $("<tr></tr>");
    lastRow.append(tr).html("<td>TD01</td><td>TD02</td><td>TD03</td><td>TD04</td><td>TD05</td>");

    return false;
}

function delRow() {
    alert(2);
}

function addCol() {
    alert(3);
}

function delCol() {
    alert(4);
}