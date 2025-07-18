
import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const CaptchaComponent = ({ onChange }) => {
  const captchaRef = useRef(null);

  return (
    <ReCAPTCHA
      sitekey="6LejuYUrAAAAAPxGdaAXfQP7djB2Jk2G7tvN_upm"
      ref={captchaRef}
      onChange={onChange}
    />
  );
};
//clave secreta del back: 6LejuYUrAAAAAFNP8UB7J_D6E0ch381RA3s-ZAGl
//otro token de google captcha, afuerzas iniciar sesión. en la etiqueta pon cualquier cosa (.com, desafio v2, casilla de verificación no soy robot, dominios localhost, google cloud plattform: jardinsm51 puedes poner cual sea le doy luego a enviar. La clave del sitio debo colocarlo en el front en el mismo sitekey, la clave secreta se lo paso a mau y debe ponerlo en el back)
//crear un nuevo archivo que se llama dashboard adentro de componentes 
export default CaptchaComponent;
