import Link from 'next/link'
import { GrGithub, GrInstagram, GrLinkedin, GrTwitter } from 'react-icons/gr'
import { SiWhatsapp } from 'react-icons/si'
import clsx from 'clsx'
import { buttonVariants } from './ui/button'

export default function Footer() {
  return (
    <footer className='w-full py-4 bg-zinc-900'>
      <div className='flex gap-4 items-center justify-center'>
        <Link
          href={'https://github.com/leomitas'}
          target='_blank'
          className={clsx(
            buttonVariants({ variant: 'outline' }),
            'flex gap-2 bg-social-github border-2 border-social-github hover:bg-white hover:border-social-github hover:border-2 text-white'
          )}
        >
          <GrGithub />
        </Link>
        <Link
          href={'https://www.linkedin.com/in/leonardo-abreu2402/'}
          target='_blank'
          className={clsx(
            buttonVariants({ variant: 'outline' }),
            'flex gap-2 bg-social-linkedin border-2 border-social-linkedin hover:bg-black hover:text-social-linkedin hover:border-social-linkedin hover:border-2'
          )}
        >
          <GrLinkedin />
        </Link>
        <Link
          href={'https://api.whatsapp.com/send?phone=5512992412575'}
          target='_blank'
          className={clsx(
            buttonVariants({ variant: 'outline' }),
            'flex gap-2 bg-social-whatsapp border-2 border-social-whatsapp hover:bg-black hover:text-social-whatsapp hover:border-social-whatsapp hover:border-2'
          )}
        >
          <SiWhatsapp />
        </Link>
        <Link
          href={'https://www.instagram.com/leomitas/'}
          target='_blank'
          className={clsx(
            buttonVariants({ variant: 'outline' }),
            'flex gap-2 bg-social-instagram border-2 border-social-instagram hover:bg-black hover:text-social-instagram hover:border-social-instagram hover:border-2'
          )}
        >
          <GrInstagram />
        </Link>
        <Link
          href={'https://twitter.com/leomitas'}
          target='_blank'
          className={clsx(
            buttonVariants({ variant: 'outline' }),
            'flex gap-2 bg-social-twitter border-2 border-social-twitter hover:bg-black hover:text-social-twitter hover:border-social-twitter hover:border-2'
          )}
        >
          <GrTwitter />
        </Link>
      </div>
    </footer>
  )
}
