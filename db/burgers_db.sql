-- Create MySql burgers_db database - copy of file from MySql Workbench
CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

-- Drop table if it already exists
DROP TABLE IF EXISTS burgers;

-- SQL queries for burger table criteria
CREATE TABLE burgers (
  ID INT NOT NULL AUTO_INCREMENT,
  Burger_Name VARCHAR(150) NOT NULL,
  Devoured BOOLEAN NOT NULL,
  Date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID)
);

-- Queries to populate some starter values for the burgers table
INSERT INTO burgers (burger_name, devoured, date) VALUES ("Veggie Burger", TRUE, CURRENT_TIMESTAMP);
INSERT INTO burgers (burger_name, devoured, date) VALUES ("Hamburger", TRUE, CURRENT_TIMESTAMP);
INSERT INTO burgers (burger_name, devoured, date) VALUES ("Cheeseburger", TRUE, CURRENT_TIMESTAMP);