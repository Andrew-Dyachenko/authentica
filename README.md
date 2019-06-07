# Authentica love
Performed page

## Development
### Cloning
To start using this project, please clone it to your platform.
Open a terminal `Ctrl + T` (for Linux) and go to the folder where all your Internet projects are stored. for example: `cd /var/www`.
Clone this repository to the projects folder.

```bash
git clone https://github.com/Andrew-Dyachenko/authentica.git
```
or
```bash
git clone git@github.com:Andrew-Dyachenko/authentica.git
```

### Deploy
Go to the cloned project folder
```bash
cd authentica/
```
Install the required package dependencies
> It is assumed that you have the package manager Yarn installed, otherwise you can always roll back to using NPM
```bash
yarn
```

### Runing
After completing the installation of the necessary dependencies, you can run the project build. The Server-launched page can be seen at [http://localhost:1234](http://localhost:1234)
```bash
yarn start
```

### Preview
![Authentica love desktop preview](/assets/images/preview--desktop.png)

### Building
To finally build project run
```bash
yarn build
```

### Fixing
#### SCSS
If you encounter SCSS style error warnings in the console, use the `yarn scss-fix` command to fix most errors.

#### Javascript
Otherwise to fix JavaScript use the `yarn js-fix`
