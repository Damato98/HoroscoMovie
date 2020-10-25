import Link from 'next/link'

const IconContainer = (props) => {
    return (
        <Link href={props.href} passHref replace>
            <a href={props.href}>
                <img 
                    src={props.src} 
                    width={props.width} 
                    height={props.height}
                >
                </img>
            </a>
        </Link>
    )
}

export default IconContainer