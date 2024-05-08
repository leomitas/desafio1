export default function AboutMe() {
  return (
    <section className='flex flex-col gap-4 p-12 md:py-36 max-w-6xl mx-auto xl:px-0 text-xl md:text-2xl'>
      <div className='bg-blue2-0 p-4 rounded-lg text-white'>
        <p>
          Meu nome é Leonardo Abreu, tenho 21 anos, estou cursando Engenharia de
          Software, sou formado em técnico em desenvolvimento de sistemas pelo
          SENAI, e realizei o curso de desenvolvimento web da Kenzie Academy.
        </p>
        <p>
          Possuo bastante experiência em clássicas linguagens{' '}
          <span className='text-blue-700'>
            Javascript, Typescript e Python.
          </span>
        </p>
        <p>
          Sempre que possível, também aplico minha paixão pelo desenvolvimento
          de produtos e soluções de problemas com{' '}
          <span className='text-blue-700'>Node.js</span> e Frameworks, como{' '}
          <span className='text-blue-700'>Next.js, Flask, Django.</span>
        </p>
      </div>
    </section>
  )
}
