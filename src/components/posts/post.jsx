import './style.css'

export default function Post({ title, content}) {
    return(
        <div className='post'>
            <strong>{title}</strong>
            <br />
            <span>{content}</span>
        </div>
    )
}