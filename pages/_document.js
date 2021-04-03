import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
	render() {
		return (
			<Html lang="hu-HU">
				<Head>
					<meta name="theme-color" content="#3DA9FC" />
					<meta name="Description" content="Tihanyrév - Szántódrév komp" />
					<link rel="manifest" href="static/manifest.json" />
					<link rel="icon" href="static/img/favicon.png" />
					<link
						rel="apple-touch-icon"
						href="/static/img/apple-touch-icon-150x150.png"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		)
	}
}

export default MyDocument
