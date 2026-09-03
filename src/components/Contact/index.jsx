import { useState } from 'react'
import './Contact.scss'

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSent, setIsSent] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Message de :", name, email, message);

        setIsSent(true);
        setEmail("");
        setMessage("");
    };

    const handleReset = () => {
        setName("");
        setIsSent(false);
    };

    return (
        <section className="contact" id="contact">
            <div className="contact__container">
                <h2 className="contact__title">Me contacter</h2>
                {isSent ? (
                    <div className="contact__success">
                        <p>Merci {name}, votre message a bien été envoyé !</p>
                        <button onClick={handleReset} className="btn btn--outline">Envoyer un autre message</button>
                    </div>
                ) : (
                    <form className="contact__form" onSubmit={handleSubmit}>
                        <div className="contact__field">
                            <label htmlFor="name">Nom</label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={name}
                                onChange={(event) => setName(event.target.value)}
                                placeholder="Votre nom"
                            />
                        </div>

                        <div className="contact__field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="text"
                                id="email"
                                required
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="votre@email.com"
                            />
                        </div>

                        <div className="contact__field">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                required
                                value={message}
                                onChange={(event) => setMessage(event.target.value)}
                                placeholder="Comment puis-je vous aider ?"
                            ></textarea>
                        </div>

                        <button type="submit" className="btn btn--primary">Envoyer le message</button>
                    </form>
                )}
            </div>
        </section>
    );
}

export default Contact;