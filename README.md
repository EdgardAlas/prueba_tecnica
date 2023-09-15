## Prueba tecnica

## Ejecución del proyecto

El proyecto se puede ejecutar sin ninguna configuracion previa, solamente usando el comando

```bash
docker compose up
```

y abrir el navegador en la url http://localhost

Si se quiere ejecutar manualmente entonces se tienen que copiar los .env.example de cada proyecto a un archivo .env y configurar las varaibles de entorno, en el .env.example viene la configuracion por defecto que es suficiete si no se cambia nada del backend, en el backend solo se deberian cambiar las variables de entorno de la base de datos.

## Arquitectura

El proyecto esta desarrollado en PHP con el framework Laravel, usando una base de datos MySQL y el fronted con react y vite, ademas de un servidor web Nginx como proxy inverso.
