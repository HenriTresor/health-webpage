const getData = async () => {
    const res = await fetch('http://localhost:8080/', { mode: 'cors' ,method:'POST'});
    const data = await res.json();

    document.body.innerHTML = JSON.stringify(data);
}


// fetch('http://localhost:8080/jsondata' ,{mode:'cors',method:'POST'}).then(res => res.json()).then(data => {
//     document.body.innerHTML = data.email;
// })

