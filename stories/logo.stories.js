import { withDesign } from 'storybook-addon-designs'

import AppLogo from '../components/AppLogo';

export default {
    title: 'Identidadd',
    component: AppLogo,
    decorators: [withDesign],
};

export const Logo = () => ({
    components: { AppLogo },
    template: '<AppLogo>as</AppLogo>',
});

Logo.story = {
    name: 'Logo',
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/3t5VsN7BLrnaPacMy81cYp/Design-System-Event-U?node-id=4%3A0'
        }
    }
}