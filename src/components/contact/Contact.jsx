import { FaUser } from "react-icons/fa";
import css from './Contact.module.css';
import { FaPhoneAlt } from "react-icons/fa";

export default function Contact({data: {id, name, number }, onDelete}) {

    return (
        <>
        <div className={css.container}>    
        <div className={css.contact}>
            <FaUser  size = {20}/>
            <p className={css.text}>{name}</p>
        </div>
        <div className={css.contact}>
            <FaPhoneAlt size={20}/>
            <p className={css.text}>{number}</p>
        </div>
        </div>
                
        <button
                className={css.deleteBtn}
                onClick={() => onDelete(id)}>
            Delete
        </button>
    </>
    )

    
}