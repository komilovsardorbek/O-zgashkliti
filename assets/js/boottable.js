var i = 1;
function childrenRow() {
    i++;
    $('#childTable').find('tbody').append('<tr><th scope="row">' + i +
        '</th><td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td \n' + 'class="fa fa-plus-circle f-20 txt-primary"\n' +
        'id="addrow" onclick="childrenRow()"\n' + '/></td>\n' +'</td></tr>');
}

var j = 1;
function childrenTable() {
    j++;
    $('#childTable1').find('tbody').append('<tr><th scope="row">' + j + '</th>' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' +'placeholder=""></td>\n' +
        '<td \n' +'class="fa fa-plus-circle f-20 txt-primary"\n' +
        'id="addrow1" onclick="childrenTable()"\n' +'/></td>\n' +'</td></tr>');
}

var a = 1;
function childrentable() {
    a++;
    $('#childTable2').find('tbody').append('<tr><th class="table-primary" scope="row">' + a +
        '</th><td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td \n' + 'class="fa fa-plus-circle f-20 txt-primary"\n' +
        'id="addrow1" onclick="childrentable()"\n' + '/></td>\n' +'</td></tr>');
}

var x = 1;
function childrentabl1() {
    x++;
    $('#childTable3').find('tbody').append('<tr><th scope="row">' + x +
        '</th>' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td><input class="border-0 w-100" type="text"\n' + 'placeholder=""></td>\n' +
        '<td \n' + 'class="fa fa-plus-circle f-20 txt-primary"\n' +
        'id="addrow3" onclick="childrentabl1()"\n' + '/></td>\n' +'</td></tr>');
}