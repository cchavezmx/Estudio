#%%
print("Hello world")
print("Que cosa es esto!!!!")

# %%

precio = 1100.5
print(precio)

# %%
frio = False
print(frio)

# %%#Contatenar variables con texto 
print('Hace frio:  ', frio)

# %% #Obtener el area de un triangulo
base = 10
altura = 3

triangulo = (base * altura)/2

print('El area del Triangulo es: ',triangulo)

# %% #Doble igual para hacer una igualdad 
frio = False
if (frio == True):
    print('El día de hoy hace frío')
else:
    print('El día de hoy hace calor')


# %% #Comparando dos edades
edad1 = 30
edad2 = 20

if (edad1 < edad2):
    print('La Edad 1 es menor a la edad 2')
else: 
    print('La edad 1 es mayor a la edad 2')


# %% #USO DE ARREGLOS
frutas = ['Naranjas', 'Limon', 'Uva', 'Fresas']
frutas[0]
print(frutas[2])

# %% DICCIONARIO

frutas_dic = {
    'Nombre' : 'Naranja',
    'Peso' : 0.3,
}
print(frutas_dic['Nombre'])


# %% DICCIONARIO MULTIPLE
frutas_dic2 = [ {
    'Nombre' : 'Naranja',
    'Peso' : 0.3,
},
{
    'Nombre' : 'Limon',
    'Peso' : 0.15
},
{
    'Nombre' : 'Fresa',
    'Peso' : 0.12
}
]

#ANTES DE PEDIR QUE VALOR DE LA LISTA QUEREMOS ACCEDER, HAY QUE DECIRLE DE QUE PARTE DEL 
#ARREGLO QUEREMOS ACCEDER

print(frutas_dic2[2]['Nombre'])

# %%
