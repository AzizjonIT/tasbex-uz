document.querySelector('#click').addEventListener('click', function(){
  let ekran = document.querySelector('#ekran')
  ekran.value =  Number(ekran.value) +1
  
  let su = "SubhanOlloh" ;
  let aa = "Allohu akbar" ;
  let sb = "Alhamdulillah"
  let h2 = document.querySelector('#sub') ;
  let ma = "Mashallah" ;
 
 if (ekran.value <= 33) {
  h2.innerHTML = su ;
  console.log(su); 
  
 } else if (ekran.value <=66) {
  h2.innerHTML = aa ;
  console.log(aa);
 } else if (ekran.value <=99){
  h2.innerHTML = sb ;
  console.log(sb);
 }else if (ekran.value <=132){
  h2.innerHTML = ma ;
  console.log(ma);

 }



  
  
} );

document.querySelector('#delete').addEventListener('click', function(){
    let ekran = document.querySelector('#ekran')

    ekran.value = 0
   

    
    
  } )

  const funcOzg = () => {
    const ekran = document.getElementById('ekran')
    ekran.classList.toggle("mystyle");
  }



