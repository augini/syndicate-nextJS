-- Up
CREATE TABLE Person (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    email TEXT,
    password TEXT
);

CREATE TABLE Vehicle (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    brand TEXT,
    model TEXT,
    ownerId INTEGER REFERENCES Person(id)
);

-- INSERT INTO Person (name, email) values ('bruno', 'bruno@antunes.pt');
-- INSERT INTO Person (name, email) values ('jack', 'jack@antunes.pt');
-- INSERT INTO Person (name, email) values ('farrukh', 'auginimike@mail.ru');

-- INSERT INTO Vehicle (brand, model, ownerId) values('audi', 'R8', 1);
-- INSERT INTO Vehicle (brand, model, ownerId) values('audi', 'R6', 1);
-- INSERT INTO Vehicle (brand, model, ownerId) values('mercedes', 'benz', 2);
-- INSERT INTO Vehicle (brand, model, ownerId) values('bugatti', 'veyron', 3);
-- INSERT INTO Vehicle (brand, model, ownerId) values('bugatti', 'veyron', 3);
-- INSERT INTO Vehicle (brand, model, ownerId) values('porsche', 'new version', 3);

-- Down
DROP TABLE Person;
DROP TABLE Vehicle;