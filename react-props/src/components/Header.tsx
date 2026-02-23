import type { PropTaskProps } from '../interfaces/PropTaskProps';

export default function Header(props: PropTaskProps) {
    return (
        <header id="user">
            <h2>{props.name}</h2>
            <p>Клас: {props.className}</p>
            <p>Номер: {props.number}</p>
        </header>
    );
}
