CREATE DATABASE IF NOT EXISTS vintage;

USE vintage;

CREATE TABLE IF NOT EXISTS BIKE (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  userid int NOT NULL,
  bikename varchar(200) NOT NULL,
  makeid int NOT NULL,
  modelid int NOT NULL,
  colorid int NOT NULL,
  image varchar (50) NOT NULL,
  image2 varchar (50),
  image3 varchar (50),
  image4 varchar (50),
  image5 varchar (50),
  material varchar (50) NOT NULL,
  design varchar (50),
  country varchar (50) NOT NULL,
  description varchar (2500),
  current_owner tinyint(1),
  former_owner tinyint(1),
  location varchar(50),
);


CREATE TABLE IF NOT EXISTS user (
  userid int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  username varchar (100) NOT NULL
);

CREATE TABLE IF NOT EXISTS make (
  makeid int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  make varchar (100) NOT NULL
);

CREATE TABLE IF NOT EXISTS model (
  modelid int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  model varchar (100) NOT NULL
);

CREATE TABLE IF NOT EXISTS color (
  colorid int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  color varchar (100) NOT NULL
);

-- { JS sample dataset
-- make: 'Bianchi', *
-- model: 'Sport SS', *
-- color: ['red'],
-- desc: 'bianchi is a famous name in italian bikes.',
-- image: 'img/catalog/bian1.jpg',
-- image2: null,
-- image3: null,
-- persons: [],
-- material: 'steel',
-- design: 'european',
-- country: 'italy'
-- }