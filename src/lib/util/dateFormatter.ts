function formatDate(date: Date) {
	return new Date(date).toLocaleDateString(undefined, {
		month: 'short',
		year: 'numeric'
	});
}

function formatDurationString(startDate: Date, endDate?: Date) {
	if (endDate) {
		return `${formatDate(startDate)} - ${formatDate(endDate)}`;
	}
	return `${formatDate(startDate)}`;
}

export { formatDurationString };
