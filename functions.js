
window.onload = function(){
    console.log("connect successfully");

    var endDate = new Date(2021, 1, 1);

    var body = $('#contents1');

    var Arinv = 6428;
    var numRes = ["MON","TUE","WED","THU","FRI"];
    for (var d = new Date(2020, 0, 5); d <= endDate; d.setDate(d.getDate() + 1)) {

        let num = d.getDay();
        let date = d.getDate();
        let month = d.getMonth() + 1;
        let year = d.getFullYear();
        if(num == 0 || num == 6){
            continue;
        } else if (date == 1 && month == 1){
            continue;
        } else if (date == 27 && month == 1) {
            continue;
        } else if (date == 9 && month == 3) {
            continue;
        } else if (date == 10 && month == 4) {
            continue;
        } else if (date == 11 && month == 4) {
            continue;
        } else if (date == 13&& month == 4) {
            continue;
        } else if (date == 25 && month == 4) {
            continue;
        } else if (date == 8 && month == 6) {
            continue;
        } else if (date == 5 && month == 10) {
            continue;
        } else if (date == 24 && month == 12) {
            continue;
        } else if (date == 25 && month == 12) {
            continue;
        } else if (date == 28 && month == 12) {
            continue;
        } else if (date == 31 && month == 12) {
            continue;
        }
        let rowContents = "";
        if(Arinv >= 6500){
            Arinv = 6400;
        } else {
            Arinv++;
        }
        rowContents = "<tr><td> " + numRes[num - 1] + " " + date + "/" + month + "/" + year + "</td><td>" + Arinv + "</td></tr>"

        body.append(rowContents);

    }

}