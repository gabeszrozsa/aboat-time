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
					<style>
						{`
						@font-face {
							font-family: 'Recoleta';
							src: url('Recoleta-Black.eot');
							src: local('Recoleta Black'), local('Recoleta-Black'),
								url('Recoleta-Black.eot?#iefix') format('embedded-opentype'),
								url('Recoleta-Black.woff2') format('woff2'),
								url('Recoleta-Black.woff') format('woff'),
								url('Recoleta-Black.ttf') format('truetype');
							font-weight: 900;
							font-style: normal;
						}

						@font-face {
							font-family: 'Recoleta';
							src: url('Recoleta-Bold.eot');
							src: local('Recoleta Bold'), local('Recoleta-Bold'),
								url('Recoleta-Bold.eot?#iefix') format('embedded-opentype'),
								url('Recoleta-Bold.woff2') format('woff2'),
								url('Recoleta-Bold.woff') format('woff'),
								url('Recoleta-Bold.ttf') format('truetype');
							font-weight: bold;
							font-style: normal;
						}

						@font-face {
							font-family: 'Recoleta';
							src: url('Recoleta-Medium.eot');
							src: local('Recoleta Medium'), local('Recoleta-Medium'),
								url('Recoleta-Medium.eot?#iefix') format('embedded-opentype'),
								url('Recoleta-Medium.woff2') format('woff2'),
								url('Recoleta-Medium.woff') format('woff'),
								url('Recoleta-Medium.ttf') format('truetype');
							font-weight: 500;
							font-style: normal;
						}
						`}
					</style>
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
