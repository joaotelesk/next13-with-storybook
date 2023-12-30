
# ✅Guia de como configurar e roda Storybook no Next 13 ou 14

- Iniciar o projeto seguindo todas as recomendações do Next(typescript, ESLint, Tailwind, src/ directory, App Router, import alias e @/*)
```bash
 npx create-next-app@latest
```

- Instalar o Storybook com npm ou pnpm.
Obs: Com o Yarn, podem ocorrer alguns erros; recomendo usar um dos outros dois pacotes.

```bash
# Obs: Com o Yarn, podem ocorrer alguns erros; recomendo usar um dos outros dois pacotes.
 npx storybook@latest init
```

- Após instalar o Storybook, ele inicializará automaticamente ou você pode executar o comando 'npm run storybook' para inicializá-lo.
4 - No arquivo de configuração do Tailwind (tailwind.config.ts) que está na raiz do projeto, insira o caminho da pasta onde as stories ficarão dentro da seção 'content'

```bash
 content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/stories/**/*.{js,ts,jsx,tsx,mdx}',
  ],
```

- No arquivo de configuração do TypeScript, insira 'baseUrl'.
 "baseUrl": ".",
```bash
"baseUrl": ".",
```

- Ajuste a importação da folha de estilo utilizando alias no arquivo src/app/layout.tsx

```bash
# Obs: Movi a folha de estilo que estava dentro de 'src/app' para 'src/styles'.
import "@/styles/globals.css"
```

- No arquivo '.storybook/preview.ts', insira o caminho para a folha de estilo global da aplicação, utilizando alias.
```bash
import "@/styles/globals.css"
```

8 - Criei um componente chamado 'Text' como exemplo dentro da pasta 'src/components'.

```bash
export interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string
}

export function Text({ text, ...res }: TextProps) {
  return <span className="text-sky-900 text-2xl" {...res}>{text}</span>
}
```

- Criei o story para o componente 'Text' dentro da pasta 'src/stories/component'.

```bash
import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextProps } from "@/components/text";

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    text: "Example"
  }
} as Meta<TextProps>

export const Texto: StoryObj<TextProps> = {}
```
