export default function RootLayout({ children }) {
    return (
        <html>
            <head>
                <title>Nested layouts by example</title>
            </head>

            <body>
                <header>header</header>
                {children}
            </body>
        </html>
    )
}
