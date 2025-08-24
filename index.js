const fs = require('fs')
const followers = require('./followers_1.json')
const following = require('./following.json')

const main = () => {
  const yourFollowers = followers.map(item => item.string_list_data[0].value)
  const yourFollowing = following.relationships_following.map(
    item => item.string_list_data[0].value
  )

  const notFollowingBack = yourFollowing.filter(
    user => !yourFollowers.includes(user)
  )

  fs.writeFileSync(
    'notFollowback.txt',
    JSON.stringify(notFollowingBack, null, 2),
    'utf-8'
  )
}

main()
