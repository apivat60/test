function Login(){
  let str = document.getElementById('user').value
  console.log(str)
  google.script.run.withSuccessHandler(()=>{
    Swal.fire({
      title:'ok'
    })
  }).login(str)
}
