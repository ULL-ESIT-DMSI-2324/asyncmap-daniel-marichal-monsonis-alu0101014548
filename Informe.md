---

# Lectura de Ficheros: Soluciones Paralelas y Secuenciales

En la era actual de la computación, el manejo eficiente de operaciones asíncronas es crucial. Esta práctica se centra en la implementación de soluciones paralelas y secuenciales para la lectura de ficheros.


---
## ✅ Lista de Pasos (Rúbrica)

1. **Implementación de Soluciones**:  
   - [x] Crear una solución utilizando `async.map` para leer ficheros en paralelo (`sol-using-async.mjs`).
   - [x] Desarrollar una solución paralela personalizada sin utilizar `async` (`my-asyncs.mjs`).
   - [x] Implementar una solución que lea los ficheros de manera secuencial (`concatSerialize.js`).

2. **Tratamiento de Errores**:  
   - [x] Manejo y reporte de errores durante la lectura y escritura de ficheros.

3. **Manejo de Argumentos de Entrada**:  
   - [x] Uso de `commander` para gestionar argumentos de entrada.

4. **Race Conditions**:  
   - [x] Comprender y discutir las "race conditions" en el contexto de la lectura asíncrona de ficheros.

5. **Documentación**:  
   - [x] Comentario del código fuente.
   - [x] Elaboración de Informe.md con descripción, objetivos y conclusiones.

---
## 🎯 Objetivos

- Implementar una solución paralela usando la librería `async`.
- Crear una solución paralela personalizada sin usar la librería `async`.
- Desarrollar una función `series` que serialice llamadas a funciones asíncronas.

## 📁 Soluciones Implementadas

1. **Solución usando la librería async** (`sol-using-async.mjs`):  
   - Utilizamos `async.map` para leer múltiples ficheros en paralelo.
   - Los resultados se concatenan y se escriben en un archivo de salida.

2. **Solución Paralela sin async** (`my-asyncs.mjs`):  
   - Se implementó una función `asyncMap` que imita la funcionalidad del `map` de async.
   - Esta función maneja las operaciones asíncronas y devuelve los resultados cuando todas las operaciones se han completado.

3. **Solución Secuencial** (`concatSerialize.js`):  
   - Se creó una función `series` que lee archivos de manera secuencial, uno tras otro.
   - Es útil para garantizar un orden específico en las operaciones.

## 🚦 Race Conditions

En la programación asíncrona, las "race conditions" se refieren a situaciones donde el resultado de una operación depende del orden no determinístico de otras operaciones. Es crucial tener en cuenta estas situaciones y gestionarlas adecuadamente, especialmente cuando trabajamos con operaciones de I/O en paralelo.

## 🔚 Conclusión

A través de esta práctica, hemos explorado diferentes técnicas para manejar operaciones asíncronas. Las soluciones paralelas ofrecen mejor rendimiento, pero es esencial gestionar posibles condiciones de carrera. Las soluciones secuenciales garantizan un orden, pero podrían no ser tan eficientes en términos de tiempo de ejecución.

## 📚 Referencias

- [Async utilities for node and the browser](https://caolan.github.io/async/v3/)
- [Node.js fs module](https://nodejs.org/api/fs.html)
- [Race conditions in JavaScript](https://stackoverflow.com/questions/338110/avoiding-a-javascript-race-condition)

---
