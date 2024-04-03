import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/all.css';
import './styles/header.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
