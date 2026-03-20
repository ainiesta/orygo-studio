interface LogoProps {
  color?: string;
  className?: string;
  height?: number;
}

export default function Logo({ color = "#ffffff", className = "", height = 32 }: LogoProps) {
  const aspect = 541 / 185;
  const width = height * aspect;

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 541 185"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* O */}
      <rect x="81" y="44" width="20" height="20" fill={color}/>
      <rect x="81" y="124" width="20" height="20" fill={color}/>
      <rect x="61" y="124" width="20" height="20" fill={color}/>
      <rect x="41" y="104" width="20" height="20" fill={color}/>
      <rect x="101" y="104" width="20" height="20" fill={color}/>
      <rect x="41" y="84" width="20" height="20" fill={color}/>
      <rect x="101" y="84" width="20" height="20" fill={color}/>
      <rect x="41" y="64" width="20" height="20" fill={color}/>
      <rect x="101" y="64" width="20" height="20" fill={color}/>
      <rect x="61" y="44" width="20" height="20" fill={color}/>
      {/* R */}
      <rect x="171" y="44" width="20" height="20" fill={color}/>
      <rect x="191" y="124" width="20" height="20" fill={color}/>
      <rect x="131" y="124" width="20" height="20" fill={color}/>
      <rect x="131" y="104" width="20" height="20" fill={color}/>
      <rect x="171" y="104" width="20" height="20" fill={color}/>
      <rect x="151" y="104" width="20" height="20" fill={color}/>
      <rect x="131" y="84" width="20" height="20" fill={color}/>
      <rect x="131" y="64" width="20" height="20" fill={color}/>
      <rect x="191" y="64" width="20" height="40" fill={color}/>
      <rect x="151" y="44" width="20" height="20" fill={color}/>
      {/* Y */}
      <rect x="241" y="124" width="20" height="20" fill={color}/>
      <rect x="241" y="104" width="20" height="20" fill={color}/>
      <rect x="261" y="44" width="20" height="20" fill={color}/>
      <rect x="261" y="64" width="20" height="20" fill={color}/>
      <rect x="241" y="84" width="20" height="20" fill={color}/>
      <rect x="221" y="44" width="20" height="20" fill={color}/>
      <rect x="221" y="64" width="20" height="20" fill={color}/>
      {/* G */}
      <rect x="331" y="44" width="20" height="20" fill={color}/>
      <rect x="331" y="124" width="20" height="20" fill={color}/>
      <rect x="311" y="124" width="20" height="20" fill={color}/>
      <rect x="291" y="104" width="20" height="20" fill={color}/>
      <rect x="351" y="104" width="20" height="20" fill={color}/>
      <rect x="291" y="84" width="20" height="20" fill={color}/>
      <rect x="291" y="64" width="20" height="20" fill={color}/>
      <rect x="331" y="84" width="40" height="20" fill={color}/>
      <rect x="311" y="44" width="20" height="20" fill={color}/>
      {/* O */}
      <rect x="421" y="44" width="20" height="20" fill={color}/>
      <rect x="421" y="124" width="20" height="20" fill={color}/>
      <rect x="401" y="124" width="20" height="20" fill={color}/>
      <rect x="381" y="104" width="20" height="20" fill={color}/>
      <rect x="441" y="104" width="20" height="20" fill={color}/>
      <rect x="381" y="84" width="20" height="20" fill={color}/>
      <rect x="441" y="84" width="20" height="20" fill={color}/>
      <rect x="381" y="64" width="20" height="20" fill={color}/>
      <rect x="441" y="64" width="20" height="20" fill={color}/>
      <rect x="401" y="44" width="20" height="20" fill={color}/>
      {/* Blue accent dot */}
      <rect x="501" y="124" width="20" height="20" transform="rotate(90 501 124)" fill="#0166FF"/>
    </svg>
  );
}
