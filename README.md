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

In the `docker-compose.yaml` file, port `25:25` is mapped by default. It is recommended to not change this setting if you are using a reverse proxy as some of them cannot forward smtp packets

## Adding TLS / Encryption (optional)
1. copy your certificate and private key files into the `data` folder (usually, the file extension is `.crt` and `.key`). The file name and extension don't actually matter as Nortix Mail can automatically detect which one is which

## Is it safe if I don't setup TLS?
Mail transfer protocol by default doesn't require TLS,
