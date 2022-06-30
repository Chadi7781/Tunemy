import Image from 'next/image'
import Button from '../../util/ui/widgets/Button'
import Links from './NavItem'

function Header() {

  return (
      <>
      <header className="shadow-md w-full  top-0 left-0   z-50">
      <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py- sm:py-4">

      <div className="md:flex items-center justify-between  bg-white py-0 md:px-7 px-7">
              <Image src="/assets/images/logosociete.png" className="mr-1 pt-8" width={75} height={75} objectFit='fill'/>
            
            
            <ul className="md:flex md:items-center mx-auto ">
                {
                    Links.map((link)=>(
                        <li key={link.name} className="md:ml-8  hover:text-grayText">
                            <a href="#" class="font-display max-w-sm text-sm no-underline font-bold leading-tight">
            <span class="link link-underline link-underline-black text-black">{link.name} </span>
        </a>
                        </li>
                    ))
                    

                }

<Button>Sign in</Button>

            </ul>
            
            
              </div> 
</nav>
      </header>


</>
  )
}

export default Header