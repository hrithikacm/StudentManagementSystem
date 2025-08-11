To create the required SQL Server database for this API, run the following script in SSMS:
```sql
CREATE DATABASE StudentDB1;
GO

USE StudentDB1;

CREATE TABLE Students (
    ID INT PRIMARY KEY IDENTITY(1,1),
    Name NVARCHAR(100) NOT NULL,
    Age INT NOT NULL,
    Grade NVARCHAR(10) NOT NULL
);
GO

CREATE PROCEDURE GetAllStudents
AS
BEGIN
    SELECT * FROM Students;
END
GO

-- Get student by ID
CREATE PROCEDURE GetStudentById @ID INT
AS
BEGIN
    SELECT * FROM Students WHERE ID = @ID;
END
GO

-- Add student
CREATE PROCEDURE AddStudent @Name NVARCHAR(100), @Age INT, @Grade NVARCHAR(10)
AS
BEGIN
    INSERT INTO Students (Name, Age, Grade) VALUES (@Name, @Age, @Grade);
END
GO

-- Update student
CREATE PROCEDURE UpdateStudent @ID INT, @Name NVARCHAR(100), @Age INT, @Grade NVARCHAR(10)
AS
BEGIN
    UPDATE Students SET Name = @Name, Age = @Age, Grade = @Grade WHERE ID = @ID;
END
GO

-- Delete student
CREATE PROCEDURE DeleteStudent @ID INT
AS
BEGIN
    DELETE FROM Students WHERE ID = @ID;
END
GO

SELECT * FROM Students;

ALTER TABLE Students
ADD Email NVARCHAR(100) NOT NULL,
    Department NVARCHAR(100) NOT NULL;
GO

DROP PROCEDURE IF EXISTS AddStudent;
GO
CREATE PROCEDURE AddStudent
    @Name NVARCHAR(100),
    @Age INT,
    @Grade NVARCHAR(10),
    @Email NVARCHAR(100),
    @Department NVARCHAR(100)
AS
BEGIN
    INSERT INTO Students (Name, Age, Grade, Email, Department)
    VALUES (@Name, @Age, @Grade, @Email, @Department);
END
GO

DROP PROCEDURE IF EXISTS UpdateStudent;
GO
CREATE PROCEDURE UpdateStudent
    @ID INT,
    @Name NVARCHAR(100),
    @Age INT,
    @Grade NVARCHAR(10),
    @Email NVARCHAR(100),
    @Department NVARCHAR(100)
AS
BEGIN
    UPDATE Students
    SET Name = @Name,
        Age = @Age,
        Grade = @Grade,
        Email = @Email,
        Department = @Department
    WHERE ID = @ID;
END
GO

DROP PROCEDURE IF EXISTS GetAllStudents;
GO
CREATE PROCEDURE GetAllStudents
AS
BEGIN
    SELECT * FROM Students;
END
GO

DROP PROCEDURE IF EXISTS GetStudentById;
GO
CREATE PROCEDURE GetStudentById @ID INT
AS
BEGIN
    SELECT * FROM Students WHERE ID = @ID;
END
GO

DROP PROCEDURE IF EXISTS DeleteStudent;
GO
CREATE PROCEDURE DeleteStudent @ID INT
AS
BEGIN
    DELETE FROM Students WHERE ID = @ID;
END
GO

SELECT * FROM Students;
