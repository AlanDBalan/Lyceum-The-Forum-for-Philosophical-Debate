DROP DATABASE IF EXISTS lyceum_db;

CREATE DATABASE lyceum_db;

use lyceum_db;

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
    PRIMARY KEY (`id`),
     UNIQUE KEY `username` (`username`),
    UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;


CREATE TABLE IF NOT EXISTS 'philosophy'
    `id` int(11) NOT NULL AUTO_INCREMENT,
     school varchar(255) NOT NULL,
     name varchar(255) NOT NULL,
     quotes varchar(255) NOT NULL,
     description varchar(255) NOT NULL,
        PRIMARY KEY (`id`),

