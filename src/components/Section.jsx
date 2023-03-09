export default function Section(props) {
    return (
        <section>
        <div>
            <h2>{props.tittle}</h2>
            <p>{props.subtittle}</p>
            <ul className={props.className}>{props.children}</ul>
        </div>
    </section>
    );
}