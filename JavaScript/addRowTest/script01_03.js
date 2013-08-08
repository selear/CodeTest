//已经完成了随意添加行和删除行的情况, 接下来需要完成随意添加列和删除列的情况
window.onload = initAll;
var names = new Array("zbmc", "zbdw", "lj", "ljzz", "lj1", "ljzz1", "lj2", "ljzz2", "lj3", "ljzz3", "lj4", "ljzz4");


function initAll() {
    document.getElementById("delRow").disabled = true;
    document.getElementById("delCol").disabled = true;

    document.getElementById("addRow").onclick = addRow;
    document.getElementById("delRow").onclick = delRow;
    document.getElementById("addCol").onclick = addCol;
    document.getElementById("delCol").onclick = delCol;

    document.getElementById("testButton").onclick = setTableInputNames;
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

    for (var i = 0; i < selRowLen; i++) {

        var Tblen = document.all.mainBody.rows.length;
        if (Tblen == 2) { //只剩下表头和一行数据的时候
            document.getElementById("rowBox").checked = false;
            alert("A line have to be saved in the ID of mytable!");
            document.getElementById("delRow").disabled = true;
            break;
        }

        document.getElementById("mainBody").deleteRow(selRow[i] + 1); //只有存在table的id存在的情况下才能删除row
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
    //alert(id);
    var CBList;
    if (id == "rowBox") {
        CBList = $(":checkbox#rowBox");
    } else if (id == "colBox") {
        CBList = $(":checkbox#colBox"); //自己大小写拼错, 结果取不到相应的对象
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
        CBList = $(":checkbox#colBox");
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

    var rowNum = getRowNum();
    var cellNum = getCellNum();

    if (cellNum < 12) { //新增的列的添加方式, 在<th>和<td>中有所不同
        var colCount = cellNum - 3;
        $("table tr > th:last").after('<th><span align="left"><input type="checkbox" id="colBox" onclick="setDelButtonState(this)" /></span><input type="text" value="custom' + colCount + '"/></th>');
        //下面的循环本意是通过rowNum来确定需要横向添加的cell数量
        for (var i = 1; i <= rowNum; i++) { //在添加TH之后, 其他TR标签中添加cell的内容
            var row = $("table tr:eq(" + i + ") > td:last").after('<td><input type="text" id=""/></td>');
        }

    } else {
        alert("添加列数已超过规定范围.");
    }

    return false;
}

function delCol() {
    var selCol = getSelBox("colBox");
    var selColLen = selCol.length;
    var rowNum = getRowNum();
    rowNum++; //因为所有的row都需要循环, 所以自加1
    //alert(rowNum);
    //单独删除th行的单元格
    for (var i = 0; i < selColLen; i++) {
        var tempColId = selCol[i] + 5;
        $("table tr > th:eq(" + tempColId + ")").remove();

        for (var j = 1; j < rowNum; j++) {
            $("table tr:eq(" + j + ") > td:eq(" + tempColId + ")").remove();
        }
    }


    return false;
}

function getCellNum() {
    var cellNum = $("table tbody#mainBody tr:last > td").length - 1;
    return cellNum;
}

function getRowNum() {
    var rowNum = $("table tbody#mainBody tr").length - 1;
    return rowNum;
}

//根据设定的单元格个数, 填充并返回一行, 该行之中首先会添加一个checkbox, 然后再声称cellNum个单元格, 其中使用文本域获取信息

function fillRow(cellNum) {

    var newRowObj = document.createElement("tr");
    //添加row内容开始
    var newCheckBox = document.createElement("td");
    newCheckBox.innerHTML = '<center><input type="checkbox" id="rowBox" onclick="setDelButtonState(this)" /></center>';

    newRowObj.appendChild(newCheckBox);

    var otherCells = new Array(cellNum);
    for (var i = 0; i < otherCells.length; i++) {
        otherCells[i] = document.createElement("td");
        otherCells[i].innerHTML = '<input type="text" size="20" />';
        newRowObj.appendChild(otherCells[i]);
    }
    //添加row内容结束

    return newRowObj;
}

function setTableInputNames() {
    var cellNum = getCellNum();
    var rowNum = getRowNum();

    for(var i = 0; i <= rowNum; i++) {
        for(var j = 5; j <= cellNum; j++) {

            tempIndex = document.getElementById("mytable").rows[i].cells[j].childNodes.length;
            tempIndex--;
            document.getElementById("mytable").rows[i].cells[j].childNodes[tempIndex].name = names[j - 1];
        }
    }
}