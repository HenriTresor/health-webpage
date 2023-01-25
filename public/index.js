// body scrolling function

  let header = document.querySelector(".bottom-header");
  let sticky = header.offsetTop;

function scroll() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky')
          document.querySelector(".top").style.display = "block";
    }
    else {
        header.classList.remove('sticky')
          document.querySelector(".top").style.display = "none";
    }

}