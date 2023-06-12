let boton = document.getElementById('boton');

function media_aparicion () {
    let media1 = document.getElementsByClassName('media')[0];
    media1.style.display = 'block';
    let contButon = document.getElementsByClassName('but_container')[0];
    contButon.style.display = 'none';
}

boton.onclick = media_aparicion;