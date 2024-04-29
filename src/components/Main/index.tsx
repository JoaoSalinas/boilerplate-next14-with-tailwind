import Image from 'next/image'

const Main = ({
  title = 'Spixs tecnologia',
  description = 'Boilerplate com next 14 e Tailwind'
}) => (
  <main className="text-white w-full h-full p-12 text-center bg-slate-900 flex flex-col items-center justify-center gap-2">
    <Image
      src="/img/logo.svg"
      alt="Imagem de um S estilizado e Spixs escrito ao lado."
      width={200}
      height={200}
      className="w-96 mb-8"
    />
    <h2 className="text-4xl">{title}</h2>
    <p className="text-2xl font-normal">{description}</p>
    <Image
      src="/img/hero-illustration.svg"
      alt="A arara mascote da empresa em cima do mesmo S da logo."
      className="mt-12 w-min(30rem,100%)"
      width={200}
      height={200}
    />
  </main>
)

export default Main
