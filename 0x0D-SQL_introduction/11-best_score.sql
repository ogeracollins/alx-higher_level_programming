-- Select the best records
use $mysql;
SELECT score, name ORDER BY score ASC WHERE score >= 10;
