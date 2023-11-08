export function Logo(props: any) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 48 48"
        // width="48px"
        // height="48px"
        {...props}
      >
        <linearGradient
          id="a"
          x1={6.968}
          x2={36.942}
          y1={6.968}
          y2={36.942}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#fede00" />
          <stop offset={1} stopColor="#ffd000" />
        </linearGradient>
        <path
          fill="url(#a)"
          d="M32 42H8a2 2 0 01-2-2V8a2 2 0 012-2h32a2 2 0 012 2v24L32 42z"
        />
        <linearGradient
          id="b"
          x1={33.2}
          x2={39.98}
          y1={33.2}
          y2={39.98}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#e5a505" />
          <stop offset={0.116} stopColor="#eaa804" />
          <stop offset={0.595} stopColor="#f8b301" />
          <stop offset={1} stopColor="#fdb700" />
        </linearGradient>
        <path fill="url(#b)" d="M40 42H24l18-18v16a2 2 0 01-2 2z" />
        <linearGradient
          id="c"
          x1={24.595}
          x2={33.244}
          y1={24.595}
          y2={33.244}
          gradientUnits="userSpaceOnUse"
        >
          <stop offset={0} stopColor="#4b4b4b" />
          <stop offset={1} stopColor="#3b3b3b" />
        </linearGradient>
        <path fill="url(#c)" d="M26 24h16L24 42V26a2 2 0 012-2z" />
      </svg>
    )
}
  