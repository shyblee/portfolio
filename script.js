var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

var sidemenu = document.getElementById("sidemenu");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

// ---------------------------------------sidemenu nav-----

var sidemenu=document.getElementById("sidemenu");

  function openmenu()
  {
    sidemenu.style.right= "0";
  }

  function closemenu()
  {
    sidemenu.style.right= "-150px";
  }





//   googlle sheets


const scriptURL = 'https://script.google.com/macros/s/AKfycbyhzLyZPFBm2Acc_CSFAL3obX1XD_dRA1zcUF7ghN_sjl7xEbEWC2J0pbCBihUw5xCk8w/exec'
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message))
})