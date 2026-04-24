function Contato() {
  return (
    <div>
      <h1>Contato</h1>

      <p>Entre em contato conosco:</p>

      <ul>
        <li>Email: contato@lojablusas.com</li>
        <li>Telefone: (00) 00000-0000</li>
      </ul>

      <form>
        <div>
          <label>Nome:</label>
          <input type="text" />
        </div>

        <div>
          <label>Email:</label>
          <input type="email" />
        </div>

        <div>
          <label>Mensagem:</label>
          <textarea />
        </div>

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default Contato;