import Link from "next/link"

function MainNavigation(){
    return(
        <div>
            <ul>
                <li>   
            <Link href='/'>Home</Link>
            </li>
                <li>   
            <Link href='/about'>About us</Link>
            </li>
                <li>   
            <Link href='/contact'>Contact Us</Link>
            </li>
                <li>   
            <Link href='/admin/adminDashboard'>Admin Dashboard</Link>
            </li>
                <li>   
            <Link href='/users/userLogin'>User login</Link>
            </li>
            </ul>
        </div>
    )
}

export default MainNavigation