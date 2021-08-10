CREATE DATABASE IF NOT EXISTS blog;

USE blog;

CREATE TABLE IF NOT EXISTS users (
  user_id SERIAL,
  username VARCHAR(31) NOT NULL,
  password TEXT NOT NULL,
  salt TEXT NOT NULL,
  email VARCHAR(255) NOT NULL,
  firstName VARCHAR(30) DEFAULT NULL,
  lastName VARCHAR(30) DEFAULT NULL,

  UNIQUE(email),
  UNIQUE(username),
  PRIMARY KEY (user_id)
);

CREATE TABLE IF NOT EXISTS posts (
  post_id SERIAL,
  user_id INT NOT NULL,
  title VARCHAR(127) NOT NULL,
  postItself VARCHAR(255) NOT NULL,

  PRIMARY KEY (post_id)
);

CREATE SCHEMA IF NOT EXISTS posts_schema
  CREATE TABLE IF NOT EXISTS posts (
    post_id SERIAL,
    user_id INT NOT NULL,
    title VARCHAR(50) NOT NULL,
    subtitle VARCHAR(255) NOT NULL,
    content TEXT,

    PRIMARY KEY (post_id)
  )
  CREATE TABLE IF NOT EXISTS likes (
    like_id SERIAL,
    post_id INT NOT NULL,
    user_id INT NOT NULL,

    PRIMARY KEY (like_id),

    CONSTRAINT fk_post
      FOREIGN KEY(post_id)
        REFERENCES posts(post_id)
  )
  CREATE TABLE IF NOT EXISTS claps (
    clap_id SERIAL,
    post_id INT NOT NULL,
    user_id INT NOT NULL,
  );

CREATE TABLE IF NOT EXISTS comments (
  id INT NOT NULL AUTO_INCREMENT,
  userId INT NOT NULL,
  postID INT NOT NULL,
  content VARCHAR(255),
  likes INT,
  dislikes INT,
  PRIMARY KEY (id)
);

ALTER TABLE posts ADD INDEX title;