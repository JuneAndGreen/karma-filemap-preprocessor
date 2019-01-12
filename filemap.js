const escapeContent = content => {
  return content.replace(/\\/g, '\\\\').replace(/'/g, '\\\'').replace(/\r?\n/g, '\\n\' +\n    \'');
};

const createFileMapPreprocessor = logger => {
  const log = logger.create('preprocessor.filemap');

  return (content, file, done) => {
    log.debug('Processing "%s".', file.originalPath);
    done(`window.__FILE_MAP__ = window.__FILE_MAP__ || {};window.__FILE_MAP__['${file.originalPath}'] = '${escapeContent(content)}'`);
  };
};

createFileMapPreprocessor.$inject = ['logger'];

module.exports = createFileMapPreprocessor;
