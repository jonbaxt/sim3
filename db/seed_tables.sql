DROP TABLE IF EXISTS heloposts;
DROP TABLE IF EXISTS helousers;


CREATE TABLE helousers(
id SERIAL PRIMARY KEY,
username VARCHAR(20),
password VARCHAR(20),
profile_pic text
);

CREATE TABLE heloposts(
id SERIAL PRIMARY KEY,
title VARCHAR(45),
img text,
content text,
author_id INTEGER,
FOREIGN KEY (author_id) REFERENCES helousers(id)
);

INSERT INTO helousers
(username, password, profile_pic)
VALUES
('Sonic', '6', 'https://yt3.ggpht.com/a-/AJLlDp0vgpI9XdJWkiDsiaMpi5d5-Z8K-yYazESBjg=s900-mo-c-c0xffffffff-rj-k-no'),
('Rick', '0', 'https://res.cloudinary.com/teepublic/image/private/s--7_W9p0IL--/t_Preview/b_rgb:c8e0ec,c_limit,f_jpg,h_630,q_90,w_630/v1465901962/production/designs/543171_1.jpg'),
('Bobby Bob', '0', 'https://robohash.org/fa'),
('Billy', '1', 'https://robohash.org/1'),
('Percy', '0', 'https://robohash.org/2'),
('Harry', '3', 'https://robohash.org/3'),
('Cad', '4', 'https://robohash.org/4'),
('Crill', '5', 'https://robohash.org/5'),
('Cream', '6', 'https://robohash.org/25'),
('SadMan', '6', 'https://robohash.org/49'),
('Greg', '0', 'https://robohash.org/30'),
('fred', 'f', 'https://robohash.org/31'),
('Bob', 'w', 'https://robohash.org/33'),
('ed', 'a', 'https://robohash.org/70'),
('Eddy', 'q', 'https://robohash.org/90');




INSERT INTO heloposts
(title, img, content, author_id)
VALUES
('Chill Bra', 'https://www.atlantisbahamas.com/media/Things%20To%20Do/Water%20Park/Beaches/Hero/Experiences_Beach.jpg', 'Just stay chill always', 3),
('Yetis', 'https://www.toysrus.com/static/livecode/aplus/57915946/animal-planet-yeti-with-ice-throwing-action-playset-57915946-02.jpg', 'So scary', 5),
('Pancakes', 'https://static01.nyt.com/images/2017/03/24/dining/24COOKING-CLASSICPANCAKES/24COOKING-CLASSICPANCAKES-articleLarge.jpg', 'Love pancakes', 3),
('Dr. Robotnik, Hail Our Dictator', 'https://vignette.wikia.nocookie.net/sonic/images/b/b5/Robotnik_57.png/revision/latest?cb=20101209061522', 'Just Join Him, you will never regret helping him fulfill his destiny of always finding the hedgehog and destroying him. So do it now!', 5),
('Petey', 'http://static.wixstatic.com/media/265461_d15ca239ad6f45bab4932f1af9ab9744.jpg/v1/fill/w_253,h_314,al_c,q_80,usm_0.66_1.00_0.01/265461_d15ca239ad6f45bab4932f1af9ab9744.webp', 'This is some dude I saw on the way to the park. I was like word. What is up with this guy??? Am I right?', 7),
('Little Mouse I Found', 'https://static1.srcdn.com/wordpress/wp-content/uploads/2017/06/Crying-Pikachu-Pokemon.jpg', 'You will cry just like this mouse I found on the way to the doughnut shop Bro. It will change you forever.', 4),
('Little Mouse in the END', 'https://i.amz.mshcdn.com/FhiPSR8qiGHLRiPdiwhrPeY7ShY=/1200x630/2017%2F07%2F11%2F7b%2F9b0b287aef5e40cbbd8aeb5fbe303454.d397b.jpg', 'Update on the Mouse: I took him, ground him up and ate him with my ice cream. It was delicious.', 4),
('SOMEONE HELP MY COMPUTER!', 'https://img.purch.com/o/aHR0cDovL3d3dy5sYXB0b3BtYWcuY29tL2ltYWdlcy93cC9wdXJjaC1hcGkvaW5jb250ZW50LzIwMTgvMDQvYnNvZF93aW5kb3dzXzgtNTQ4eDQwMC5wbmc=', 'HEEELP!! MY COMPUTER IS DYING!! I DONT KNOW HOW TO FIX IT!! I WANT TO SEE MAY STUFF!!', 1),
('NOOOOOO!!! COMPUTER!!!', 'https://i.ytimg.com/vi/5-CYF2Oy9GU/maxresdefault.jpg', 'NOBODY ANSWERED MY LAST POST! MY COMPUTER IS BURNING! HELP! Wait?? How am I posting on this board?', 1),
('Jeffrey Going on a Date','http://toralife.com/wp-content/uploads/2017/06/date-7-reasons-to-include-this-fruit-on-your-menu-right-now.jpg', 'Jeff needs a date!!! Help him please!', 3),
('Fake Saved BY THE BELL!', 'https://i0.heartyhosting.com/okmagazine.com/wp-content/uploads/2013/09/baysidethemusical.jpg?ssl=1', 'Fake Saved by the Bell??!!!? What is going on? That is not the cast? Somebody please tell me what is going on?', 3),
('So Old!!!', 'https://nextstop.blob.core.windows.net/article-images/jimmy-fallon-saved-by-the-bell-reunion-bayside-high.jpg', 'Like right? And they still playing people from the 80s? Weird Bro.', 1);

-- SELECT * FROM helousers;
-- SELECT * FROM heloposts;