BEGIN ;

DROP TABLE IF EXISTS users, items, user_transactions, transaction_items,cart, reviews cascade;

CREATE TABLE users (
	id SERIAL PRIMARY KEY,
	username VARCHAR(20) NOT NULL ,
	firstname VARCHAR(20) NOT NULL,
	lastname VARCHAR(20) NOT NULL,
	address TEXT NOT NULL,
	balance DECIMAL DEFAULT 500.00,
	password TEXT NOT NULL
);

CREATE TABLE items (
	id SERIAL PRIMARY KEY,
	name TEXT NOT NULL,
	description TEXT NOT NULL,
	price DECIMAL NOT NULL,
	image TEXT NULL

);


CREATE TABLE user_transactions (
	id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users(id),
	t_time TIMESTAMP 
);


CREATE TABLE transaction_items (
	id SERIAL PRIMARY KEY,
	transaction_id INTEGER REFERENCES user_transactions(id),
	item_id INTEGER REFERENCES items(id)

);

CREATE TABLE cart (
	id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users(id),
	item_id INTEGER REFERENCES items(id)
	);

CREATE TABLE reviews (
	id SERIAL PRIMARY KEY,
	user_id INTEGER REFERENCES users(id),
	item_id INTEGER REFERENCES items(id),
	content TEXT NOT NULL,
	rev_time TIMESTAMP
);



INSERT INTO items(name, description, price) VALUES
('shoes', 'hoslacks stinking shoes', 20.00),
('picture frame', 'beautiful group picture of FACN3', 17.81),
('1918 smoking pipe','made with American Mahogany', 99.00 ),
('face cream', 'Rejuvinating face cream', 42.15),
('Cheese', 'Five year old cheddar', 14.07);






COMMIT ;