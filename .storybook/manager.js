import { addons, mockChannel } from '@storybook/addons';

addons.setConfig({
  previewTabs: {
    canvas: { title: 'Design'},
    'storybook/docs/panel': { title: 'How to'},
  },
});

addons.setChannel(mockChannel());
// get an instance to the communication channel for the manager and preview
const channel = addons.getChannel()

// switch body class for story along with interface theme
channel.on('DARK_MODE', isDark => {
  if (isDark) {
    document.body.classList.add('bg-dark')
  } else {
    document.body.classList.remove('bg-dark')
  }
});
