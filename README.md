# Nortix Mail
[desc]

## Run without docker
1. Make sure that nodejs & npm is installed
2. run `npm install`
3. run `node main.js`

You can now access the website at `http://localhost`, make sure that your port 25 is accessible to receive mails

## Run with docker
1. git clone / download this repo
2. open terminal inside NortixMail folder
3. run `docker compose up -d`

In the `docker-compose.yaml` file, port `25:25` is mapped by default. It is recommended to not change this setting if you are using a reverse proxy as some of them cannot forward smtp packets

## Adding TLS / Encryption (optional)
copy your certificate and private key files into the `data` folder (usually, the file extension is `.crt` and `.key`). The file name and extension don't actually matter as Nortix Mail can automatically detect which one is which

## Is it safe if I don't setup TLS?
The current mail transfer protocol is a very old and by default it doesn't require TLS to function. This means that when another server sends an email to your server, anyone in between can theoretically read the mail if they actively try to intercept. However, this is very unlikely as the only people that has this capability is your ISP or your hosting provider. What's more important is securing the frontend site with HTTPS as it's more vulnerable to attacks especially if you use public networks.
