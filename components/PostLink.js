import Link from "next/link";

export default (props) => (
    <Link href={`./movies?title=${props.title}`} >
        <a>{props.title}</a>
    </Link>
);