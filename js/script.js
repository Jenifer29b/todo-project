 const url = "https://66718660e083e62ee43bf42a.mockapi.io/todowork"

  const myform = document.getElementById("myform");

  myform.addEventListener("submit" ,(e) =>{
         e.preventDefault();
          const Username = document.getElementById("username").value;
          const TodoTask = document.getElementById("task").value;
          const Deadline = document.getElementById("deadline").value;

          const data = JSON.stringify({
               Username,
               TodoTask,
               Deadline,
               "status" : "Pending"
          })
          console.log(data)

          fetch(url ,{
               method : "POST",
               headers : {
                    "Content-Type" : "application/json"
               },
               body : data
          })
          .then((response) => response.json())
          .then((data) => console.log("success" ,data))
          .catch((error) => console.log("error", error))
          .finally(() => {
               myform.reset();
               loadtodo()
          })
          })

     function loadtodo(){
          fetch(url)
          .then((res) => res.json())
          .then((data) =>{
               const task = document.getElementById("card");
               task.innerHTML = ""
               data.forEach( item => {
                    const div1 = document.createElement("div");
                    div1.setAttribute("class" ,"card")
                    div1.style.border = "2px solid black"
                    const div2 = document.createElement("div");
                    div2.setAttribute("class","card-header");
                    div2.innerText = item.Username
                    div2.style.borderBlockEnd = "2px solid black"
                    div2.style.color = "black"
                    div2.width = "100px"
                    div2.style.fontSize = "20px"
                    div1.appendChild(div2);
                    const div3 = document.createElement("h5");
                    div3.setAttribute("class", "card-body");
                    div3.innerText = item.TodoTask
                    div1.appendChild(div3);
                    const div4 = document.createElement("p");
                    div4.setAttribute("class","class-text")
                    div4.innerText = `Deadline: ${item.Deadline}`
                    div3.appendChild(div4);
                    const button = document.createElement("button")
                    button.setAttribute("class", item.status)
                    button.setAttribute("data-id", item.id)
                    button.innerText = item.status 
                    button.addEventListener("click",updatestatus)
                    div3.appendChild(button)
                    const button1 = document.createElement("button")
                    button1.style.border = "1px solid red"
                    button1.style.marginLeft = "5px"
                    button1.setAttribute("class", "delete");
                    const del = "Delete"
                    button1.setAttribute("data-id", item.id)
                    button1.innerText = del;
                    button1.addEventListener("click" , deletestatus)
                    div3.appendChild(button1)
                    task.appendChild(div1)
               })
          })
     }
     function updatestatus(event){
          const status = event.target.innerText;

          const newstatus = status === "Pending" ? "Ongoing" : status === "Ongoing" ? "Completed" : "Pending";

          const id = event.target.getAttribute("data-id");
          fetch(`${url}/${id}`,{
               method : "PUT",
               headers : {
                    "Content-Type" : "application/json"
               },
               body : JSON.stringify({
                    "status" : newstatus
               })
          })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error))
          .finally(() => loadtodo())

     }
        
     function deletestatus(event){
          const id = event.target.getAttribute("data-id");
          fetch(`${url}/${id}`,{
               method : "DELETE"
          })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .catch((error) => console.log(error))
          .finally(() => loadtodo())
     }

     window.onload = loadtodo();
    

     
     const driver = window.driver.js.driver;
     const driverObj = driver({
          showProgress: true,
          steps: [
            { element: '#tour-example', popover: 
                 { title: 'TODO TASK TO KNOW WHAT WORK IS PENDING!!!', description: 'Here is ur todo task list.Lets go through it.what the important task is pending', side: "cnenter", align: 'start' } },
            
            { popover: 
                  { title: 'Happy working time', description: 'And that is all, go ahead and start doing work on your applications.' } }
          ]
        });
        
        driverObj.drive();  

     
    
    
    
    
    
    
    // fetch (url ,{
    //   method : "POST",
    //   headers : {
    //     "Content-Type" : "application/json"
    //   },
    //   body : JSON.stringify({
    //     name : "Narek",
    //     age : 22
    //   })
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error(error))

    // fetch (url ,{
    //   method : "POST",
    //   headers: {
    //     "content-type" : "application/json"
    //   },
    //   body : JSON.stringify({
    //     name : "jeni",
    //     age : 22
    //   })
    // })
    // .then(response => response.json())
    // .then(data => console.log(data))
    // .catch(error => console.error(error))

    