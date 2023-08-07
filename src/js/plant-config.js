const plantConfig = {
  low_light: {
    toxic: {
      default: 'sansevieria',
      overwater: 'peaceLily',
    },
    non_toxic: {
      default: 'fern',
      overwater: 'fern',
    },
  },
  medium_light: {
    toxic: {
      default: 'aglaonema',
      overwater: 'peaceLily',
    },
    non_toxic: {
      default: 'monstera',
      overwater: 'peaceLily',
    },
  },
  outdoor: {
    toxic: {
      default: 'aloe',
      overwater: 'aloe',
    },
    non_toxic: {
      default: 'cactus',
      overwater: 'cactus',
    },
  },
};

export { plantConfig };
