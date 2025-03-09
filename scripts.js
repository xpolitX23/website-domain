function checkDomain() {
    let domain = document.getElementById("domain").value;
    
    fetch(`/check-domain?domain=${domain}`)
        .then(response => response.json())
        .then(data => {
            if (data.available) {
                document.getElementById("result").innerHTML = `<span style='color:green'>Domain is available!</span> 
                <a href='/register-domain?domain=${domain}'><button>Register</button></a>`;
            } else {
                document.getElementById("result").innerHTML = "<span style='color:red'>Domain is taken.</span>";
            }
        })
        .catch(error => console.error("Error:", error));
}
