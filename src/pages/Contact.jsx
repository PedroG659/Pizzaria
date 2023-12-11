import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>
      <div className="rightSide">
        <h1> Contate-nos</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Nome Completo</label>
          <input name="name" placeholder="Digite o nome completo..." type="text" />
          <label htmlFor="email">E-mail</label>
          <input name="email" placeholder="Digite o e-mail..." type="email" />
          <label htmlFor="message">Mensagem</label>
          <textarea
            rows="6"
            placeholder="Digite a mensagem..."
            name="message"
            required
          ></textarea>
          <button type="submit"> Enviar mensagem</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;