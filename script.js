function sendMail(){
    var params={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };


    const serviceID="service_q8dqo7h";
    const templateID="template_w8rd76g";
    emailjs.send(serviceID,templateID,params)
    .then(
        res =>{
            document.getElementById("name").value="";
            document.getElementById("email").value="";
            document.getElementById("message").value="";
            console.log(res);
            alert("your message sent succussfully")
        })
        .catch(err=>console.log(err));

}