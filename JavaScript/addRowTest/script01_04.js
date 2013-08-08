    window.onload = initAll;
    var names = new Array("zbmc", "zbdw", "lj", "ljzz", "lj1", "ljzz1", "lj2",
            "ljzz2", "lj3", "ljzz3", "lj4", "ljzz4");

    function initAll() {
        document.getElementById("delRow").disabled = true;
        document.getElementById("delCol").disabled = true;

        document.getElementById("addRow").onclick = addRow;
        document.getElementById("delRow").onclick = delRow;
        document.getElementById("addCol").onclick = addCol;
        document.getElementById("delCol").onclick = delCol;
    }

    function validate() {
        setTableInputNames();
        getTableData();
        $("#insertForm").submit();
    }

    function addRow() {

        var cellNum = getCellNum(); //获取表格一行有多少个单元格

        var newRowObj = fillRow(cellNum); //填充每一行的内容

        $("table tbody#mainBody").append(newRowObj);

        return false;
    }

    function delRow() {

        var selRow = getSelBox("rowBox");
        var selRowLen = selRow.length;

        for ( var i = 0; i < selRowLen; i++) {

            var Tblen = document.all.mainBody.rows.length;
            if (Tblen == 2) { //只剩下表头和一行数据的时候
                document.getElementById("rowBox").checked = false;
                alert("A line have to be saved in the ID of mytable!");
                document.getElementById("delRow").disabled = true;
                break;
            }

            document.getElementById("mainBody").deleteRow(selRow[i] + 1); //只有存在table的id存在的情况下才能删除row
        }

        document.getElementById("delRow").disabled = "true";

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
        var CBList;
        if (id == "rowBox") {
            CBList = $(":checkbox#rowBox");
        } else if (id == "colBox") {
            CBList = $(":checkbox#colBox"); //自己大小写拼错, 结果取不到相应的对象
        }
        var CBListLen = CBList.length;
        var flag = false;
        for ( var i = 0; i < CBListLen; i++) {
            if (CBList[i].checked == true) {
                flag = true;
                break;
            }
        }
        return flag;
    }

    function getSelBox(id) {
        var CBList;
        var selList = new Array();
        if (id == "rowBox") {
            //CBList = $("table tbody#mainBody > :checkbox#rowBox");
            CBList = $(":checkbox#rowBox");
        } else if (id == "colBox") {
            //CBList = $("table tbody#mainBody > :checkbox#colBox");
            CBList = $(":checkbox#colBox");
        }
        var start = CBList.length - 1;
        var j = 0;
        for ( var i = start; i >= 0; i--) {
            if (CBList[i].checked == true) {
                selList[j] = i;
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
            $("table tbody#mainBody > tr:eq(0) > th:last")
                    .after(
                            '<th><input type="checkbox" id="colBox" onclick="setDelButtonState(this)" /><input type="text" value="custom' + colCount + '" size="5" /></th>');
            //下面的循环本意是通过rowNum来确定需要横向添加的cell数量
            for ( var i = 1; i <= rowNum; i++) { //在添加TH之后, 其他TR标签中添加cell的内容
                var row = $("table tbody#mainBody > tr:eq(" + i + ") > td:last")
                        .after(
                                '<td><input type="text" value=" " size="6"/></td>');
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
        for ( var i = 0; i < selColLen; i++) {
            var tempColId = selCol[i] + 5;
            $("table tbody#mainBody tr > th:eq(" + tempColId + ")").remove();

            for ( var j = 1; j < rowNum; j++) {
                $(
                        "table tbody#mainBody tr:eq(" + j + ") > td:eq("
                                + tempColId + ")").remove();
            }
        }

        document.getElementById("delCol").disabled = "true";

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
        var newCheckBox = document.createElement("td");
        newCheckBox.innerHTML = '<center><input type="checkbox" id="rowBox" onclick="setDelButtonState(this)" /></center>';

        newRowObj.appendChild(newCheckBox);

        var otherCells = new Array(cellNum);
        for ( var i = 0; i < otherCells.length; i++) {
            
            if(i < 2) {
                inHTML = '<input type="text" value=" " size="20"/>';
            } else {
                inHTML = '<input type="text" value=" " size="6"/>'
            }
            
            otherCells[i] = document.createElement("td");
            otherCells[i].innerHTML = inHTML;
            newRowObj.appendChild(otherCells[i]);
        }

        return newRowObj;
    }

    //获得table的tr td等属性
    function getTableData() {
        // alert('该table有'+document.all.mytable.rows.length+'个tr')
        var data_all = "";
        //获取th标签之中的数据
        for ( var i = 0; i < document.all.mytable.rows.length; i++) {
            //循环每个tr里的td
            for ( var j = 1; j < document.all.mytable.rows(i).cells.length; j++) {
                //alert('第'+(i+1)+'个tr中的第'+(j+1)+'个td的值为:'+document.all.mytable.rows(i).cells(j).childNodes[0].value);
                tempIndex = document.all.mytable.rows(i).cells(j).childNodes.length;
                tempIndex--;
                data_all += document.all.mytable.rows(i).cells(j).childNodes[tempIndex].value
                        + "&_&";
            }
            //alert(data_all.substr(0,data_all.length-3));
            data_all = data_all.substr(0, data_all.length - 3);
            data_all = data_all + "#_#";
        }
        data_all = data_all.substr(0, data_all.length - 3);
        var obj_data_all = document.getElementById("data_all");
        obj_data_all.value = data_all;
        //alert(obj_data_all.value);
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
