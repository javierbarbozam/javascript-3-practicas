const plantConfig = {
  low_light: {
    toxic: {
      default: 'sansevieria',
      overwater: 'peace-lily',
    },
    non_toxic: {
      default: 'boston-fern',
      overwater: 'boston-fern',
    },
  },
  medium_light: {
    toxic: {
      default: 'aglaonema',
      overwater: 'peace-lily',
    },
    non_toxic: {
      default: 'monstera',
      overwater: 'peace-lily',
    },
  },
  outdoor: {
    toxic: {
      default: 'aloe-vera',
      overwater: 'aloe-vera',
    },
    non_toxic: {
      default: 'cactus',
      overwater: 'cactus',
    },
  },
};

export { plantConfig };
