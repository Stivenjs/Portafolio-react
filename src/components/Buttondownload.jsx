function Buttondownload({ Descargar }) {
  const descargarCV = () => {
    // Ruta de tu hoja de vida
    const rutaCV = "/CV.pdf";
    // Crea un enlace temporal
    const link = document.createElement("a");
    link.href = rutaCV;
    // Asigna el nombre de archivo para la descarga
    link.download = "Curriculum";
    // Simula un clic en el enlace para iniciar la descarga
    link.click();
  };

  return (
    <div>
      <button className="cv" type="button" onClick={descargarCV}>
        {Descargar}
      </button>
    </div>
  );
}

export default Buttondownload;
