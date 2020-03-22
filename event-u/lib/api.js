const UrlBase = 'https://event-uback.mybluemix.net'

export default {
    // 
    // services
    async getServices() {
        const response = await fetch(`${UrlBase}/services/`)
        const jsonBody = await response.json()

        const { data } = jsonBody

        if (!response.ok) throw new Error('Ocurrió un error al obtener los servicios')

        return data.service
    },

    async createServices(service) {
        const response = await fetch(`${UrlBase}/services/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(service)
        })

        const jsonBody = await response.json()

        if (!response.ok) throw new Error('Ocurrió un error al crear los servicios')

        return jsonBody.service
    },
    async getServiceById(id) {
        const response = await fetch(`${UrlBase}/services/${id}`)
        const jsonBody = await response.json()

        const { data } = jsonBody.data

        if (!response.ok) throw new Error('Ocurrió un error al obtener los servicios')

        return data.service
    },
    // Quotations
    async getQuotations() {
        const response = await fetch(`${UrlBase}/quotation/`)
        const jsonBody = await response.json()

        const { data } = jsonBody

        if (!response.ok) throw new Error('Ocurrió un error al obtener las cotizaciones')
        return data.quotation
    },

    async createQuotation(quotation) {
        const response = await fetch(`${UrlBase}/quotation/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(quotation)
        })

        const jsonBody = await response.json()

        if (!response.ok) throw new Error('Ocurrió un error al crear las cotizaciones')

        return jsonBody.data.quotation
    },

    async getQuotationById(id) {
        const response = await fetch(`${UrlBase}/quotation/${id}`)
        const jsonBody = await response.json()

        const { data } = jsonBody.data

        if (!response.ok) throw new Error('Ocurrió un error al obtener los servicios')

        return data.quotation
    },
    async getQuotationByProviderAndStatus(provider, status) {

        const response = await fetch(`${UrlBase}/quotation/filtered/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                provider: provider,
                status: status
            })
        })
        const jsonBody = await response.json()

        const { data } = jsonBody

        if (!response.ok) throw new Error('Ocurrió un error al obtener los servicios')

        return data.quotation
    },
    async updateQuotation(id, newStatus) {
        // console.log(event)
        const bodyUpdateEvent = { status: newStatus }
        console.log(JSON.stringify(bodyUpdateEvent), id)
        const response = await fetch(`${UrlBase}/quotation/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyUpdateEvent)
        })
        const { data } = await response.json()
            // console.log(jsonBody)
        if (!response.ok) throw new Error('Ocurrió un error al obtener los usuarios')

        return data.quotation
    },
    // users
    async getUsers() {
        const response = await fetch(`${UrlBase}/users/`)
        const jsonBody = await response.json()

        const { data } = jsonBody.data

        if (!response.ok) throw new Error('Ocurrió un error al obtener los usuarios')

        return data.Users
    },

    async createUsers(user) {
        const response = await fetch(`${UrlBase}/users/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })

        const jsonBody = await response.json()

        if (!response.ok) throw new Error('Ocurrió un error al obtener los usuarios')

        return jsonBody.data
    },

    async getUserById(id) {
        const response = await fetch(`${UrlBase}/users/${id}`)
        const jsonBody = await response.json()

        const { data } = jsonBody.data

        if (!response.ok) throw new Error('Ocurrió un error al obtener los posts')

        return data
    },
    // event
    async getEvent() {
        // console.log('get events')
        const response = await fetch(`${UrlBase}/event/`)
        const jsonBody = await response.json()
            // console.log(jsonBody)
        const { data } = jsonBody
        if (!response.ok) throw new Error('Ocurrió un error al obtener los eventos')

        return data.event
    },

    async createEvent(event) {
        // console.log(event)
        const response = await fetch(`${UrlBase}/event/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        })

        const jsonBody = await response.json()
            // console.log(jsonBody)
        if (!response.ok) throw new Error('Ocurrió un error al obtener los usuarios')

        return jsonBody.data.event
    },
    async updateEvent(id, needs) {
        // console.log(event)
        const bodyUpdateEvent = { needs: needs }
        console.log(JSON.stringify(bodyUpdateEvent))
        const response = await fetch(`${UrlBase}/event/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyUpdateEvent)
        })

        const { data } = await response.json()
            // console.log(jsonBody)
        if (!response.ok) throw new Error('Ocurrió un error al obtener los usuarios')

        return data.event
    },

    async getEventById(id) {
        const response = await fetch(`${UrlBase}/event/${id}`)
        const jsonBody = await response.json()

        const { data } = jsonBody
        if (!response.ok) throw new Error('Ocurrió un error al obtener los posts')

        return data.event
    },
    // need
    async getNeed() {
        const response = await fetch(`${UrlBase}/need/`)
        const jsonBody = await response.json()

        const { data } = jsonBody
        if (!response.ok) throw new Error('Ocurrió un error al obtener los usuarios')

        return data.Need
    },

    async createNeed(need) {
        const response = await fetch(`${UrlBase}/need/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(need)
        })

        const jsonBody = await response.json()

        if (!response.ok) throw new Error('Ocurrió un error al crear la necesidad')

        return jsonBody.data.Need
    },

    async getNeedById(id) {
        const response = await fetch(`${UrlBase}/need/${id}`)
        const jsonBody = await response.json()

        const { data } = jsonBody

        if (!response.ok) throw new Error('Ocurrió un error al obtener la necesidad')

        return data.Need
    },
    async updateNeed(id, quotations) {
        // console.log(event)
        const bodyUpdateEvent = { quotation: quotations }
        console.log(JSON.stringify(bodyUpdateEvent))
        const response = await fetch(`${UrlBase}/need/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(bodyUpdateEvent)
        })
        const { data } = await response.json()
            // console.log(jsonBody)
        if (!response.ok) throw new Error('Ocurrió un error al obtener los usuarios')

        return data.event
    },
    // catServices
    async getCategorys() {
        const response = await fetch(`${UrlBase}/category`)
        const jsonBody = await response.json()

        const { data } = jsonBody

        if (!response.ok) throw new Error('Ocurrió un error al obtener los servicios')

        return data.category
    },

    async createCatServices(service) {
        const response = await fetch(`${UrlBase}/category/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(service)
        })

        const jsonBody = await response.json()

        if (!response.ok) throw new Error('Ocurrió un error al obtener los servicios')

        return jsonBody.data
    },
    async getCatServiceById(id) {
        const response = await fetch(`${UrlBase}/category/${id}`)
        const jsonBody = await response.json()

        const { data } = jsonBody.data

        if (!response.ok) throw new Error('Ocurrió un error al obtener los servicios')

        return data.category
    }
}