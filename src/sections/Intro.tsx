import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';

function Intro() {
    return (
        <section id='intro'>
            <header>
                <h1>Hi, I'm Nicole</h1>
            </header>
            <p>Here is some text about me, this will be about two sentences long.</p>
            <section>
                Container for skill badges.
                <Button>This is a react-bootstrap button!</Button>
                <Badge>Badge</Badge>
            </section>
        </section>
    )
}

export default Intro