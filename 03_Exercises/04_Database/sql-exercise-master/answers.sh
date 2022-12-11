# Basic Queries
select * from students
select * from students where age > 30 
select * from students where gender='F' and age=30
select points from students where name='Alex'  
INSERT INTO students VALUES (7'Fatima',24,'M',500)
update students set points =400 where name='Basma' 
update students set points =points-100 where name='Alex' 

#Creating Table
CREATE TABLE graduates(
    ID INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    Name TEXT Not Null Unique,
    Age INTEGER,
	Gender TEXT,
	Gradutaion TEXT,
	Points INTEGER
);

INSERT INTO graduates(ID,NAME,AGE,GENDER,POINTS)
SELECT ID, Name, Age, Gender,Points
FROM students
WHERE name ='Layal'
UPDATE graduates
set Gradutaion='08/09/2018'
where name='Layal'


Delete from students where ID= 4

#join
SELECT companies.Name, companies.Date,employees.Name
FROM companies
INNER JOIN employees ON companies.Name = employees.Company;

SELECT companies.Name, companies.Date,employees.Name
FROM companies
INNER JOIN employees ON companies.Name = employees.Company where companies.date<2000

SELECT companies.Name, companies.Date,employees.Name
FROM companies
INNER JOIN employees ON companies.Name = employees.Company where employees.Role='Graphic Designer'