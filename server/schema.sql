CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER NOT NULL AUTO_INCREMENT,
  userId  INTEGER(11) NOT NULL,
  text  varchar(255) NOT NULL,
  roomname varchar(20),
  PRIMARY KEY (id)
);

-- CREATE TABLE lobbies (
--   id INTEGER PRIMARY KEY AUTO_INCREMENT,
--   roomname varchar(255) NOT NULL
-- );

CREATE TABLE users (
  id INTEGER NOT NULL,
  username varchar(40) NOT NULL,
  PRIMARY ID (id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

