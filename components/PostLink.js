import Link from "next/link";

export default (props) => (
    <div>
        <Link href={`./movies?id=${props.id}`} as={`./movies/${props.id}`} >
            <a>{props.title}</a>
        </Link>
    </div>
);