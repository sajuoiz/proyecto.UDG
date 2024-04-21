import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/all.css';
import './styles/header.css';
import './styles/footer.css';
import './styles/base.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

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
