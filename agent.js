'use strict';

module.exports = agent => {
  if (agent.config.raven.url) require('./lib/raven')(agent);
};