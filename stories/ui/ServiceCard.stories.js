import { withDesign } from 'storybook-addon-designs'

import ServiceCard from '../../components/ui/ServiceCard';

export default {
    title: 'Identidads',
    component: ServiceCard,
    decorators: [withDesign],
};

export const Card = () => ({
    components: { ServiceCard },
    template: '<service-card  />',
});

Card.story = {
    name: 'Cards/Service Card',
    parameters: {
        design: {
            type: 'figma',
            url: 'https://www.figma.com/file/3t5VsN7BLrnaPacMy81cYp/Design-System-Event-U?node-id=4%3A0'
        }
    }
}