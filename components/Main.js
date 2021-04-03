import City from './City'
import Header from './Header'
import { TIHANY, SZANTOD } from './data'
import { filterUpcoming } from './utils'
import Card from './Card'

export const Main = () => {
	const szantod = SZANTOD.filter(filterUpcoming)
	const tihany = TIHANY.filter(filterUpcoming)

	return (
		<main>
			<Header />

			<section>
				<div>
					<City>Szántódrév</City>
					{szantod.slice(0, 3).map(({ start, end }) => (
						<Card start={start} end={end} />
					))}
				</div>

				<div>
					<City>Tihanyrév</City>
					{tihany.slice(0, 3).map(({ start, end }) => (
						<Card start={start} end={end} />
					))}
				</div>
			</section>
			<style global jsx>{`
				body {
					margin: 0;
				}
			`}</style>
			<style jsx>{`
				main {
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					height: calc(100vh - 32px);
					padding: 16px 20px;
					background-color: #d8eefe;
					font-family: 'Recoleta';
				}

				section {
					flex: 1;
					display: flex;
					flex-direction: column;
					justify-content: space-evenly;
				}
			`}</style>
		</main>
	)
}
