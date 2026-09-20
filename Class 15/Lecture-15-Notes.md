# 📖 Class 15: Git & GitHub

## Introduction

In this class, we learned the basics of **Git** and **GitHub**, how to install Git, configure it, create a GitHub account and repository, clone a repository, and use Git with VS Code.

---

# What is Git?

**Git** is a version control system that helps developers track changes in their projects.

It allows us to:

- Track changes
- Save different versions of our code
- Go back to previous versions
- Work on projects safely
- Connect our local projects with GitHub

---

# What is GitHub?

**GitHub** is an online platform where we can store and manage Git repositories.

Developers use GitHub to:

- Store projects online
- Share code
- Collaborate with other developers
- Manage repositories
- Build a professional developer portfolio

---

# Git vs GitHub

| Git | GitHub |
|---|---|
| Version control system | Online platform |
| Runs on our computer | Runs on the internet |
| Tracks changes | Stores Git repositories online |
| Works locally | Provides remote repositories |

### Simple Example

```text
Git
↓
Tracks our project changes

GitHub
↓
Stores our project online

```

# 1️⃣ Installing Git

First, we need to install Git on our computer.

**Git** can be installed on:

- Windows
- macOS
- Linux

After installing Git, we can use it through:

- Git Bash
- Command Prompt
- PowerShell
- VS Code Terminal


# 2️⃣ Check Git Installation

After installing Git, we should check whether Git is working correctly.

Open a terminal and run:

```css

git --version

```


If Git is installed correctly, it will display the installed version.

Example:
```css

git version 2.55.0.windows.4

```

This confirms that Git is installed and available in the terminal.

# 3️⃣ Configure Git

Before using Git, we should configure our name and email.

These details are associated with the commits we create.

**Configure Username**
```css
git config --global user.name "Your Name"
```
Example:

```css
git config --global user.name "Muzamilhussaini"
```
**Configure Email**
```css
git config --global user.email "your-email@example.com"
```
Example:
```css
git config --global user.email "your-email@example.com"
```

It is recommended to use the email associated with our GitHub account.

# 4️⃣ Check Git Configuration

We can check our Git configuration using:
```css
git config --global --list
```

It will display our configured information.

Example:
```text
$ git config --global --list
user.name=Muzamilhussaini
user.email=your-email@example.com
credential.helper=store
```

# 5️⃣ Create a GitHub Account

To use GitHub, we first need a GitHub account.

**Go to:**

https://github.com/

Then:

- Create an account.
- Enter your email.
- Create a username.
- Set a password.
- Complete the required verification.
- Log in to GitHub.

After creating the account, we can create and manage repositories.

# 6️⃣ Create a Repository on GitHub

A repository, or repo, is a place where a project and its files are stored.

To create a repository:

- Log in to GitHub.
- Click on Repositories
- Click the + button.
- Select New repository.
- Enter the repository name.
- Select the repository visibility.
- Click Create repository.

For example:

Repository Name:
```text
SMIT-Modern-Web-Application-Development
```

After creating the repository, GitHub provides a repository URL.

Example:
```text
https://github.com/USERNAME/REPOSITORY.git
```

We will use this URL to clone the repository to our local computer.

# 7️⃣ What is Git Clone?

git clone is used to copy an existing GitHub repository to our local computer.

The basic syntax is:
```text
git clone "URL"
```

Example:
```css
git clone "https://github.com/USERNAME/REPOSITORY.git"
```

After running this command, Git downloads the repository to our computer.

# 8️⃣ Clone the Repository

First, open the terminal in the location where we want to keep our project.

Then run:
```text
git clone "https://github.com/USERNAME/REPOSITORY.git"
```

After cloning:
```text
GitHub Repository
       ↓
    git clone
       ↓
Local Computer
```

Now we have a local copy of the GitHub repository.

# 9️⃣ Open the Repository in VS Code

After cloning the repository, open the project folder in VS Code.

We can open it directly from the terminal using:

code .

Or we can:

- Open VS Code.
- Click File → Open Folder.
- Select the cloned repository folder.

# 🔟 VS Code Source Control

VS Code has a built-in Source Control feature that allows us to work with Git using a graphical interface.

We can find it on the left sidebar.
```text
VS Code
   ↓
Source Control
   ↓
Changes
```

When we create or modify files, VS Code automatically detects the changes.

# 1️⃣1️⃣ Make Changes to the Project

Now we can create a new file or modify an existing file.

For example, create:
```text
index.html
```

Or modify an existing file.

After making changes, VS Code will show the changed files inside the Source Control panel.

# 1️⃣2️⃣ Add Changes

Before committing our changes, we need to add them to the Staging Area.

In VS Code:

- Open Source Control.
- Find the changed file.
- Click the + button next to the file.
```text
The process is:

Modified File
      ↓
     Add
      ↓
Staged Changes
```

# 1️⃣3️⃣ Commit Changes

After adding the files, we create a commit.

A commit saves a version of our changes in Git.

In VS Code:

- Enter a commit message.
- Click Commit.

Example:
```text
Add Class 15 Git and GitHub notes
```

The command-line equivalent is:
```css
git commit -m "Add Class 15 Git and GitHub notes"
```

### Why do we write a commit message?

A commit message tells us what changes were made.

For example:

- Add homepage
- Fix navbar
- Update README
- Add CSS styles

Good commit messages make it easier to understand the history of a project.

# 1️⃣4️⃣ Push Changes to GitHub

After committing our changes, we need to send them from our local computer to GitHub.

This process is called pushing.

In VS Code:

- Open Source Control.
- Click the three dots ....
- Select Push.
```text
The process is:

Local Repository
       ↓
     Commit
       ↓
      Push
       ↓
GitHub Repository
```

After pushing, the changes will appear on GitHub.

# 1️⃣5️⃣ Complete Workflow in VS Code

The complete process we learned is:
```text
Create GitHub Repository
          ↓
       Copy URL
          ↓
      git clone
          ↓
      Local Computer
          ↓
      Open VS Code
          ↓
     Make Changes
          ↓
      Source Control
          ↓
         Add
          ↓
       Commit
          ↓
        Push
          ↓
        GitHub
```
# 1️⃣6️⃣ Complete Workflow Using Commands

The same workflow can also be performed using Git commands.

**Clone the repository**
```css
git clone "URL"
```
Check changes
```css
git status
```
Add changes
```css
git add .
```
Commit changes
```css
git commit -m "Your commit message"
```
Push changes
```css
git push
```

# Important Git Commands
Command	Purpose
```css
git --version	Check Git version

git config --global user.name	Set Git username

git config --global user.email	Set Git email

git config --global --list	View Git configuration

git clone URL	Clone a repository

git status	Check repository status

git add .	Stage changes

git commit -m "message"	Create a commit

git push	Upload commits to GitHub
```
## Conclusion

In this class, we learned the basic workflow of **Git** and **GitHub**.

We learned how to:

Install Git
- Check the Git version
- Configure Git username and email
- Create a GitHub account
- Create a GitHub repository
- Copy the repository URL
- Clone the repository
- Open it in VS Code
- Use VS Code Source Control
- Add changes
- Commit changes
- Push changes to GitHub

The basic workflow is:

Clone → Edit → Add → Commit → Push

**Git** and **GitHub** are essential tools for modern software development because they help developers manage, track, and share their code.