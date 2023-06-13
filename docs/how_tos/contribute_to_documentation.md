---
id: contribute_to_documentation
title: Documentation
tags:
  - contributing
  - documentation
  - how-tos
---


# Contributing to DAO Documentation
---------------------------------------------------------------------------
![markdown](https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white)
![react](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![IPFS](https://camo.githubusercontent.com/7c4b40ea2a014f254ff9ce7347f32ba3493f7b9bf35a4655e0b22a9662bcb152/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d4950465326636f6c6f723d323232323232266c6f676f3d49504653266c6f676f436f6c6f723d363543324342266c6162656c3d)
![ENS](https://img.shields.io/badge/ENS-20232A?style=for-the-badge&logo=ethereum&logoColor=61DAFB)

This section is designed to guide you through the process of contributing to our repository. We believe in the power of collective intelligence and the spirit of collaboration that forms the core ethos of our decentralized organization. Whether you're a developer, content creator, or a passionate Kitty Inu enthusiast, your contributions play a vital role in shaping the future of our platform.

## Why contribute, you ask? 

It's simple. By helping to refine and expand our documentation, you are simplifying the path for others to understand and engage with our community. Each edit, addition, or suggestion helps enhance our shared understanding of the Kitty Inu DAO and brings us a step closer to our common goals.

This guide will walk you through the process of contributing to our documentation repository, regardless of your prior experience with such tasks. Let's dive in and explore how you can lend a paw to the Kitty Inu DAO by enriching our repository. Prepare yourself for an exciting journey through the heart of our community's knowledge base.

## Before You Start

You will need to have:

1. A [GitHub account](https://github.com/join)
2. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed on your local machine.

## Understanding the Repository Structure

The main directory where all our documents are stored is the `docs` directory. To understand how the documents and categories are arranged, here's a snippet outline of the repository's structure :

```
docs
├── brand_kit
│   ├── color_palette.md
│   ├── font_guidelines.md
│   └── logos.md
├── dao_architecture
│   ├── governance_token.md
│   └── treasury.md
├── governance_documents
│   ├── bylaws.md
│   └── kittykommittee.md
├── how_tos
│   └── docs_website.md
└── introduction
    ├── intro.md
    └── why_decentralization.md
```


In the above structure, each directory represents a category, and each file within a directory represents a document or page under that category.

## Making Contributions

To make contributions, you will need to:

1. **Fork the Repository**: This creates a copy of the repository on your GitHub account that you can make changes to.

2. **Clone the Repository**: This downloads the copy of the repository on your GitHub account to your local machine so you can make changes.

3. **Create a New Branch**: This gives you a unique workspace for your changes.

4. **Make Your Changes**: Here you add, modify, or delete content.

5. **Commit Your Changes**: This saves your changes with a message that describes what you have done.

6. **Push Your Changes**: This uploads your changes to your GitHub account.

7. **Open a Pull Request**: This sends your changes to us for review and approval.

Let's break down each step:

### 1. Fork the Repository

1. Visit the [official repository](https://github.com/Kitty-Inu-DAO/Governance-Docs/).
2. Click on the "Fork" button at the top right corner of the page.

### 2. Clone the Repository

1. Visit your GitHub account to find the forked repository.
2. Click on the "Code" button to reveal the repository's URL.
3. Copy the URL.
4. Open Git Bash or your terminal.
5. Navigate to the location where you want the repository files to be stored on your local machine using the `cd` command. For example, `cd Documents`.
6. Type `git clone`, paste the URL you copied, and press enter:

```bash
git clone https://github.com/YourUsername/Governance-Docs.git
```
7. Navigate into the cloned repository:

```bash
cd Governance-Docs
```

### 3. Create a New Branch

Create a new branch using the git checkout command:

```bash
git checkout -b your-branch-name
```

Replace your-branch-name with a name that describes the changes you want to make. For example, add-new-document.

### 4. Make Your Changes

Our official recommendation is to download and use [Visual Studio Code](https://code.visualstudio.com/download/) for documentation changes. However, quick changes can be made in a text editor so instructions for both are provided. 

#### Make Your Changes Using Visual Studio Code

1. Open Visual Studio Code.
2. Click on 'File' in the menu bar, then 'Open Folder'.
3. Navigate to the docs directory of the cloned repository and select the folder.
4. The project structure will appear in the left sidebar. You can click to expand directories and select the file you wish to edit.

#### Make Your Changes Using a Text Editor

1. Navigate into the docs directory:

```bash
cd docs
```

2. Use a text editor to open and edit the file you want to change. For example:

```
nano dao_architecture/governance_token.md
```

on MacOS, you can use the default text editor by doing:

```
open dao_architecture/governance_token.md
```

3. To add a new file, you can use the `touch` command followed by the filename:

```
touch new_file.md
```

4. To add a new directory, you can use the `mkdir` command followed by the directory name:

```
mkdir new_directory
```

5. Open your new file in your text editor and add content.

#### Markdown Files Structure

Each markdown file must have a specific structure for the document to be properly integrated into our system. Here is a typical structure of our markdown files:

```markdown

---
id: governance_token
title: Kitty ERC20 Contract
tags:
  - contract
  - token
  - architecture
---

# Kitty Inu DAO Governance Token

...
```

The three parts are:

1. **id**: This is the unique identifier for the document and should be the same as the filename without the .md extension.
2. **title**: This is the title of the document as it will appear on the website.
3. **tags**: These are keywords that are related to your document. They help with categorization and search.

Below the --- line, you can start writing the content of your document.

#### Updating the Sidebar

To add your new page to the sidebar or to create a new category with your page, edit the `sidebar.js` file in the root of the repository. Here's a snippet from `sidebar.js`:

```js
module.exports = {
  sidebar: [
    {
      type: 'category',
      label: 'DAO Architecture',
      collapsed: false,
      items: [
        {
          type: 'doc',
          id: 'dao_architecture/doc-treasury',
        },
        {
          type: 'doc',
          id: 'dao_architecture/doc-contract',
        }
      ],
    },
    // Add more categories or documents here
  ],
};
```

In the sidebar configuration, a category is defined by a `type: 'category'` object, and documents within the category are defined in the `items` array. To add a new document, add a new object to the `items` array:

```js
{
  type: 'doc',
  id: 'category_name/document_name',
}
```

Replace `category_name` with the name of the category the document is in and `document_name` with the id of the document (filename without `.md`).

### 5. Commit Your Changes

Once you've made your changes, use the `git add` command to stage the changes and the `git commit` command to save the changes:

```bash
git add .
git commit -m "feat: Add new document to DAO Architecture section"
```

We follow conventional commit semantics, so make sure your commit messages reflect this.

### 6. Push Your Changes


```bash
git push origin your-branch-name
```

Replace `your-branch-name` with the name of your branch.

### 7. Open a Pull Request

Finally, navigate to your fork on GitHub, click on "Pull requests", then click on "New pull request". Make sure the base repository is Kitty-Inu-DAO/Governance-Docs and the base branch is `dev`.

And that's it! You've successfully made a contribution to the Kitty Inu DAO documentation. We look forward to reviewing your changes. Thank you for participating in the growth and development of Kitty Inu DAO!