import { StoryFn, Meta } from '@storybook/react';
import { Layout } from './Layout';
import FullLogo from '@/shared/assets/svg/Logo/FullLogo';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: Layout,
  title: 'shared/Layout',
} as Meta<typeof Layout>;

const Template: StoryFn<typeof Layout> = args => <Layout {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: (
    <div>
      <FullLogo />
      <h2>Bridges real world collectibles onto the blockchain</h2>
      <h2>Trade, flex and earn!</h2>
    </div>
  ),
};
