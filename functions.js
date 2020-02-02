
window.onload = function(){
    console.log("connect successfully");

    var endDate = new Date(2021, 1, 1);

    var body = $('#contents');

    var Arinv = 6428;
    var numRes = ["MON","TUE","WED","THU","FRI"];
    for (var d = new Date(2020, 0, 5); d <= endDate; d.setDate(d.getDate() + 1)) {

        let num = d.getDay();
        if(num == 0 || num == 6){
            continue;
        }
        let rowContents = "";
        if(Arinv >= 6500){
            Arinv = 6400;
        } else {
            Arinv++;
        }
        rowContents = "<tr><td> " + numRes[num - 1] + " " + d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear() + "</td><td>" + Arinv + "</td></tr>"

        body.append(rowContents);

    }

}