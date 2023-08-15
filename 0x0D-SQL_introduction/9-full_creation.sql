-- Creates a second table
use hbtn_0c_0;
CREATE TABLE IF NOT EXISTS second_table (
	id int,
	name varchar(256),
	score int
);
INSERT INTO second_table (id, name, score) VALUES (
	(id=1, name="John", score=10),
	(id=2, name="Alex", score=3),
	(id=3, name="Bob", score=14),
	(id=4, name="George", score=8)
);
