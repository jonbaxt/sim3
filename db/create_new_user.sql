INSERT INTO helousers
(username, password, profile_pic)
VALUES
($1, $2, $3);

SELECT * FROM helousers
WHERE username=$1 AND password=$2;