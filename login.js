const login_url= 'http://localhost:4000/users/login';
const loginBtn = document.getElementById("loginBtn");

	loginBtn.addEventListener("click",(event) =>{
		event.preventDefault()
		console.log(event)
		event.preventDefault()

		    let username = document.getElementById('login_username').value
		    let password = document.getElementById('pwd').value
		    fetch(login_url, {
		        method: 'POST',
		        mode: 'cors',
		        headers: {'Content-Type': 'application/json'},
		        body: JSON.stringify ({username: username, password: password})
		    })
		    .then ((response) => response.json())
		    .then((data) => {
				console.log(data)
				const {user}= data

				localStorage.setItem('token', data.token)
				localStorage.setItem('user', JSON.stringify (user))
				window.location.replace('../dashboard/dashboard.html')

			})
			.catch((error)=>{
				console.log(error)
			})
		
		});

   