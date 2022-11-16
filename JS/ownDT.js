let products=[
    {
      "id":"1",
      "title":"Watch",
      "price":500,
      "rating":"4/5"
    },
    {
      "id":"2",
      "title":"Sun Glasses",
      "price":1500,
      "rating":"4.5/5"
    },{
      "id":"3",
      "title":"Rol-hex",
      "price":2500,
      "rating":"3.8/5"
    },{
      "id":"4",
      "title":"Key_Styler",
      "price":1500,
      "rating":"4.5/5"
    },{
      "id":"5",
      "title":"M-Shoe",
      "price":11500,
      "rating":"4.7/5"
    },{
        "id":"6",
        "title":"Rol-hex",
        "price":2500,
        "rating":"3.8/5"
      },{
        "id":"7",
        "title":"Key_Styler",
        "price":1500,
        "rating":"4.5/5"
      },{
        "id":"8",
        "title":"M-Shoe",
        "price":11500,
        "rating":"4.7/5"
      },{
      "id":"9",
      "title":"R-Shoe",
      "price":800,
      "rating":"3.2/5"
    },{
      "id":"10",
      "title":"Wrist_One",
      "price":800,
      "rating":"3.2/5"
    },{
      "id":"11",
      "title":"R-Shoe",
      "price":800,
      "rating":"3.2/5"
    },{
        "id":"12",
        "title":"R-Shoe",
        "price":800,
        "rating":"3.2/5"
      },{
        "id":"13",
        "title":"R-Shoe",
        "price":800,
        "rating":"3.2/5"
      },{
        "id":"14",
        "title":"R-Shoe",
        "price":800,
        "rating":"3.2/5"
      }
  ];
  let OwnDaTable=document.getElementById("forDataTable");
  let  tblHead=Object.keys(products[0]);
 let toThead=document.getElementById('tblhead');
 let toTbody=document.getElementById('tblbody');
console.log(toThead);
console.log(toTbody);

  let table=`<tr>`;
  for(let i=0;i<tblHead.length;i++){
    table+=`<th>${tblHead[i]}</th>`
  }
  table+=`</tr>`;
toThead.innerHTML=table;  
  let tblRow=`<tbody><tr>`;
  let  tblRowValue;

for(let i=0;i<products.length;i++){
    for(let j=0;j<tblHead.length;j++){
         tblRowValue=tblHead[j]
        tblRow+=`<td>${products[i][tblRowValue]}</td>`;
    }
    tblRow+=`</tr></tbody>`;
}
toTbody.innerHTML=tblRow;
// OwnDaTable.innerHTML=tblRow;

$(document).ready(function () {
    $('#forDataTable').DataTable();
       
});

