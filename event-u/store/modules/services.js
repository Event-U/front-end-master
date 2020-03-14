const state = {
    categories: [{
            _id: 'asdasdasd',
            description: 'GGG',
            name: 'Inmobiliarios'
        },
        {
            _id: 'asdasd2asd',
            description: 'GGG',
            name: 'Músicos'
        },
        {
            _id: 'asdasssdasd',
            description: 'GGG',
            name: 'Performancee'
        },
        {
            _id: 'asdasssdasd',
            description: 'GGG',
            name: 'Juu'
        },
    ],
    services: [{
            _id: '33',
            name: 'Mariachis Dons Chucho',
            description: 'Los mejores músicos de la historia de la humanidad',
            measurementUnit: 'Hora',
            unitPrice: 250,
            imagen: 'nothing here',
            category: 'asdasssdasd'
        },
        {
            _id: '33',
            name: 'Mariachissss Don Chucho',
            description: 'Los mejores músicos de la historia de la humanidad',
            measurementUnit: 'Hora',
            unitPrice: 250,
            imagen: 'nothing here',
            category: 'asdasssdasd'
        },
        {
            _id: '33',
            name: 'Mariachis Don Chucho',
            description: 'Los mejores músicos de la historia de la humanidad',
            measurementUnit: 'Hora',
            unitPrice: 250,
            imagen: 'nothing here',
            category: 'asdasssdasd'
        },
        {
            _id: '33',
            name: 'Mariachis Don Chucho',
            description: 'Los mejores músicos de la historia de la humanidad',
            measurementUnit: 'Hora',
            unitPrice: 250,
            imagen: 'nothing here',
            category: '333'
        },
    ]
}

// getters
const getters = {
    servicesByCategoryId: state => name => {
        return state.services.filter(service => service.category === name)
    }
}

// actions
const actions = {

}

// mutations
const mutations = {

}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}