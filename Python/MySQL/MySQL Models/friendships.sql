SELECT users.first_name, users.last_name, friend.first_name as friend_first_name, friend.last_name as friend_last_name
FROM users
LEFT JOIN friendships ON users.id = friendships.id
LEFT JOIN users as friend on friend.id1 = friendships.friend_id1