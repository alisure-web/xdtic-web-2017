/**
 * Created by ALISURE on 2017/11/26.
 */

/*对象:创建自定义对象*/
var my_1 = new Object();
my_1.name = "ALISURE";
my_1.age = 24;

/*对象字面量*/
var my_2 = {
    name: "ALISURE",
    age: 24
};

/*JSON*/
/*{
    "name": "ALISURE",
    "age": 24
}*/

/*数组对象*/
var my_3 = new Array();
my_3.push("ALISURE", 24);

/*数组字面量*/
var my_4 = ["ALISURE", 24];

/*JSON*/
/*["ALISURE", 24]*/


/*组合*/
/*{
    "info":[
        { "name": "ALI", "age": 2 },
        { "name": "SURE", "age": 4 }
    ],
    "other":{ "name": "ALISURE", "age": 24 }
}*/


// 序列化
var json_text_1 = JSON.stringify(my_1);
var json_text_2 = JSON.stringify(my_2);
//console.log(json_text_1);
//console.log(json_text_2);

// 解析
var my_from_json_text_1 = JSON.parse(json_text_1);
var json_text_3 = '{"name":"ALISURE","age":24}';
var my_from_json_text_2 = JSON.parse(json_text_3);
//console.log(my_from_json_text_1["name"]);
//console.log(json_text_3["name"]);
//console.log(my_from_json_text_2["name"]);


my_1 = {
    name: "ALISURE",
    age: 24
};
// 过滤结果
var json_text_4 = JSON.stringify(my_1);
var json_text_5 = JSON.stringify(my_1, null, 4);
var json_text_6 = JSON.stringify(my_1, null, "**");
var json_text_7 = JSON.stringify(my_1, ["name"]);
var json_text_8 = JSON.stringify(my_1, ["name"], 4);
console.log(json_text_4);
console.log(json_text_5);
console.log(json_text_6);
console.log(json_text_7);
console.log(json_text_8);

my_1 = {
    name: "ALISURE",
    age: 24
};
var json_text_9 = JSON.stringify(my_1, function (key, value) {
    switch (key){
        case "name": return value + "" + value;
        case "age": return value * 2;
        default: return value;
    }
});
console.log(json_text_9);

var my_now = JSON.parse('{"name":"ALISUREALISURE","age":48}', function (key, value) {
    switch (key){
        case "name": return value.substr(0, value.length/2);
        case "age": return value / 2;
        default: return value;
    }
});
console.log(my_now);
