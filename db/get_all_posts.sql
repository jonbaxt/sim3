SELECT heloposts.id, helousers.username, helousers.profile_pic, heloposts.title, heloposts.img, heloposts.content FROM helousers, heloposts
Where HELOUSERS.id=heloposts.author_id;