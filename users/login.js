
async function handleSubmit(e) {
  let username = e.username.value
  let password = e.password.value

  console.log(username)

  const response = await fetch(`http://localhost:5000/authentication/`, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  });

  const data = await response.json();

  if (response.status === 200) {
    setCurrentUser(data.user);
    history.push(`/`);
  } else {
    setErrorMessage(data.message);
  }

  return false
}
