import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import Titulo from '@/components/Titulo';

export const metadata = {
  title: 'Carta Branca',
  description: 'Estabelecimento Carta Branca',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
		<Titulo/>
          {children}
      </body>
    </html>
  )
}
