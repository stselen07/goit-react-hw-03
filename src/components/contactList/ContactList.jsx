import Contact from '../contact/Contact';
import css from './ContactList.module.css';
export default function ContactList({ data, onDelete }) {
    return (
        <ul className={css.list}>
            {data.map(user =>( 
                <li className={css.item} key={user.id}>
                    < Contact data={user} onDelete={ onDelete} />
                </li>
            ))
            }
        </ul>
    )
    
}