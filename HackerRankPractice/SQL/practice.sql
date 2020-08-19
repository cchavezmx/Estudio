/*WEATHER OBSERVATION STATION 5 */

-- SELECT * FROM (SELECT CITY, LENGTH(CITY) FROM STATION ORDER BY LENGTH(CITY), CITY) WHERE ROWNUM = 1
-- UNION
-- SELECT * FROM (SELECT CITY, LENGTH(CITY) FROM STATION ORDER BY LENGTH(CITY)  DESC, CITY) WHERE ROWNUM = 1;
-- SELECT DISTINCT CITY FROM STATION WHERE REGEXP_LIKE(City, '^[AEIOU]');


/*--------------------------*/
/*         BASICOS          */
/*--------------------------*/

select * from proyectos  /*seleciona todas las columnas de la tabla proyectos */
truncate table dbo.proyectos; /* ELIMINA TODOS LOS VALORES DE LA TABLA SIN BORRAR LA TABLA*/
insert into proyectos (fecha) values ('12/12/1984'); /* SELECIONA TODAS LAS COLUMNAS DE PROYECTOS QUE TENGAN COMO VALOR UNA FECHA EN LA COLUMNA FECHA*/
SELECT * FROM proyectos WHERE proyecto LIKE '%G%'; /* SELECIONA TODAS LAS COLUMNAS DE PROYECTOS QUE COMIENZEN POR LA LETRA G*/


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


/*--------------------------*/
/*       USO DE WHERE       */
/*--------------------------*/

/* MS SQL SERVER - SELECCIONA SIN REPETIR LOS NOMBRES DE LAS CIUDADES QUE SI (WHERE) TERMINAN EN VOCALES */
select distinct FirstName from DimEmployee where left(FirstName,1) in ('a','e','i','o','u') and right(FirstName, 1) in ('a','e','i','o','u')


/* MS SQL SERVER - SELECCIONA SIN REPETIR LOS NOMBRES DE LAS CIUDADES QUE NO (WHERE NOT) TERMINAN EN VOCALES */
select DISTINCT CITY from STATION WHERE NOT RIGHT(CITY, 1) IN ('a','e','i','o','u');


/* MS SQL SERVER - SELECCIONA SIN REPETIR LOS NOMBRES DE LAS CIUDADES QUE NO (WHERE NOT) TERMINAN EN VOCALES O QUE NO EMPIEZEN CON VOCALES*/
SELECT DISTINCT CITY FROM STATION WHERE NOT LEFT(CITY, 1) IN ('a', 'e', 'i', 'o', 'u') OR NOT RIGHT(CITY, 1) IN ('a', 'e', 'i', 'o', 'u');

/*--------------------------*/
/*      USO DE ORDER BY     */
/*--------------------------*/


/* MS SQL SERVER - SELECIONA LOS NOMBRE DE LOS ESTUDIAES QUE TUVIERON MAS DE 75 MARKS, ORDENALOS POR LAS ULTIMA LETRAS DE SU NOMBRE Y POR ID DE FORMA ASCENDENTE*/
SELECT NAME FROM STUDENTS WHERE MARKS > 75 ORDER BY RIGHT(NAME, 3), ID ASC;

/* ORDERNAR LA LISTA DE NOMBRES DE FORMA ALFABETICA */
SELECT NAME FROM EMPLOYEE ORDER BY NAME ASC;


/*ORDER UNA LISTA DE EMPLEADOS DE FORMA ASCENDETE SEGUN EL ID DE EPMPLEADO, CUYO SALARIA SEA MAYOR A 2000 Y MENOS DE 10 MESES */
SELECT NAME FROM EMPLOYEES WHERE SALARY > 2000 AND MONTHS < 10 ORDER BY EMPLOYEE_ID ASC;


/*--------------------------*/
/*       USO DE JOIN        */
/*--------------------------*/
/*
(INNER) JOIN: Returns records that have matching values in both tables
LEFT (OUTER) JOIN: Returns all records from the left table, and the matched records from the right table
RIGHT (OUTER) JOIN: Returns all records from the right table, and the matched records from the left table
FULL (OUTER) JOIN: Returns all records when there is a match in either left or right table
*/


/*FROM first_table join_type second_table [ON (join_condition)] */
/*SUMA LOS VALORES DE LA COLUMNA DE POBLACION DE LA TABLA CIUDAD DE PAISES QUE SEAN DEL CONTINENTE 'Asia' UNIENDO LOS VALORES DE DOS TABLAS CITY Y COUNTRY*/
SELECT SUM(CITY.POPULATION) FROM CITY INNER JOIN COUNTRY ON (CITY.COUNTRYCODE = COUNTRY.CODE) WHERE COUNTRY.CONTINENT = 'Asia';

/*SELECION DE LOS NOMBRES DE LA TABLA CITY QUE ESTEN EL EL CONTIENENTE AFRICANO, LA TABLA DE CONTINENTE ESTA EN COUNTRY*/
SELECT CITY.NAME FROM CITY INNER JOIN COUNTRY ON (CITY.COUNTRYCODE = COUNTRY.CODE) WHERE COUNTRY.CONTINENT = 'Africa'


