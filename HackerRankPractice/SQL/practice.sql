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

/* Selecciona los registros unicos de la columna City de la tabla estation, cuando 
SUBSTR => uso: SUBSTR("SQL TUTORIAL", 5, 3) AS ExtracString // result = Tut 
 */
SELECT DISTINCT CITY FROM STATION WHERE SUBSTR(CITY,LENGTH(CITY),LENGTH(CITY)) IN ('a','i','e','o','u');
/*SQL*/
SELECT tablero from requerimientos WHERE SUBSTRING(tablero,LEN(tablero),LEN(tablero)) IN ('a', 'e', 'i', 'o', 'u')
/*EXTRAER LOS ELEMENTOS QUE EN LA ULTIMA FILA SEA Z*/
SELECT FirstName from DimEmployee WHERE SUBSTRING(FirstName,LEN(FirstName),LEN(FirstName)) in ('Z');


/*SELECCIONA EL REGSITRO UNICO DE LA COLUMA, CON AS LE CAMBIAS EL NOMBRE, CUANDO STATUS = 0 */
SELECT DISTINCT ns as 'COD' FROM requerimientos WHERE status = 0;

/*Query the list of CITY names from STATION which have vowels (i.e., a, e, i, o, and u) as both their first and last characters. Your result cannot contain duplicates.*/

/* SELECT DISTINCT CITY FROM STATION WHERE CITY REGEXP '^[aeiou].*[aeiou]$'; MYSQL CON REGEXP/

select distinct FirstName from DimEmployee where left(FirstName,1) in ('a','e','i','o','u') and right(FirstName, 1) in ('a','e','i','o','u')