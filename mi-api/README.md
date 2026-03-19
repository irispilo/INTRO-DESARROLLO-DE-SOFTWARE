# SCREENSHOTS

## GET

### 1. Ver todas las skills
curl http://localhost:3001/skills

![GET all](screenshots/GET.png)

---

### 2. Ver una skill específica
curl http://localhost:3001/skills/1

![GET by id](screenshots/GET1.png)

---

## POST

### 3. Crear una nueva skill
curl -X POST http://localhost:3001/skills \
-H "Content-Type: application/json" \
-d '{
  "name": "JavaScript",
  "level": "Beginner",
  "category": "Frontend"
}'

![POST ok](screenshots/POST.png)

---

## PATCH

### 4. Actualizar una skill

> Nota: Este request fue ejecutado con PowerShell (`Invoke-RestMethod`) debido a incompatibilidades con curl.

Ejemplo equivalente:

curl -X PATCH http://localhost:3001/skills/1 \
-H "Content-Type: application/json" \
-d '{"level": "Advanced"}'

![PATCH ok](screenshots/PATCH.png)


---

## DELETE

### 5. Eliminar una skill

> Nota: Este request fue ejecutado con PowerShell (`Invoke-RestMethod`).

Ejemplo equivalente:

curl -X DELETE http://localhost:3001/skills/2

![DELETE ok](screenshots/DELETE.png)

---

## Importante

Las peticiones PATCH y DELETE fueron realizadas utilizando `Invoke-RestMethod` en PowerShell, ya que el comando `curl` en Windows es un alias de `Invoke-WebRequest` y no soporta parámetros como `-X`, `-H` o `-d`.

Todas las rutas también fueron probadas en Postman para validar su funcionamiento y generar las evidencias.