# txApi
FiveM exports for txAdmin. Ban players using txAdmin instead of using another ban system. 
With this you can keep all your bans in one place and make moderating way easier!

## Installation
1. Add this to your server's resources folder.
2. Create a new txAdmin user with the permissions of the exports you want to use.
3. Login to this user to set a password.
4. Enter user credentials in `config.json`
5. Start txApi before all your scripts that use it. You can do this by adding `ensure txApi` to the top of your `server.cfg`
6. Restart your server!


## Exports
- txApi:banPlayer
- txApi:getPlayer

### txApi:banPlayer
With this export your can ban players (duh). 

**Permissions Needed:**
- Ban

**Arguments:**
- Player ID
- Ban Reason (optional)

Here is an example:
```lua
exports['txApi']:txApi_banPlayer(69, "It's not your lucky day! You have been banned with txAdmin.")
```

### txApi:getPlayer
With this export your can ban players (duh). 

**Permissions Needed:**
- none

**Arguments:**
- Player License

Here is an example:
```lua
exports['txApi']:txApi_getPlayer('license:d4c3e7bb021f20b053a29d59afa8fd3933549d74')
```

## Todo
Here is a todo list of things that need to be added. Feel free to contribute by making a pull request 😊.
- Add (debug) log function
- Add more exports :)