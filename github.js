class Github {
    constructor() {
        //integrate OAUTH keys from Github
        this.client_id = /*enter here client auth code*/
        this.client_secret = /*enter here app secret auth code*/
        this.repos_count = 5;
        this.repos_sort = 'created: asc';
    }
    async getUser(user) {
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();
        const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}$sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const repos = await repoResponse.json();
        return {
            //profile:profile and repos:repos
            profile,
            repos
        }
    }
}