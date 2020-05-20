class App {
  constructor() {
    this.repositories = [];

    this.formEl = document.getElementById('repo-form');

    this.registerHandlers();
  }
  registerHandlers() {
    this.formEl.onsubmit = event => this.addRepository(event);
  }

  addRepository() {
    event.preventDefault();
    this.repositories.push({
      name: 'https://mafda.github.io/',
      description: 'multimedia engineer. phd student. augmented reality, machine learning, digital media, and research',
      avatar_url: 'https://avatars0.githubusercontent.com/u/7698160?v=4',
      html_url: 'https://github.com/mafda',
    });
    console.log(this.repositories);
  }
}

new App();