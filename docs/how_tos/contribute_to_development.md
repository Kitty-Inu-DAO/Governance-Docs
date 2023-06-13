---
id: contribute_to_development
title: Development
tags:
  - contributing
  - development
  - how-tos
---

# Contributing Development Repositories
---------------------------------------------------------------------------

![built-with-swag](http://ForTheBadge.com/images/badges/built-with-swag.svg)
![built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)
![built-by-devs](http://ForTheBadge.com/images/badges/built-by-developers.svg)

So you're interested in contributing to Kitty Inu DAO's development? That's fantastic! We love to see community members getting involved. This guide will walk you through the steps to contribute, even if you're relatively new to coding.


## Prerequisites
Before you get started, make sure you have the following installed:

1. **Git**: Git is a version control system that we use to manage changes to our projects. You can download it from [here](https://git-scm.com/downloads).

2. **A text editor**: You'll need this to write and edit code. We recommend Visual Studio Code which you can download from [here](https://code.visualstudio.com).

## Step 1: Set Up Your Development Environment

1. **Fork the repository**: Navigate to the Kitty Inu DAO GitHub page at https://github.com/orgs/Kitty-Inu-DAO/repositories. Choose the repository you want to contribute to and click the `Fork` button in the top-right corner of the page. This will create a copy of the repository in your own GitHub account.

2. **Clone the repository**: Now you'll want to clone your forked repository to your local machine. Open your terminal (or Git Bash, if you're on Windows), navigate to where you want your local repository to live, and run:

```bash
git clone https://github.com/YourGitHubUsername/reponame.git
```

Replace `YourGitHubUsername` with your GitHub username, and `reponame` with the name of the repository you've just forked.

## Step 2: Make Your Changes

Now that you have a local copy of the code, you can start making changes. Here are a few tips:

- **Create a new branch**: It's best to create a new branch for each set of changes you make. This keeps your work organized and makes it easier for us to review your contributions. You can create a new branch and switch to it using this command:

```bash
git checkout -b branchname
```

Replace `branchname` with a short, descriptive name for your branch (like `add-new-feature`).

- **Make your changes**: Open the project in your text editor and start making changes. Remember to save your work often!

- **Test your changes**: Make sure your changes do what you expect and don't break other parts of the project.

### Step 3: Submit Your Changes

After you've made your changes, it's time to submit them for review:

1. **Stage your changes**: This tells Git which changes you want to commit. You can stage all changes in the repository by running:

```bash
git add .
```

2. **Commit your changes**: This saves your changes in Git. Run:

```bash
git commit -m "fix: A short description of the changes"
```

Replace the text inside the quotes with a description of the changes you've made.

#### Conventional Commit Guidelines

When contributing to Kitty Inu DAO, we ask that you adhere to the Conventional Commits specification. This provides an easy set of rules for creating clear commit messages that are readable and make the management of our codebase much easier.

The specification is pretty straightforward. It's based around a structured commit message format that includes a `type`, an optional `scope`, and a `subject`:

```php
<type>(<scope>): <subject>
```

- `type`: This represents the type of change that you've made. It can be one of the following:
    - `feat`: A new feature
    - `fix`: A bug fix
    - `docs`: Changes to documentation
    - `style`: Changes that do not affect the meaning of the code (white-space, formatting, etc.)
    - `refactor`: A code change that neither fixes a bug nor adds a feature
    - `perf`: A code change that improves performance
    - `test`: Adding missing tests or correcting existing tests
    - `build`: Changes that affect the build system or external dependencies
    - `ci`: Changes to our CI configuration files and scripts
    - `chore`: Other changes that don't modify src or test files
    - `revert`: Reverts a previous commit

- `scope` (OPTIONAL): This is optional and can be anything specifying the place of the commit change.
- `subject`: This is a brief description of the change, written in the imperative, present tense.

Here are some examples of conventional commits:

- `feat(wallet): add ability to display balance`
- `fix: correct error handling when transaction fails`
- `docs(readme): update installation instructions`

You should also ensure your commits adhere to the following guidelines:
- Use the present tense ("add feature" not "added feature").
- Use the imperative mood ("move cursor to..." not "moves cursor to...").
- Limit the first line to 72 characters or less.
- Reference issues and pull requests liberally after the first line.
- Consider starting the commit message with an applicable emoji to identify the type of work you have done.

This makes the repository maintainable and easy to understand, and it allows us to generate a changelog directly from our commits.

3. **Push your changes**: This uploads your changes to GitHub. Run:

```bash
git push origin branchname
```

Remember to replace `branchname` with the name of your branch.

4. **Create a pull request**: Navigate to the GitHub page for your forked repository and click `New pull request`. Make sure the base repository is Kitty-Inu-DAO/reponame and the branch is the one you've just pushed. Click `Create pull request`, then add a title and a description explaining the changes you've made.


And that's it! You've just made your first contribution to Kitty Inu DAO's development. A member of our team will review your changes and merge them into the main codebase if everything looks good.

Remember, contributing to open source projects like this is a process of continuous learning. Don't be discouraged if you make mistakes. Just keep going, ask for help when you need it, and remember to have fun!

Looking forward to seeing your contributions!

