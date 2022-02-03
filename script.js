const btn=document.querySelector('.btn');
const projectinfo=document.querySelector('.projectinfo');
const sidebar=document.querySelector('.sidebar');
const invisible=document.querySelector('.invisible');
const ham=document.querySelector('.ham');
const close=document.querySelector('.close');

const readmore=()=>{
    invisible.classList.toggle('visibiltytoggle');

}
btn.addEventListener('click',readmore);

// const closenav=()=>{
//     sidebar.classList.toggle('sidebartoggle');
//     // sidebar.style.backgroundColor='red';
//     if(sidebar.classList.contains('sidebartoggle')){
//         ham.style.display="inline";
//        close.style.display="none";
//     }
//     // ham.style.display='inline';
// }
// close.addEventListener('click',closenav);
// ham.addEventListener('click',expandnav);


// const expandnav=()=>{

// }
// ham.addEventListener('click',expandnav);

