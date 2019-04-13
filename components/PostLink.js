import Link from "next/link";

export default (props) => (
    <Link href={`./movies?title=${props.title}`} as={`./movies/${props.title}`} >
        <a>{props.title}</a>
    </Link>
);