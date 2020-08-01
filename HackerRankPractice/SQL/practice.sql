/*WEATHER OBSERVATION STATION 5
SELECCIONAR LAS DOS CIUDAD EN LA TABLA DE ESTACION CON EL NOMBRE MAS LARGO Y EL MAS CORTO CON SU RESPECTIVO NUMERO DE LETRAS */

-- SELECT * FROM (SELECT CITY, LENGTH(CITY) FROM STATION ORDER BY LENGTH(CITY), CITY) WHERE ROWNUM = 1
-- UNION
-- SELECT * FROM (SELECT CITY, LENGTH(CITY) FROM STATION ORDER BY LENGTH(CITY)  DESC, CITY) WHERE ROWNUM = 1;


/*WEATHER OBSERVATION 6
QUERY THE LIST OF CITY NAMES starting with vowels from station yot result cannot contain duplicates. */

-- SELECT DISTINCT CITY FROM STATION WHERE REGEXP_LIKE(City, '^[AEIOU]');


/* Borra el contenido de una tabla */

truncate table dbo.proyectos;


select * from proyectos
truncate table dbo.proyectos;

insert into proyectos (fecha) values ('12/12/1984');


SELECT * FROM proyectos WHERE proyecto LIKE '%G%';

select * from requerimientos;

truncate table requerimientos;
