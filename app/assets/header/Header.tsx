import { FaUserCircle } from 'react-icons/fa'; //to install react-icons: npm install react-icons --save
import Link from 'next/link';

const Header = ({ title }: { title: string }) => {
    return (
        <header className='flex px-8 py-4 justify-between w-full bg-emerald-500 items-center'>
            <img src="/logo_branca.svg" alt="Logo" className='w-7'/>
            <Link href={"/"} className='text-white'><h1>{title}</h1></Link>
            <div className="user-profile">
                <button>
                    {/* <img src={userImage} alt="User Profile" /> */}
                    <FaUserCircle />
                </button>
            </div>
        </header>
    );
};

export default Header;
