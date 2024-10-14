# Nortix Mail
[desc]

## Run without docker
1. Make sure that nodejs & npm is installed
3. git clone / download this repo
4. open terminal inside NortixMail folder
5. run `npm install`
6. run `node main.js`

You can now access the website at `http://localhost`, make sure that your port 25 is accessible to receive mails

## Run with docker
1. git clone / download this repo
2. open terminal inside NortixMail folder
3. run `docker compose up -d`

In the `docker-compose.yaml` file, port 25 is exposed by default, it is recommended to not change this setting as some reverse proxy cannot forward smtp packets
