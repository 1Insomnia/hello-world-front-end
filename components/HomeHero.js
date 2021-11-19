export default function HomeHero() {
  return (
    <div className="pt-20 pb-10">
      <h1 className="inktrap mb-10">Hello, World!</h1>
      <div className="text-xs mx-auto leading-loose max-w-120-ch">
        <p>
          While small test programs have existed since the development of programmable computers, the tradition of using
          the phrase{" "}
          <span className="text-highlight-purple font-semibold">
            {`"`}Hello, World!{`"`}
          </span>{" "}
          as a test message was influenced by an example program in the seminal 1978 book The C Programming Language.
        </p>
        <p>
          The example program in that book prints{" "}
          <span className="text-highlight-purple font-semibold">
            {`"`}Hello, World{`"`}
          </span>
          , and was inherited from a 1974 Bell Laboratories internal memorandum by Brian Kernighan, Programming in C: A
          Tutorial
        </p>
      </div>
    </div>
  )
}
