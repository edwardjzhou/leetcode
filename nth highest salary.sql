-- 177. Nth Highest Salary
-- Medium

-- 388

-- 329

-- Add to List

-- Share
-- Write a SQL query to get the nth highest salary from the Employee table.

-- +----+--------+
-- | Id | Salary |
-- +----+--------+
-- | 1  | 100    |
-- | 2  | 200    |
-- | 3  | 300    |
-- +----+--------+
-- For example, given the above Employee table, the nth highest salary where n = 2 is 200. If there is no nth highest salary, then the query should return null.

-- +------------------------+
-- | getNthHighestSalary(2) |
-- +------------------------+
-- | 200                    |
-- +------------------------+
-- Accepted
-- 105,043
-- Submissions
-- 344,127


-- #re copied solution: cannot use any expressions in a RETURN statement
-- # CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
-- # BEGIN
-- # DECLARE M INT;
-- # SET M = N-1;

-- #   RETURN (
-- #       # Write your MySQL query statement below.
-- #       SELECT DISTINCT Salary
-- #       FROM Employee
-- #       ORDER BY Salary DESC 
-- #       LIMIT 1
-- #       OFFSET M
-- #   );
-- # END

CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
RETURN (
    SELECT Salary
    FROM Employee AS E1
    WHERE 
    (
        SELECT COUNT(DISTINCT(Salary))
        FROM Employee AS E2
        WHERE E2.Salary > E1.Salary
    ) = N-1
    LIMIT 1
);
END


-- # correlated subquery ?
-- # when a subquery needs a check on an outer condition 
-- # every row calls WHERE once
-- # forEach of outer E1's (100,200,300)
-- #     count how many of inner E2's (100,200,300) is bigger than that E1 element

-- # so 0, 1, 2
-- # so the first biggest is 100 

 