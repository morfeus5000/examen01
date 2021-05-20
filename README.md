# Microservicio examen01


## Objetivo:
Números Primos:
Realizar un algoritmo que imprima los **números primos entre 1 y un número dado**, de forma
descendente.

**Observación**: (Los numeros entre 1 y numero dado no puede incluir el 1 o el valor dato si cumple como numero primo)

Por ejemplo dado el número 7 se debería imprimir 7,5,3,2,1

Por ejemplo dado el número 15 se debería imprimir 13,11,7,5,3,2,1
Esto debe venir en un proyecto NodeJS.

Criterios de evaluación:
- Proyecto en node (mandatorio)
- Buenas prácticas de desarrollo (mandatorio)
- pruebas unitarias (mandatorio)
- Validación de datos de entrada (opcional)
- Utilización de módulos npm (opcional)
- Dockerizacion del proyecto (opcional)

- Subir a github y enviar la URL del repositorio para revisar el código
- Si decides usar docker, URL de la imagen pública en Docker Hub

## Instalación
El proyecto esta basado en node.js:
1. Instalar la paquetería ```npm install```
2. Prueba de resultado ```npm test```
3. ingresa al directorio `npm start`

## Docker
El proyecto esta basado en Dockerfile:
1. Obtener paquetes ```docker pull leviatan/examen01```
2. Correr la imagen ```docker run -p 3000:3000 -d leviatan/examen01```

## Variables de entorno

Variable | Que debe contener | Valor ejemplo
-- | -- | --
**_De Aplicación_** |||
**NODE_ENV** |Url a la que responde la aplicación| test
**PORT** |Puerto definido por defecto para microservicio| 3000
**_&nbsp;_** |||

***  
## Pruebas de funcionalidad

La url del consulta ejemplo: `http://localhost:port` para retornar datos.

### **Posibles códigos HTTP:**

HTTP Code | Name
-- | --
200 | OK
500 | INTERNAL_SERVER_ERROR
-----------
### **GET primes**

Obtener los numeros primos desde el valor ingresado a 1.

Al hacer la petición:
```bash
curl --location --request GET 'http://{host}:{port}/primes/{numero}'
```

_debe retornar:_ 

`HTTP STATUS 200 OK` 
  ```json 
  {
    "result": [
        7,
        5,
        3,
        2,
        1
    ]
}
```
