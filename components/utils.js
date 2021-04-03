import dayjs from 'dayjs'

export const parseTime = (start) => {
	const [hour, min] = start.split(':')

	return dayjs().hour(hour).minute(min)
}

export const calcDiffMinute = (start) =>
	-dayjs().diff(parseTime(start), 'minute')

export const filterUpcoming = ({ start }) => dayjs().isBefore(parseTime(start))
