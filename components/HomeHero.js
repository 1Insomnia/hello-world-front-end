export default function HomeHero() {
  return (
    <div className="pt-20 pb-10">
      <h1 className="inktrap mb-10 mt-5" aria-label="website name and main title">
        Hello<span className="text-purple">,</span> World!
      </h1>
      <div
        className="text-xs mx-auto leading-loose max-w-900"
        aria-label="section containing informations about the origin of the hello world snippet"
      >
        <h2>
          While small test programs have existed since the development of programmable computers, the tradition of using
          the phrase{" "}
          <span className="text-purple font-semibold">
            {`"`}Hello, World!{`"`}
          </span>{" "}
          as a test message was influenced by an example program in the seminal 1978 book The C Programming Language.
        </h2>
        <h2>
          The example program in that book prints{" "}
          <span className="text-purple font-semibold">
            {`"`}Hello, World{`"`}
          </span>
          , and was inherited from a 1974 Bell Laboratories internal memorandum by Brian Kernighan, Programming in C: A
          Tutorial
        </h2>
      </div>
    </div>
  )
}
