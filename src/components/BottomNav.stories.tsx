import React from 'react'
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0'

import { BottomNav, BottomNavProps } from './BottomNav'
import { Link } from 'gatsby'

export default {
  title: 'Example/BottomNav',
  component: BottomNav,
} as Meta

const Template: Story<BottomNavProps> = (args) => <BottomNav {...args} />

export const Simple = Template.bind({})

Simple.args = {
  // children: [<ballsack to="/">hello</ballsack>, <div>2</div>],
}
