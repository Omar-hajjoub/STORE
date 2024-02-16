
let PRICE,taxes,ads,discount,total,totalepriset

PRICE=document.getElementById('PRICE')
taxes=document.getElementById('taxes')
ads=document.getElementById('ads')
discount=document.getElementById('discount')
total=document.getElementById('totale')
totalepriset=document.getElementById('totalepriset')


let mood='creat' 
let tmp;

function totaleprise(){
    if(PRICE.value !=''){
     let   totalcont=Number(PRICE.value)+Number(taxes.value)+Number(ads.value)-Number(discount.value)
     totalepriset.innerHTML=totalcont
total.style.background='chartreuse'
    }else{
        totalepriset.innerHTML=``

        total.style.background='red'

    }
}



let create,title,Count,Catogary

title=document.getElementById('tatiletext')
Count=document.getElementById('Count')
Catogary=document.getElementById('Catogary')


create=document.getElementById('create')
let dataprodect

if(localStorage.prodect != null){
dataprodect = JSON.parse(localStorage.prodect) 

}else{
    dataprodect=[]
}



create.onclick =function (){
if (title.value!='' && PRICE.value != ""  && Catogary.value != ""){
    let nawprodact ={
        title:title.value ,
        PRICE:PRICE.value,
taxes:taxes.value,
ads:ads.value,
discount:discount.value,
totalepriset:totalepriset.innerHTML,
        Count:Count.value ,
        Catogary:Catogary.value,

    }
    if( mood!='creat' ){
        dataprodect[tmp] = nawprodact
           mood='creat'
           create.innerHTML='Create' 
           total.style.background='red'
       
       }else{
             if(nawprodact.Count > 1){
               for (let index = 0; index < nawprodact.Count; index++) {
                   dataprodect.push(nawprodact)
       
               }
           }else{
               dataprodect.push(nawprodact)
               total.style.background='red'

       
           }
       }
       localStorage.setItem('prodect', JSON.stringify(dataprodect)) 

       ceraittabel()
       deletvalue()
}else{
    alert("plais text")
}
  

  


}

// value non 

function deletvalue(){
    title.value=''
    PRICE.value=''
taxes.value=''
ads.value=''
discount.value=''
   totalepriset.innerHTML=''
    Count.value='' 
Catogary.value=''

}



// table ceraite
function ceraittabel(){
    let tabl=document.getElementById('tablennow')
    let nawtabel=''
    for(let i =0 ; i< dataprodect.length ; i++){
         nawtabel +=
         `
         <tr>
                    <td>${i}</td>
                    <td>${dataprodect[i].title}</td>
                    <td>${dataprodect[i].PRICE}</td>
                    <td>${dataprodect[i].taxes}</td>
                    <td>${dataprodect[i].ads}</td>
                    <td>${dataprodect[i].discount}</td>
                    <td>${dataprodect[i].totalepriset}</td>
                    <td>${dataprodect[i].Catogary}</td>
                    <td > <button id=" Update" onclick=" updat(${i})">Update</button></td>
                    <td > <button id="Delet" onclick=" Deletprodect(${i})">Delet</button></td>
                </tr>
        `
    }
    tabl.innerHTML=nawtabel

    if(dataprodect.length >0){
        document.getElementById('DeleAll').style.display='inline-block'
        document.getElementById('numer').innerHTML=dataprodect.length

    }else{
        document.getElementById('DeleAll').style.display='none'

    }
}
ceraittabel()


// delat 

function Deletprodect(i){
dataprodect.splice(i,1)
localStorage.prodect=JSON.stringify(dataprodect)
ceraittabel()

}



function delatall(){   
 
   dataprodect.splice(0)
    localStorage.prodect=JSON.stringify(dataprodect)

  

    ceraittabel()

}



// udpdat

function updat(i){
    title.value=dataprodect[i].title
    PRICE.value=dataprodect[i].PRICE
    taxes.value=dataprodect[i].taxes
    ads.value=dataprodect[i].ads
    discount.value=dataprodect[i].discount   
    totalepriset.innerHTML=dataprodect[i].totalepriset
    totaleprise()
    Catogary.value=dataprodect[i].Catogary
    discount.value=dataprodect[i].discount


    create.innerHTML='Updat'
mood='updat'

tmp =i

}


// serach 

let serachmood ='title'
let serach=document.getElementById('serach')

function seracheMod(id){

    if(id ==='srchtitle'){
        serachmood='title'

        serach.placeholder='Search By Title'

    }else{
        serach.placeholder='Search By Category'

        serachmood='category'

    }

    serach.focus()
    ceraittabel()
}



function searchdata(value){
    let tabl=document.getElementById('tablennow')
    let nawtabel=""
if (serachmood='title') {
    
for(let i=0 ; i<dataprodect.length; i++){
    if (    dataprodect[i].title.includes(value)) {
        nawtabel +=
        `
        <tr>
                   <td>${i}</td>
                   <td>${dataprodect[i].title}</td>
                   <td>${dataprodect[i].PRICE}</td>
                   <td>${dataprodect[i].taxes}</td>
                   <td>${dataprodect[i].ads}</td>
                   <td>${dataprodect[i].discount}</td>
                   <td>${dataprodect[i].totalepriset}</td>
                   <td>${dataprodect[i].Catogary}</td>
                   <td > <button id=" Update" onclick=" updat(${i})">Update</button></td>
                   <td > <button id="Delet" onclick=" Deletprodect(${i})">Delet</button></td>
               </tr>
       `
   }else{

   }
    }
    tabl.innerHTML=nawtabel

}else {
    for(let i=0 ; i<dataprodect.length; i++){
        if (    dataprodect[i].Catogary.includes(value)) {
            nawtabel +=
            `
            <tr>
                       <td>${i}</td>
                       <td>${dataprodect[i].title}</td>
                       <td>${dataprodect[i].PRICE}</td>
                       <td>${dataprodect[i].taxes}</td>
                       <td>${dataprodect[i].ads}</td>
                       <td>${dataprodect[i].discount}</td>
                       <td>${dataprodect[i].totalepriset}</td>
                       <td>${dataprodect[i].Catogary}</td>
                       <td > <button id=" Update" onclick=" updat(${i})">Update</button></td>
                       <td > <button id="Delet" onclick=" Deletprodect(${i})">Delet</button></td>
                   </tr>
           `
       }else{
    
       }
        }
        tabl.innerHTML=nawtabel
}

}


