import Header from "../components/Header";

// <!--Start of the Contact Page-->
export default function Contact(){
    return(
        <>
            {/* <!--Start of the CONTACT Section--> */}
            <section class = "contact" id="contact">
                <h2>CONTACT ME</h2>
                <p>Whether you want to talk to me about your favorite movie, or about an exciting idea/project you might have, feel free to reach out using the button below!</p>
                <button type="button" id="button"><a href="mailto:anthonymiacanojr@gmail.com">CLICK HERE</a></button>
            </section>
        </>
    );
}