x=1
print(x)
print(type(x))  #int para enteros

z=3.1416
print(z)
print(type(z))  #floag para decimales Xd

w=True
print(w)
print(type(w))  #Valores Booleanos TRUE, FALSE

e="hola mundo"
print(e)
print(type(e))  #str cadena de texto

u='carlos'
v='chavez'
print(u +' '+v)  #Concatenacion de una cadena de texto

#Existen dos formas de declarar, 
#colcando las variables y despues usandolas o de las siguiete manera

#print('¿Como te llamas?')
#name = input()      #Usamos input para dar lectura de la entrada del teclado
#print('Tu nombre es: '+' '+ name)      #Se ocupa +' +  para concatenar

r = input('dame un numero: ')    
print(r)
print(type(r))    # la variable r se almacena como cadena de texto
rr = int(input('Dame otro numero: ')) #la variable rr se le convierte a un numero entero enteponiendo antes de input, el int
print(r)
print(type(rr))
rrr = bool(input('Quieres que te diga algo: '))
print(type(rrr))