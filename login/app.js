// if(dataa){
//     var ro =document.getElementById("col-md-7-10");
//     ro.style.display="block";
    
//     var og = document.getElementById("col-md-7-8");
//     og.style.display="none";
    
//     var o = document.getElementById("col-md-7");
//     o.style.display="none";

//     var pr =document.getElementById("pr");
//     pr.style.display="block";

// }



function log(){
var div =  document.getElementById("col-md-7");
var log = document.getElementById("col-md-7-8");
var proo = document.getElementById("col-md-7-10");
var lo = document.getElementById("l-o");
proo.style.display="none";
div.style.display = "none";
log.style.display="block";
lo.style.display="none";
}

function pro(){
    var sig =  document.getElementById("col-md-7");
    var log = document.getElementById("col-md-7-8");
    var proo = document.getElementById("col-md-7-10");
    var lo = document.getElementById("l-o");
    sig.style.display = "none";
    log.style.display="none";
    proo.style.display="block";
    lo.style.display="block";
}

function sig(){
    var div =  document.getElementById("col-md-7");
    var log = document.getElementById("col-md-7-8");
    div.style.display = "block";
    log.style.display="none";
        
}


class dataa {
    constructor(ran, uname, email, dob, cpass, pic, address, rad, phone, pcode ) {

        this.ran = ran;
        this.uname = uname;
        this.email = email;
        this.dob = dob;
        this.cpass = cpass;
        this.pic = pic;
        this.address = address;
        this.rad = rad;
        this.phone = phone;
        this.pcode = pcode;
    }
}
// var get = new cons(array.length, data,true)
var npic ;
document.querySelector("#pic").addEventListener("change",function(){
    // console.log(this.files);
    const reader = new FileReader();
    
    reader.addEventListener("load",()=>{
        npic = reader.result
    });

    reader.readAsDataURL(this.files[0]);
});

function register(){
    
    var ran = Math.round(Math.random()*10);
    var uname=document.getElementById("uname");
    var email= document.getElementById("email");
    var address= document.getElementById("address");
    var dob = document.getElementById("dob");
    var cpass = document.getElementById("cpass");
    var pass = document.getElementById("pass");
    var pic = document.getElementById("pic");
    var phone = document.getElementById("num");
    var pcode = document.getElementById("pcode");


    // console.log(cpass.value);
    // console.log(pass.value);
    uname=uname.value;
    email=email.value;
    address=address.value;
    dob=dob.value;
    cpass=cpass.value;
    pic= npic;
    phone=phone.value;
    pcode=pcode.value;

    
    var ppp =phone.toString().length;
    var pc =pcode.toString().length;
    // console.log(pic.value.files);
    if (document.getElementById('male').checked) {
        var rad = document.getElementById('male').value;
          }
         if (document.getElementById('female').checked) {
        var rad = document.getElementById('female').value;
          }
          else if(uname==""){
            document.getElementById("err").innerText="PLeas insert correct name";
            var dis = document.getElementById("col-md-7-9");
            dis.style.display="block";
            // alert("PLeas insert correct name");
        }
        else if(uname==" "){
            document.getElementById("err").innerText="PLeas insert correct name";
            var dis = document.getElementById("col-md-7-9");
            dis.style.display="block";
            // alert("PLeas insert correct name");
        }
        else if(address==""){
            document.getElementById("err").innerText="Pleas ENTER your address";
            var dis = document.getElementById("col-md-7-9");
            dis.style.display="block";
            // alert("PLeas insert correct name");
        }
        else if(email==""){
            document.getElementById("err").innerText="Pleas check your Email";
            var dis = document.getElementById("col-md-7-9");
            dis.style.display="block";
            // alert("PLeas insert correct name");
        }
        // else if(email==""){
        //     document.getElementById("err").innerText="Pleas check your Email";
        //     var dis = document.getElementById("col-md-7-9");
        //     dis.style.display="block";
        //     // alert("PLeas insert correct name");
        // }
        else if(dob==""){
            document.getElementById("err").innerText="Pleas select Date of birth";
            var dis = document.getElementById("col-md-7-9");
            dis.style.display="block";
            // alert("PLeas insert correct name");
        }
        else if(pic==""){
            document.getElementById("err").innerText="Pleas select your Profile picture !";
            var dis = document.getElementById("col-md-7-9");
            dis.style.display="block";
            // alert("PLeas insert correct name");
        }
        else if(ppp < 11){

            document.getElementById("err").innerText="pleas enter correct Number";
            var dis = document.getElementById("col-md-7-9");
            dis.style.display="block";
            
            //alert("pleas enter correct Number")
        }
        else if(ppp > 11){

            document.getElementById("err").innerText="pleas enter correct Number";
            var dis = document.getElementById("col-md-7-9");
            dis.style.display="block";
            
            //alert("pleas enter correct Number")
        }
    else if(pc < 6){
       
        document.getElementById("err").innerText="pleas enter correct Postal code";
        var dis = document.getElementById("col-md-7-9");
        dis.style.display="block";
       
        //alert("pleas enter correct Postal code")
    }
    else if(pc > 6){
       
        document.getElementById("err").innerText="pleas enter correct Postal code";
        var dis = document.getElementById("col-md-7-9");
        dis.style.display="block";
       
        //alert("pleas enter correct Postal code")
    }
    else if(pass==""){
        document.getElementById("err").innerText="Pleas check your Password";
        var dis = document.getElementById("col-md-7-9");
        dis.style.display="block";
        // alert("PLeas insert correct name");
    }
    else if(pass=="  "){
        document.getElementById("err").innerText="Pleas check your Password";
        var dis = document.getElementById("col-md-7-9");
        dis.style.display="block";
        // alert("PLeas insert correct name");
    }     
    else if(cpass != pass.value){
    
            document.getElementById("err").innerText="Pleas check your Password";
            var dis = document.getElementById("col-md-7-9");
            dis.style.display="block";
            // alert("PLeas check your Password");
        }  
   else{
    var get = new dataa(ran,uname,email,dob,cpass,pic,address,rad,phone,pcode);
    
    var datae = JSON.stringify(get);
    window.localStorage.setItem(" login data " ,datae);
    
    var div =  document.getElementById("col-md-7");
    var log = document.getElementById("col-md-7-8");
    // console.log(datae);
    div.style.display = "none";
    log.style.display="block";
    var sign=document.getElementById("sign");
    sign.style.display="none";
   
} 
   

    // var myStorage = window.localStorage.getItem(" login data ");
    // console.log(JSON.parse(myStorage)); 
    // console.log(get);
    // console.log(rad);
    // console.log(fe);



}

