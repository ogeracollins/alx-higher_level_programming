-- List records with same score
SELECT COUNT(score) as score, score as number FROM second_table GROUP BY score DESC;
