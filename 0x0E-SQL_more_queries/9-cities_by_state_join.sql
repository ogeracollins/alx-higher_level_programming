-- List all cities contained in the database
use hbtn_0d_usa;
SELECT cities.id as city_id, cities.name as city_name, states.name as state_name
FROM cities
JOIN states
ON states.id = cities.state_id
ORDER BY city_id;