var modal = document.getElementById("col-md-7-9");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {

    modal.style.display = "none";
  }
  

// function che(arg){

     
//     // var ran = Math.round(Math.random());
//     var uname=document.getElementById("uname");
//     var email= document.getElementById("email");
//     var address= document.getElementById("address");
//     var dob = document.getElementById("dob");
//     var cpass = document.getElementById("cpass");
//     var pass = document.getElementById("pass");
//     var pic = document.getElementById("pic");
//     var phone = document.getElementById("num");
//     var pcode = document.getElementById("pcode");

//     uname=uname.value;
//     email=email.value;
//     address=address.value;
//     dob=dob.value;
//     cpass=cpass.value;
//     pic= pic.value;
//     phone=phone.value;
//     pcode=pcode.value;

  
// }

function login(){
    var email= document.getElementById("lg-email");
    var pass = document.getElementById("lg-pass");
    pass=pass.value;
    email=email.value;

    var myStorage = window.localStorage.getItem(" login data ");
    var data =JSON.parse(myStorage)
    
    if(email!=data.email){

        var error = document.getElementById("col-md-7-9");
        error.style.display="block";
        // else if(pass==""){
            document.getElementById("err").innerText="Pleas check your Email";
            var dis = document.getElementById("col-md-7-9");
            dis.style.display="block";
    }

    else if(pass!=data.cpass){

        var error = document.getElementById("col-md-7-9");
        error.style.display="block";
        // else if(pass==""){
            document.getElementById("err").innerText="Pleas check your Password";
            var dis = document.getElementById("col-md-7-9");
            dis.style.display="block";
    } 
    else{

        var ne= data.pic
       document.getElementById("nIMG").setAttribute('src',ne);
      
        var pr =document.getElementById("col-md-7-10");
        pr.style.display="block";
        
        var log = document.getElementById("col-md-7-8");
        log.style.display="none";


        var l = document.getElementById("sign");
        l.style.display="none";

        var pr =document.getElementById("pr");
        pr.style.display="block";
         
        var lo = document.getElementById("l-o");
        lo.style.display="block";

        var name = document.createElement("p");
        te = document.createTextNode("User Name : "+data.uname);
        name.appendChild(te);
        

        var pp =document.createElement("p");
        textnode = document.createTextNode( " Email : "+data.email);
        pp.appendChild(textnode);
        
       var gender = document.createElement("p");
        e = document.createTextNode( "Gender : "+data.rad);
      gender.appendChild(e) 
      

       var dob = document.createElement("p");
        t = document.createTextNode( "Date of birth : "+data.dob);
      dob.appendChild(t) 
      

       var num = document.createElement("p");
        x = document.createTextNode( "Cell No :"+ data.phone);
       num.appendChild(x) 

     
       var div = document.getElementById("sd");
       
       
       div.appendChild(name);
       div.appendChild(gender);
       div.appendChild(num);
       div.appendChild(dob);
   
        div.appendChild(pp);
    }

    // console.log(data.email); 


}

function del(){
    var div =  document.getElementById("col-md-7");
    var log = document.getElementById("col-md-7-8");
    var proo = document.getElementById("col-md-7-10");
    var lo = document.getElementById("pr");
    var o = document.getElementById("l-o");
    var sign=document.getElementById("sign");
    sign.style.display="block";
    o.style.display="none"
    lo.style.display="none"
    proo.style.display="none";  
    div.style.display = "block";
    log.style.display="none";

    window.localStorage.clear();

    
}