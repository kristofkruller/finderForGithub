//init class
const github = new Github;
const ui = new UI;
//input event listenet - search input
const searchUser = document.getElementById('searchUser');
//event listener
searchUser.addEventListener('keyup', (e) => {
    //to get input text
    const userText = e.target.value;

    if(userText !== '') {
        //make http call - return a promise with .then()
        github.getUser(userText)
        .then(data => {
            if(data.profile.message === 'Not Found') {
                //show alert
                ui.showAlert('User not found', 'alert alert-danger')
            } else {
                //show profile
                ui.showProfile(data.profile);
                ui.showRepos(data.repos);
            }
        })
    } else {
        //clear profile
        ui.clearProfile();
    }
});