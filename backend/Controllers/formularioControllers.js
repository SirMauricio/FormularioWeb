const db = require("../database");

// ✅ Corrección: Usar fetch compatible con CommonJS
const fetch = (...args) => import('node-fetch').then(({ default: fetch }) => fetch(...args));

exports.crearFormulario = async (req, res) => {
  const {
    nombre,
    apellidoPaterno,
    apellidoMaterno,
    celContacto,
    correo,
    mensaje,
    captchaToken
  } = req.body;

  if (!captchaToken) {
    return res.status(400).json({ message: "Captcha no enviado" });
  }

  try {
    const secretKey = process.env.RECAPTCHA_SECRET;

    // ✅ Verifica con Google reCAPTCHA
    const captchaResponse = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: `secret=${secretKey}&response=${captchaToken}`
    });

    const captchaData = await captchaResponse.json();

    console.log("Token recibido:", captchaToken);
    console.log("Secret Key usada:", secretKey);
    console.log("Respuesta de Google:", captchaData);

    if (!captchaData.success) {
      return res.status(403).json({ message: "Captcha inválido." });
    }

    const sql = `
      INSERT INTO formulario (nombre, apellidoPaterno, apellidoMaterno, celContacto, correo, mensaje)
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(sql, [nombre, apellidoPaterno, apellidoMaterno, celContacto, correo, mensaje], (err, result) => {
      if (err) {
        console.error("Error al insertar:", err);
        return res.status(500).send("Error al guardar en base de datos");
      }
      res.status(200).send("Formulario guardado correctamente");
    });
  } catch (error) {
    console.error("Error al verificar captcha:", error);
    res.status(500).json({ message: "Error al verificar captcha" });
  }
};

exports.obtenerFormularios = (req, res) => {
  const sql = "SELECT * FROM formulario ORDER BY forId DESC"; // ✅ Corrección aquí también
  db.query(sql, (err, resultados) => {
    if (err) {
      console.error("Error al obtener formularios:", err);
      return res.status(500).send("Error al obtener formularios");
    }
    res.status(200).json(resultados);
  });
};
