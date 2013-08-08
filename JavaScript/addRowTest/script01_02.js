//已经完成了随意添加行和删除行的情况, 接下来需要完成随意添加列和删除列的情况
window.onload = initAll;
var names = new Array("zbmc", "zbdw", "lj", "ljzz", "lj1", "ljzz1", "lj2", "ljzz2", "lj3", "ljzz3", "lj4", "ljzz4", "lj5", "ljzz5", "lj6", "ljzz6", "lj7", "ljzz7", "lj8", "ljzz8", "lj9", "ljzz9", "lj10", "ljzz10", "lj11", "ljzz11", "lj12", "ljzz12", "lj13", "ljzz13", "lj14", "ljzz14", "lj15", "ljzz15");


function initAll() {
    document.getElementById("delRow").disabled = true;
    document.getElementById("delCol").disabled = true;

    document.getElementById("addRow").onclick = addRow;
    document.getElementById("delRow").onclick = delRow;
    document.getElementById("addCol").onclick = addCol;
    document.getElementById("delCol").onclick = delCol;
}

function addRow() {

    var cellNum = getCellNum(); //获取表格一行有多少个单元格

    var newRowObj = fillRow(cellNum); //填充每一行的内容

    $("table").append(newRowObj);

    return false;
}

function delRow() {

    var selRow = getSelBox("rowBox");
    var selRowLen = selRow.length;
    alert(selRowLen);
    for (var i = 0; i < selRowLen; i++) {

        var Tblen = document.all.mytable.rows.length;
        if (Tblen == 2) { //只剩下表头和一行数据的时候
            document.getElementById("rowBox").checked = false;
            alert("A line have to be saved in the ID of mytable!");
            document.getElementById("delRow").disabled = true;
            break;
        }

        document.getElementById("mytable").deleteRow(selRow[i] + 1); //只有存在table的id存在的情况下才能删除row
    }

    return false;
}

function setDelButtonState(obj) {

    //判断哪个按钮需要禁用
    var objId = obj.id;
    var buttonId = (objId == "rowBox") ? "delRow" : "delCol";
    var button = document.getElementById(buttonId);
    var selected = checkSelBox(objId);
    (selected) ? button.disabled = false : button.disabled = true;
}

function checkSelBox(id) {
    var CBlist;
    if (id == "rowBox") {
        CBList = $(":checkbox#rowBox");
    } else if (id == "colBox") {
        CBlist = $(":checkbox#colBox");
    }
    var CBListLen = CBList.length;
    var flag = false;

    for (var i = 0; i < CBListLen; i++) {
        if (CBList[i].checked == true) {
            flag = true;
            break;
        }
    }

    return flag;
}

function getSelBox(id) {
    var CBlist;
    var selList = new Array();
    if (id == "rowBox") {
        CBList = $(":checkbox#rowBox");
    } else if (id == "colBox") {
        CBlist = $(":checkbox#colBox");
    }
    var start = CBList.length - 1;

    var j = 0;
    var temp = "";
    for (var i = start; i >= 0; i--) {
        if (CBList[i].checked == true) {
            selList[j] = i;
            temp += i + ",";
            j++;
        }
    }

    return selList;
}

function addCol() {
    alert(3);

    return false;
}

function delCol() {
    alert(4);

    return false;
}

function getCellNum() {
    var cellNum = $("table tr:last > td").length - 1;
    return cellNum;
}


//根据设定的单元格个数, 填充并返回一行, 该行之中首先会添加一个checkbox, 然后再声称cellNum个单元格, 其中使用文本域获取信息

function fillRow(cellNum) {

    var newRowObj = document.createElement("tr");
    //添加row内容开始
    var newCheckBox = document.createElement("td");
    newCheckBox.innerHTML = '<center><input type="checkbox" id="rowBox" name="checkbox" onclick="setDelButtonState(this)" /></center>';

    newRowObj.appendChild(newCheckBox);

    var otherCells = new Array(cellNum);
    for (var i = 0; i < otherCells.length; i++) {
        otherCells[i] = document.createElement("td");
        otherCells[i].innerHTML = '<input type="text" name="' + names[i] + '" size="20" value="' + i + '">';
        newRowObj.appendChild(otherCells[i]);
    }
    //添加row内容结束

    return newRowObj;
}