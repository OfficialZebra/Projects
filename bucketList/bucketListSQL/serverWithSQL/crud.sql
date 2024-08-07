--Create a user
INSERT INTO jan_2024.users (fname, lname)
VALUES ('Daniel', 'Haynes');

SELECT * FROM jan_2024.users;

--CREATE
--Create a bucketlist item
INSERT INTO jan_2024.items(description, user_id)
VALUES ('Have time', 4);

INSERT INTO jan_2024.items(description, user_id)
VALUES ('ULTIMATE BAGEL', 4);

INSERT INTO jan_2024.items(description, user_id)
VALUES ('General Chaos', 4);

--See ALL items in items table
SELECT * FROM jan_2024.items;

--READ
SELECT * FROM jan_2024.items
WHERE user_id = 4;

--UPDATE
UPDATE jan_2024.items
SET is_complete = NOT is_complete
WHERE user_id = 4 and item_id = 9
RETURNING *;

--DELETE
DELETE FROM jan_2024.items
WHERE item_id = 21
RETURNING *;
