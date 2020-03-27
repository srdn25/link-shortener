module.export = {
  logger: {
    serializers: {
      res({ statusCode }) {
        // The default
        return {
          statusCode
        };
      },
      req({ method, url, path, parameters, headers }) {
        return {
          method,
          url,
          path,
          parameters,
          headers,
        };
      }
    }
  }
};
