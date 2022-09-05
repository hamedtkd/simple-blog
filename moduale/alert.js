const alertNull = document.getElementById('alertNull')

export function alertForNull(massage){
    setTimeout(function () {
        alertNull.style.right = "100%";
    }, 3000);
    alertNull.children[0].innerHTML = massage;
    alertNull.style.right = "0%";
    alertNull.children[1].addEventListener('click', () => {
        alertNull.style.right = "100%";
    }); 
 }