<h1 align="center">
  KeePass Telegram DBackup
</h1>

<br>

<p align="center">
  <b>A simple node application for recursively backup your KeePass Database file directly to your telegram built with
  </b>
  <br>
</p>

<br/>

<p align="center">
  <img width="200px" src="https://res.cloudinary.com/ydevcloud/image/upload/v1658183164/yassi/mgkhs4y9ydmoyjyozulf.svg" align="center" alt="nodejs" />
</p>

<br>

If you are using [KeePass](https://keepass.info/) or [KeePassXC](https://keepassxc.org/) this script is simply backup your `Database File` to your telegram account, it's will backup your db every week.

![⚙️](https://res.cloudinary.com/ydevcloud/image/upload/v1656874522/fmfktytvymbnnc0fg4zz.png)

## ❯ Usage

Requires Node.js 15.0 or higher download & install for [Windows](https://nodejs.org/en/download/) or [Linux](https://nodejs.org/en/download/)

##### Creating new telegram bot with BotFather

**All your database backup files will be saved in your bot chat**

The following steps describe how to create a new bot:

- Contact `@BotFather` in your Telegram messenger
- To get a token, send BotFather a message that says `/newbot`
- When asked for a name for your new bot choose something that ends with the word `bot`. For example, `my_test_bot`
- If your chosen name is available, BotFather will send you a token
- Save the token

Once you've cloned the project and installed dependencies with `npm install` (or `pnpm install` or `yarn`)

- Rename `config.example.json` to `config.json` and fill your configs :

For the `chat_id` Contact `@userinfobot` in your Telegram messenger and send a message and it's will send your infos including the `chat_id`

```json
{
  "token": "your bot token",
  "apiUrl": "https://api.telegram.org/bot",
  "db_path": "your KeePass database file path",
  "chat_id": "your chat id"
}
```

start a development server:

```sh
# start the dev server
npm start
```

#### Installing Application as a Service

##### For Windows

Just run this command and accept UAC prompts and it's install as a Windows Service running in the background

```sh
npm run install-win
```

If your want to uninstall the service just run this command:

```sh
npm run uninstall-win
```

##### For Linux

Using the forever module package (Requires Node.js to be installed)

```sh
npm install forever -g
```

```sh
# start the script
forever start app.js
```

<br>

![🙌](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/connect.png)

## ❯ About

#### Author

**Ysn4Irix**

- [GitHub Profile](https://github.com/Ysn4irix)
- [Instagram Profile](https://instagram.com/ysn.irix)

<br>

![📃](https://raw.githubusercontent.com/ahmadawais/stuff/master/images/git/license.png)

## ❯ License

Copyright © 2022-present, [Ysn4Irix](https://github.com/Ysn4Irix).
Released under the [MIT License](LICENSE).
