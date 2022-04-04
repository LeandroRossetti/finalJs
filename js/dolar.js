let url='https://www.dolarsi.com/api/api.php?type=valoresprincipales'
fetch(url)
    .then((respuesta) => respuesta.json())
    .then ((data) => console.log(data[1]));