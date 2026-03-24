import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "5mb" }));

app.post("/api/translate-texts", async (req, res) => {
  const { texts, targetLang } = req.body;

  if (!Array.isArray(texts) || !targetLang) {
    return res.status(400).json({ error: "Faltan parámetros: texts o targetLang" });
  }

  const authKey = process.env.DEEPL_KEY;

  if (!authKey) {
    return res.status(500).json({ error: "Falta DEEPL_KEY en el .env" });
  }

  try {
    const params = new URLSearchParams();
    texts.forEach((text) => params.append("text", text));
    params.append("target_lang", targetLang);
    params.append("tag_handling", "html");
    params.append("tag_handling_version", "v2");

    const response = await fetch("https://api-free.deepl.com/v2/translate", {
      method: "POST",
      headers: {
        Authorization: `DeepL-Auth-Key ${authKey}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params.toString(),
    });

    const data = await response.json();

    if (!response.ok) {
      return res.status(response.status).json({
        error: "Error en DeepL",
        details: data,
      });
    }

    res.json({
      translations: data.translations.map((item) => item.text),
    });
  } catch (err) {
    console.error("Error interno:", err);
    res.status(500).json({ error: "Error interno del servidor" });
  }
});

app.listen(3000, () => {
  console.log("Servidor en http://localhost:3000");
});