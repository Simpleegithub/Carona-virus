let array=['Do you have a fever ? ','Do you have a cough -(dry cough) ?','Do you have a cough -(wet cough)', 'Do you have a flu ?','Have you travelled abroad in the last 15 days ?','Have you been in contact with any person who has recently travelled internationally ?','Do you have chest infection','Do you have shortness of breath ?','Is your age more than or equal to 60 years of age ?','Due to Co-morbidities do you take any medicine ?'];
let src1=[ 'fever (1).png','cough.png','drycough.png','flu.png','plane.png','tourist.png','chest.png','breath.png','age.png','medicine.png'];
let firstbtn=document.querySelector('.first-btn');
let text=document.querySelector('.text-center');
let img=document.querySelector('.best-img');


let count=0;

firstbtn.addEventListener('click',function(){
img.src=`${src1[count]}`;
text.innerHTML=array[count];
if(count<array.length-1){
    count++;
} 
else{
    count=0;
    // window.location.href="/index.html"
}

    
})