-- List all cities contained in the database
SELECT cities.id as city_id, cities.name as name, states.name as name
FROM cities
JOIN states
ON states.id = cities.state_id
ORDER BY city_id;

