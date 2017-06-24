const watson = require('watson-developer-cloud');
const tone_analyzer = watson.tone_analyzer({
  username: '',
  password: '',
  version: 'v3',
  version_date: '2016-05-19'
});

const toneAnalyzer = (message) => {
  return new Promise((resolve, reject) => {
    tone_analyzer.tone({text: message}, (err, res) => {
      if (err) reject(err);
      resolve(res);
    })
  });
};

module.exports = toneAnalyzer;