-- Create MySql burgers_db database
CREATE DATABASE IF NOT EXISTS burgers_db;
USE burgers_db;

-- Drop table if it already exists
DROP TABLE IF EXISTS burgers;

-- SQL queries for burger table criteria
CREATE TABLE burgers (
  ID INT NOT NULL AUTO_INCREMENT,
  Burger_Name VARCHAR(150) NOT NULL,
  Devoured BOOLEAN DEFAULT false,
  Date TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ID)
);


