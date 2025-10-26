import { BOOTSTRAP_BADGE, JAVA_BADGE, JS_BADGE, PYTHON_BADGE } from "../constants/elements";

function Intro() {
    return (
        <section id='intro'>
            <header>
                <h1 className="fw-bold">The Software Engineering Log of <span className="fst-italic">Nicole Cabaya</span></h1>
            </header>
            <section className="d-flex gap-2 pt-2 pb-5">
                {[JAVA_BADGE, JS_BADGE, PYTHON_BADGE, BOOTSTRAP_BADGE]}
            </section>
            <p>Here is some text about me. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
        </section >
    )
}

export default Intro