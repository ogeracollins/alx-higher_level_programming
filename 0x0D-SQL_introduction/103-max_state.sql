-- Max temperature of each state
-- order by state name
USE hbtn_0c_0
SELECT state, MAX(value) as max_temp
FROM temperatures
GROUP BY state
ORDER BY state;
