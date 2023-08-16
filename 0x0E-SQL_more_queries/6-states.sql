-- Create database hbtn_0d_usa
-- with sates table 
-- states has id, name attributes
-- where id is primary, unique and aut increments
CREATE DATABASE IF NOT EXISTS hbtn_0d_usa;
use hbtn_0d_usa;
CREATE TABLE IF NOT EXISTS states(id INT AUTO_INCREMENT PRIMARY KEY NOT NULL, name VARCHAR(256) NOT NULL);
