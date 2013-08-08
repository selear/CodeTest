window.onload = initAll;
var names = new Array("zbmc", "zbdw", "lj", "ljzz", "lj1", "ljzz1", "lj2", "ljzz2", "lj3", "ljzz3", "lj4", "ljzz4", "lj5", "ljzz5", "lj6", "ljzz6", "lj7", "ljzz7", "lj8", "ljzz8", "lj9", "ljzz9", "lj10", "ljzz10", "lj11", "ljzz11", "lj12", "ljzz12", "lj13", "ljzz13", "lj14", "ljzz14", "lj15", "ljzz15");


function initAll() {
    document.getElementById("addRow").onclick = addRow;
    document.getElementById("delRow").onclick = delRow;
    document.getElementById("addCol").onclick = addCol;
    document.getElementById("delCol").onclick = delCol;
}

function addRow() {

    var cellCount = $("table tr:last > td").length - 1;

    var tableBodyObj = document.getElementById("mainBody");
    var newRowObj = document.createElement("tr");

    //添加row内容
    var newCheckBox = document.createElement("td");
    newCheckBox.innerHTML = '<center><input type="checkbox" name="checkbox" onclick = "checkBoxSel()"></center>';

    newRowObj.appendChild(newCheckBox);

    var otherCells = new Array(cellCount);
    for (var i = 0; i < otherCells.length; i++) {
        otherCells[i] = document.createElement("td");
        otherCells[i].innerHTML = '<input type="text" name="' + names[i] + '" size="20">';
        newRowObj.appendChild(otherCells[i]);
    }
    //添加row内容结束

    $("table").append(newRowObj);

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