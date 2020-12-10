# Notes Editor Application

Here you will find a simple example project made with Angular and Ionic. This app is a simplified
replication of the common notes editors that can be found in cellphones and computers. Here you
will be able to create, edit, delete and review notes. All notes consists of a title and body.

## Building dependencies

To build the repository it was used the following dependencies **globally**:

- Nodejs (12.16.1)
- Angular CLI (10.0.8)
- Ionic (5.4.16)

If you don't have Ionic installed, run the following command (without "sudo" if you are using Windows):

``` bash
# Install Ionic globally
sudo npm install -g ionic
```

To facilitate the development of the notes searching process it was used an external dependency:

- ng2-search-filter (0.5.1)

Refer to Angular and Ionic's documentation for further information about the installation process if needed.
[Angular website](https://angular.io/guide/setup-local).
[Ioninc website](https://ionicframework.com/docs/intro/cli).

## Build process

Once you have all the dependencies installed you can step in the main directory of the repository and install
all the project's dependencies:

``` bash
# install and link project dependencies
npm install
```

Now, to start the application in your browser run:

``` bash
# Launch application in the browser
ionic serve
```

## Application Interface

Basically, the application has 2 tabs. One for review and manage the existing notes and the other one for creating
new notes. The tab buttons are located in the bottom of the screen.

### Add new note

Click in the second tab with the label "Add Note". It will take you to a page where you only have to put the Title and Body of the note you want to create. Then click the "Add" button. In this screen you can create as many Notes as you want.

### Review, Edit and Delete

Click in the first tab located in the bottom bar with the label "My Notes". There you will find all the created
notes. In the top of the notes list you will find a Search bar, there you can put the text you want to search
and it will filter the notes dynamically. At the right of every Note you will find 2 icons. One is for review
and edit that note, and the other is to delete it. After editing your note just click the "Save" button and it
will take you back to the "My notes" page.
