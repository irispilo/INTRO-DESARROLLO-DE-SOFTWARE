const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3001;

// Middlewares
app.use(cors());
app.use(express.json());

// Base de datos en memoria
let skills = [
  { id: 1, name: 'Angular', level: 'Beginner', category: 'Frontend' },
  { id: 2, name: 'API Express', level: 'Beginner', category: 'Backend' },
  { id: 3, name: 'Python', level: 'Intermediate', category: 'Backend' },
];

let nextId = 4;

// GET / - Bienvenida
app.get('/', (req, res) => {
  res.json({ message: 'Bienvenido a la API de Skills' });
});

// GET /skills - Ver todas las skills
app.get('/skills', (req, res) => {
  res.json(skills);
});

// GET /skills/:id - Ver una skill específica
app.get('/skills/:id', (req, res) => {
  const skill = skills.find(s => s.id === parseInt(req.params.id, 10));

  if (!skill) {
    return res.status(404).json({ error: 'Skill no encontrado' });
  }

  res.json(skill);
});

// POST /skills - Crear una skill
app.post('/skills', (req, res) => {
  const { name, level = 'Beginner', category = 'General' } = req.body;

  if (!name) {
    return res.status(400).json({ error: 'El campo "name" es requerido' });
  }

  const newSkill = {
    id: nextId++,
    name,
    level,
    category,
  };

  skills.push(newSkill);
  res.status(201).json(newSkill);
});

// PATCH /skills/:id - Actualizar una skill
app.patch('/skills/:id', (req, res) => {
  const index = skills.findIndex(s => s.id === parseInt(req.params.id, 10));

  if (index === -1) {
    return res.status(404).json({ error: 'Skill no encontrado' });
  }

  // Evitar sobrescribir id por accidente
  const { id, ...rest } = req.body;
  skills[index] = { ...skills[index], ...rest };

  res.json(skills[index]);
});

// DELETE /skills/:id - Eliminar una skill
app.delete('/skills/:id', (req, res) => {
  const index = skills.findIndex(s => s.id === parseInt(req.params.id, 10));

  if (index === -1) {
    return res.status(404).json({ error: 'Skill no encontrado' });
  }

  const [deleted] = skills.splice(index, 1);
  res.json({ message: 'Skill eliminado', skill: deleted });
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});