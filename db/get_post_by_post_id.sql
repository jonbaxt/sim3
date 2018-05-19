SELECT heloposts.id, helousers.username, helousers.profile_pic, heloposts.title, heloposts.img, heloposts.content FROM helousers, heloposts
Where heloposts.id=$1 AND helousers.id=heloposts.author_id;