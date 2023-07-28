let api=document.getElementById('fetch');
console.log(api)

const datas=fetch("http://localhost:8081/users")
.then((res)=>{
    return res.json()
})
.then((datas)=>{
    console.log(datas.users[0].name);
    
    datas.users.map((user)=>{
        const {id,name}=user;
        api.innerHTML=`
        <p> ${id}</p>
        <h2>${name}</h2> `
    })
});
  