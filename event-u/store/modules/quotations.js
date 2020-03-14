const state = {
    quotations: [{
            _id: '11111111',
            provider: {
                businessName: 'Birza'
            },
            price: 1400,
            image: 'https://www.specialevents.com/sites/specialevents.com/files/styles/article_featured_retina/public/2018_Rental_Trends_Bright_Zialena-1_1.jpg',
            state: 3,
            date: '25 de Mayo',
            description: 'Las mejores mesas de la ciudad',
            need: '333'
        },
        {
            _id: '2222222222',
            provider: {
                businessName: 'Chuchito Perez'
            },
            price: 125,
            image: 'https://www.jjslist.com/blog/wp-content/uploads/2015/09/cocktail-tables.jpg',
            state: 2,
            date: '25 de Mayo',
            description: 'Las mejores mesas de la ciudad',
            need: '333'
        },
        {
            _id: '333333333',
            provider: {
                businessName: 'Makabi'
            },
            price: 1252,
            image: 'https://farmandtablenm.com/wp-content/uploads/2020/01/Ex-novo-dinner-2019-table.jpg',
            state: 1,
            date: '25 de Mayo',
            description: 'Las mejores mesas de la ciudad',
            need: '333'
        },
        {
            _id: '333333333',
            provider: {
                businessName: 'Makabi'
            },
            price: 1252,
            image: 'https://farmandtablenm.com/wp-content/uploads/2020/01/Ex-novo-dinner-2019-table.jpg',
            state: 1,
            date: '25 de Mayo',
            description: 'Las mejores mesas de la ciudad',
            need: '333'
        },
    ]
}

// getters
const getters = {
    getQuotationsByNeedId: state => name => {
        return
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