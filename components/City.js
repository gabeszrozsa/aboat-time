import React from 'react'

const City = ({ children }) => {
	return (
		<h2>
			<span>{children} </span>
			<svg
				style={{ marginLeft: 8 }}
				width="18"
				height="24"
				viewBox="0 0 18 24"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<path
					d="M11.466 14.22C11.706 13.584 12 13.038 12.348 12.582H2.7V11.106H12.348C12.012 10.65 11.724 10.104 11.484 9.468H12.852C13.596 10.344 14.412 11.01 15.3 11.466V12.24C14.412 12.672 13.596 13.332 12.852 14.22H11.466Z"
					fill="#094067"
				/>
			</svg>
			<style jsx>{`
				h2 {
					font-weight: bold;
					font-size: 18px;
					line-height: 24px;
					color: #094067;
					display: flex;
					margin-bottom: 8xp;
					margin-top: 0;
				}
			`}</style>
		</h2>
	)
}

export default City
