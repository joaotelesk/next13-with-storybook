export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
}

export function Text({ text, ...res }: TextProps) {
  return <span className="text-sky-900 text-2xl" {...res}>{text}</span>
}