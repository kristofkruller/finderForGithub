class UI {
    constructor() {
        this.profile = document.getElementById('profile');
    }
    showProfile(user) {
        this.profile.innerHTML = `
        <div class = "card card-body mb-3">
            <div class = "row">
                <div class = "col-md-3">
                    <img class = "img-fluid mb-2" src="${user.avatar_url}">
                    <a href = "${user.html_url}" target = "_blank" class = "btn btn-primary btn-block mb-4">View Profile</a>
                </div>
                <div class = "col-md-9">
                    <span class = "badge badge-primary mb-1">Public Repos: ${user.public_repos}</span>
                    <span class = "badge badge-secondary mb-1">Public Repos: ${user.public_gists}</span>
                    <span class = "badge badge-success mb-1">Public Repos: ${user.followers}</span> 
                    <span class = "badge badge-info mb-1">Public Repos: ${user.following}</span>
                    <br><br>
                    <ul class = "list-group">             
                        <li class = "list-group-item">Company: ${user.company}</li>
                        <li class = "list-group-item">Website/Blog: ${user.blog}</li>
                        <li class = "list-group-item">Location: ${user.location}</li>
                        <li class = "list-group-item">Member Since: ${user.created_at}</li>
                    </ul>
                </div>
            </div>
        </div>
        <h3 class = "page-heading mb-3">Latest Repos</h3>
        <div id = "repos"></div>
        `;
    }
    //show user repositories
    showRepos(repos) {
        let output = '';
        repos.forEach(function(repo) {
            output += `
            <div class = "card card-body mb-2">
                <div class = "row">
                    <div class "col-md-6">
                        <a href = "${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class = "col-md-6">
                        <span class = "badge badge-primary mb-1">Stars: ${repo.stargazers_count}</span>
                        <span class = "badge badge-secondary mb-1">Watchers: ${repo.watchers_count}</span>
                        <span class = "badge badge-success mb-1">Forks: ${repo.forms_count}</span> 
                    </div>
                </div>
            </div>
            `;
        });
        //output repos
        document.getElementById('repos').innerHTML = output;
    }

    //clear data when nothing is enter for the searchbar
    clearProfile() {
        this.profile.innerHTML = '';
    }
    //show alert message 
    showAlert(message, className) {
        //clear any remaining alerts
        this.clearAlert();
        //create a div
        const div = document.createElement('div');
        div.className = className;
        //text
        div.appendChild(document.createTextNode(message));
        const container = document.querySelector('.searchContainer');
        //searchbox
        const search = document.querySelector('.search');
        //insert alert
        container.insertBefore(div, search);
        //with timeout let the 1 alert message dissapear after x ms
        setTimeout(() => {
            this.clearAlert();
        }, 3000)
    }
    //clear alert message because it will log alert every tap when you enter a wrong character
    clearAlert() {
        const currentAlert = document.querySelector('.alert');
        if (currentAlert) {
            currentAlert.remove();
        }
    }
}