function registerAccount() {
	var usernamelist = [];
	var passwordlist = [];
	var username = document.getElementById("newUsername").value;
	var password = document.getElementById("newPassword").value;

	//alert("Function called." + username + " " + password);

	for (let i = 0; i < accountlist.length; i++) {
		if (usernamelist[i] == "") {
			usernamelist[i] = username;
		} else {
			alert("if statement error");
		}

		if (passwordlist[i] == "") {
			passwordlist[i] = password;
		} else {
			alert("if statement error");
		}
	}

	//alert(usernamelist[0]);
}
