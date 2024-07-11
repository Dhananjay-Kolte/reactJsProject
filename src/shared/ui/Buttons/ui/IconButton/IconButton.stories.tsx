import { StoryFn, Meta } from '@storybook/react';
import { IconButton } from './IconButton';
import { CloseWhiteSVG } from '@/shared/assets/svg/buttons';

export default {
  argTypes: { backgroundColor: { control: 'color' } },
  component: IconButton,
  title: 'shared/Buttons/IconButton',
} as Meta<typeof IconButton>;

const Template: StoryFn<typeof IconButton> = args => <IconButton {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: <CloseWhiteSVG />,
};
