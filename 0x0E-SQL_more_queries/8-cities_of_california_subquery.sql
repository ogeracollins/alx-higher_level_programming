-- Lists all cities in california from the database hbtn_0d_usa
use hbtn_0d_usa;
SELECT * FROM cities WHERE state_id=(
	SELECT id FROM states WHERE name="California"
);
