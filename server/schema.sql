CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id INTEGER,
  username INTEGER,
  message TEXT,
  lobby INTEGER,
  PRIMARY KEY (id)
);

CREATE TABLE lobbies (
  id INTEGER PRIMARY KEY,
  name TEXT
);

-- CREATE TABLE users (
--   id INTEGER,
--   name TEXT
-- );

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

