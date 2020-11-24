const tableData = data
const tbody = d3.select('tbody')

function buildTable(data) {
    tbody.html('')  // Clear existing data

    data.forEach(row => {
        const currentRow = tbody.append('tr')  // append row
        Object.values(row).forEach(value => {
            const cell = currentRow.append('td')
            cell.text(value)
        })
    })
}

const handleClick = () => {
    d3.event.preventDefault()

    const date = d3.select('#datetime').property('value')
    let filteredData = tableData;

    let date = d3.select('#datetime').property('value')
    let city = d3.select("#city").property('value')
    let state = d3.select('#state').property('value')
    let country = d3.select('#country').property('value')
    let shape = d3.select('#shape').property('value')

    if (date) {
        filteredData = filteredData.filter(row => row.datetime === date)
    }
    if (city) {
        filteredData = filteredData.filter(row => row.city === city)
    }
    if (state) {
        filteredData = filteredData.filter(row => row.state === state)
    }
    if (country) {
        filteredData = filteredData.filter(row => row.country === country)
    }
    if (shape) {
        filteredData = filteredData.filter(row => row.shape === shape)
    }
    
    tbody.html('')  // Clear existing data

    data.forEach(row => {
        const currentRow = tbody.append('tr')  // append row
        Object.values(row).forEach(value => {
            const cell = currentRow.append('td')
            cell.text(value)
        })
    })
}

d3.selectAll('#filter-btn').on('click', handleClick)
// buildTable(tableData)
