function welcome(firstName, lastName) {
    let fullName = `${firstName} ${lastName}`
    function displayFullname() {
        alert(`Welcome ${fullName}!`)
    }
    displayFullname()
}