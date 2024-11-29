import React, { useState, useEffect } from "react";

const Inicio = () => {
  // Estado para la animación de escritura
  const [displayText, setDisplayText] = useState("");
  const fullText = "E STA ES LA PAGINA PRINCIPAL :). ";

  useEffect(() => {
    let i = 0;

    // Si hay un intervalo, lo limpiamos para que no se solapen
    const intervalId = setInterval(() => {
      // Si el índice i es válido, se agrega la letra correspondiente
      if (i < fullText.length) {
        setDisplayText((prevText) => prevText + fullText[i]);
        i++;
      } else {
        clearInterval(intervalId); // Detener la animación una vez terminado el texto
      }
    }, 120); // Velocidad de la animación

    return () => clearInterval(intervalId); // Limpiar el intervalo cuando se desmonte el componente
  }, []); // Solo se ejecuta una vez al montar el componente

  return (
    <div className="container">
      <h1>Inicio</h1>
      <p className="welcome-text">{displayText}</p>

      <style jsx>{`
        .container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh; /* Centrado vertical */
          text-align: center;
          padding: 20px;
        }

        h1 {
          font-size: 4rem;
          margin-bottom: 20px;
          color: #333;
        }

        .welcome-text {
          font-size: 2rem;
          font-weight: 600;
          letter-spacing: 2px;
          color: #555;
          margin-top: 20px;
          padding: 0 10px;
        }
      `}</style>
    </div>
  );
};

export default Inicio;
