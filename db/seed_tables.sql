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
titele VARCHAR(45),
img text,
content text,
author_id INTEGER,
FOREIGN KEY (author_id) REFERENCES helousers(id)
);

INSERT INTO helousers
(username, password, profile_pic)
VALUES
('0', '0', 'https://robohash.org/10'),
('Bobby Bob', '12345', 'https://robohash.org/fa'),
('Billy', '1', 'https://robohash.org/1'),
('Percy', '0', 'https://robohash.org/2'),
('Harry', '3', 'https://robohash.org/3'),
('Cad', '4', 'https://robohash.org/4'),
('Crill', '5', 'https://robohash.org/5'),
('Cream', '6', 'https://robohash.org/6');

SELECT * FROM helousers;