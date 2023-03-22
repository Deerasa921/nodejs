module.exports = {
    // other Jest configuration options...
    reporters: ['default', 'jest-junit'],
    testResultsProcessor: 'jest-junit',
    junitReporter: {
      outputDirectory: 'test-results',
      outputName: 'junit.xml',
    },
  };
  