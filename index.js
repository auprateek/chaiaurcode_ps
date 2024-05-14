const express = require('express')
const app = express()
 
require('dotenv').config()

const port = process.env.PORT

const git = {
  "login": "auprateek",
  "id": 45218136,
  "node_id": "MDQ6VXNlcjQ1MjE4MTM2",
  "avatar_url": "https://avatars.githubusercontent.com/u/45218136?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/auprateek",
  "html_url": "https://github.com/auprateek",
  "followers_url": "https://api.github.com/users/auprateek/followers",
  "following_url": "https://api.github.com/users/auprateek/following{/other_user}",
  "gists_url": "https://api.github.com/users/auprateek/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/auprateek/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/auprateek/subscriptions",
  "organizations_url": "https://api.github.com/users/auprateek/orgs",
  "repos_url": "https://api.github.com/users/auprateek/repos",
  "events_url": "https://api.github.com/users/auprateek/events{/privacy}",
  "received_events_url": "https://api.github.com/users/auprateek/received_events",
  "type": "User",
  "site_admin": false,
  "name": null,
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": null,
  "public_repos": 9,
  "public_gists": 0,
  "followers": 0,
  "following": 0,
  "created_at": "2018-11-21T01:01:52Z",
  "updated_at": "2024-05-12T23:26:31Z"
}


app.get('/', function (req, res) {
  res.send('Hello World from pRateek')
})

app.get('/github', function (req, res) {
  res.json(git)
})

app.get('/twitter', (req, res) =>{
    res.send( `Port active ${port}`)
  })
app.listen(port, (req,res)=>{
    console.log(`Port active ${port}`)
})