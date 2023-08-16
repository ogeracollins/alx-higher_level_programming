-- List all genres of a show
SELECT name FROM tv_genres
JOIN tv_show_genres
ON tv_genres.id = tv_show_genres.genre_id
JOIN tv_shows
ON tv_shows.id = tv_show_genres.show_id
WHERE show_id = (
	SELECT id FROM tv_shows WHERE title='Dexter'
)
ORDER BY name ASC;