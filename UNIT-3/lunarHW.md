# LUNAR NEW YEAR HOMEWORK

--DATABASE

CREATE TABLE IF NOT EXISTS user(
    id integer not null primary key autoincrement,
    name text,
    date_of_birth date,
    email varchar(50)
                               );

CREATE TABLE IF NOT EXISTS account(
    id integer not null primary key autoincrement,
    password varchar(25),
    account_type text,
    last_login datetime
                                  );

CREATE TABLE IF NOT EXISTS user_account_relationship(
    user_id integer,
    account_id integer,
    foreign key (user_id) references user(id),
    foreign key (account_id) references account(id)
                                                    );

INSERT INTO user (name,date_of_birth,email) VALUES ('Ben Vigos', '23 Dec. 2003', 'kvig03@gmail.com');
INSERT INTO account (password, account_type, last_login) VALUES ('passw0rd', 'student', '12 Feb. 2021 15:03');


### ER Diagram
![ER Diagram](/UNIT-3/photos%20and%20stuff/Lunar%20HW.png)
