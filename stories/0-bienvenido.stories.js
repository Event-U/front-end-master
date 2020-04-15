import { linkTo } from '@storybook/addon-links';

import Welcome from './Welcome';

export default {
    title: 'Bienvenido',
    component: Welcome,
};

export const Intro = () => ({
    components: { Welcome },
    template: '<welcome :showApp="action" />',
    methods: { action: linkTo('Button') },
});