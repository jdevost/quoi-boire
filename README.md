# quoi-boire

*Search tool for booze. I am intentionally not mentioning any company names so this project isn't easily found by other candidates. (projects are public on 'free' GitHub...)*

## Setup

Requirements: You need Grunt. The project was built and tested on Google Chrome. Use other browsers at your own risks.

After cloning this repository on your machine, you need to build the project using these commands:

- `npm install`
- `grunt build`

This project is meant to be served from a web server. I use Apache. Add this config to your `/etc/apache2/httpd.conf`
```
Alias /quoi-boire [path/to/repository]/dist
<Directory "[path/to/repository]/dist">
    Options Indexes FollowSymLinks MultiViews
    Require all granted
</Directory>
```
Then you will be able to access it from your machine at `http://localhost/quoi-boire`.

### Token required
To use the Search API, you need a token. You will get an alert if it's not set up. The project expect the token to be stored in your cookies. Once you have accessed your page for the first time, open the Browser Console and add your token to the cookies:
`document.cookie = "coveoToken=YOUR_TOKEN";`

You also need the token for the unit tests, as follow: `grunt tests --token=YOUR_TOKEN`
