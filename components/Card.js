import React from 'react'
import { calcDiffMinute } from './utils'

const Card = ({ start, end }) => {
	return (
		<>
			<section>
				<span>
					{start} — {end}
				</span>
				<span>{calcDiffMinute(start)} perc</span>
			</section>
			<style jsx>{`
				section {
					background: #fffffe;
					border-radius: 16px;
					padding: 16px;
					display: flex;
					justify-content: space-between;
					align-items: center;
					margin-bottom: 8px;
				}

				section > span:nth-child(1) {
					font-size: 20px;
					line-height: 27px;
					color: #5f6c7b;
					font-weight: 500;
				}

				section > span:nth-child(2) {
					font-weight: 900;
					font-size: 16px;
					line-height: 22px;
					color: #3da9fc;
				}
			`}</style>
		</>
	)
}

export default Card
