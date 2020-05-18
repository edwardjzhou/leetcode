-- # # Write your MySQL query statement below
-- # SELECT original.id, original.visit_date, original.people 
-- # two tables in one "from" basically full outer joins? full cartesian product no cares about joining on basis of anything
--  # values were like [[5,6,7], [6,7,8]]; better to do [5,7],[6,8]
 
SELECT DISTINCT id, visit_date, people
FROM  stadium as original,
(SELECT s1.id-2 AS Low, s1.id AS High   
FROM stadium AS s1
LEFT JOIN stadium AS s2 ON s1.id = s2.id + 1
LEFT JOIN stadium AS s3 ON s1.id = s3.id + 2
WHERE s1.people >= 100 AND s2.people >= 100 AND s3.people >= 100) as answer
WHERE original.id BETWEEN answer.Low AND answer.High
ORDER BY id 



-- # ["id", "visit_date", "people", "Low", "High"], "values":
-- # ''[[1, "2017-01-01", 10, 6, 8],
-- #    [1, "2017-01-01", 10, 5, 7],
-- #    [2, "2017-01-02", 109, 6, 8], 
-- #    [2, "2017-01-02", 109, 5, 7], 
-- # ..
