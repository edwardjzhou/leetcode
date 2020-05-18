-- 596. Classes More Than 5 Students
-- Easy

-- 202

-- 589

-- Add to List

-- Share
-- SQL Schema
-- There is a table courses with columns: student and class

-- Please list out all classes which have more than or equal to 5 students.

-- For example, the table:

-- +---------+------------+
-- | student | class      |
-- +---------+------------+
-- | A       | Math       |
-- | B       | English    |
-- | C       | Math       |
-- | D       | Biology    |
-- | E       | Math       |
-- | F       | Computer   |
-- | G       | Math       |
-- | H       | Math       |
-- | I       | Math       |
-- +---------+------------+
-- Should output:

-- +---------+
-- | class   |
-- +---------+
-- | Math    |
-- +---------+
 

-- Note:
-- The students should not be counted duplicate in each course.

-- # Write your MySQL query statement below

-- # SELECT class
-- # FROM courses
-- # GROUP BY class
-- # HAVING COUNT(DISTINCT student) >= 5



-- # SELECT class
-- # FROM (
-- #     SELECT class, COUNT(DISTINCT(student)) as num
-- #     from courses
-- #     group by class
-- #     having num > 4
-- #     ) as asdf

SELECT class
FROM (
    SELECT class, COUNT(DISTINCT(student)) as num
    from courses
    group by class
    ) as asdf

WHERE asdf.num > 4
    
