export const metadata = {
  title:       'My Website',
  description: 'Built with Webwill',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            if (window.self === window.top) return;
            var s = document.createElement('script');
            s.src = 'https://webwill.vercel.app/editor-bridge.js';
            s.async = true;
            document.body.appendChild(s);
          })();
        `}} />
      </body>
    </html>
  )
}
