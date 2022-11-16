
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

  let pgnTable=document.getElementById("paginationTbl");
  let  tblHead=Object.keys(products[0]);
  let startPage=1;
let endPage;
  pagnStart()
  function pagnStart(){
    let table=`<tr>`;
  for(let i=0;i<tblHead.length;i++){
    table+=`<th>${tblHead[i]}</th>`
  }
  table+=`</tr>`;
  let tblRow=`<tr>`;
  let  tblRowValue;

for(let i=0;i<products.length;i++){
    for(let j=0;j<tblHead.length;j++){
         tblRowValue=tblHead[j]
        tblRow+=`<td>${products[i][tblRowValue]}</td>`;
    }
    if(i==4){
        break;
    }
    tblRow+=`</tr>`;
}

pgnTable.innerHTML=table+tblRow

}

// execute when no. of records chnge to another value.
function recordsChange(){
    let xx=parseInt(document.getElementById("recordValue").value);
    console.log(typeof(xx));


    
    if(xx<=10 && xx>5 ){
        let table=`<tr>`;
  for(let i=0;i<tblHead.length;i++){
    table+=`<th>${tblHead[i]}</th>`
  }
  table+=`</tr>`;
//   pgnTable.innerHTML=table
let tblRow=`<tr>`;
let  tblRowValue;
for(let i=0;i<products.length;i++){
    for(let j=0;j<tblHead.length;j++){
         tblRowValue=tblHead[j]
        tblRow+=`<td>${products[i][tblRowValue]}</td>`;
        
    }
    if(i==9){
        break;
    }
    tblRow+=`</tr>`;
}

pgnTable.innerHTML=table+tblRow

    }
    if(xx<=5){
        let table=`<tr>`;
        for(let i=0;i<tblHead.length;i++){
          table+=`<th>${tblHead[i]}</th>`
        }
        table+=`</tr>`;
        let tblRow=`<tr>`;
        let  tblRowValue;
      
      for(let i=0;i<5;i++){
          for(let j=0;j<tblHead.length;j++){
               tblRowValue=tblHead[j]
              tblRow+=`<td>${products[i][tblRowValue]}</td>`;
          }
          if(i==4){
            break;
        }
          tblRow+=`</tr>`;
      }
      
      pgnTable.innerHTML=table+tblRow
    }


    
}
let pages=document.querySelectorAll(".pages");
console.log(pages);
for(p of pages){
    p.onclick=function(){
        let page_no=parseInt(this.innerText)
        console.log(page_no,"page clicked");
        if(page_no==1){
            let table=`<tr>`;
  for(let i=0;i<tblHead.length;i++){
    table+=`<th>${tblHead[i]}</th>`
  }
  table+=`</tr>`;
//   pgnTable.innerHTML=table
let tblRow=`<tr>`;
let  tblRowValue;
for(let i=0;i<products.length;i++){
    for(let j=0;j<tblHead.length;j++){
         tblRowValue=tblHead[j]
        tblRow+=`<td>${products[i][tblRowValue]}</td>`;
        
    }
    if(i==4){
        break;
    }
    tblRow+=`</tr>`;
}

pgnTable.innerHTML=table+tblRow
        }
    }
}

// console.log(pgnTable.rows.length);






